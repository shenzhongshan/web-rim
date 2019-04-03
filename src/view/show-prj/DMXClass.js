// 地面线类，地面线最终得到  gGridArray[0]  轨面线，轨面线最终得到  gGridArray[1]
import axios from '@/libs/api.request'
/* eslint-disable */
export default class DMXClass {

  constructor (sgworld) {
    this.SGWorld = sgworld
    this.gMinAltitude = 0 // 确定Y轴原坐标
    // this.mSKTools = new SKCommonTools(sgworld)
    this.gPositionsArray = [] // 地面线上点的位置
    this.gStep = 50 // 取点间距
    // 每条线上点的网格值(lc,h)
    // gGridArray[0]存放的就是地面线点[lc,eh]，
    // gGridArray[1]存放的轨面线点，
    // gGridArray[2]存放是坡度线点，全是（里程，高程）点对元素,因此要输出地面线，只需要将gGridArray[0]输出成cvs格式即可。
    this.gGridArray = []
    this.firstlc = null
    this.endlc = null
  }

  // 通过基线对象所关联的每个顶点的里程属性来初始化gGridArray[0],好处是每个顶点的里程与工程上的里程一致。
  DMX_DrawBySetLC (obj) {
    let lastCoord
    let currCoord
    let SegmentLength

    let tmpstep
    let lc0, lc1, lcstep
    let polylineGeometry = obj.Geometry

    this.gPositionsArray = []
    this.gGridArray[0] = []
    this.gGridArray[1] = []
    this.gMinAltitude = 999999999

    lc0 = parseFloat(obj.ClientData('LC0'))
    lastCoord = SGWorld.Creator.CreatePosition(polylineGeometry.Points.Item(0).X, polylineGeometry.Points.Item(0).Y, 0, 3)
    AddDMXPoint(lastCoord, lc0, polylineGeometry.Points.Item(0).Z)

    for (var i = 1; i < polylineGeometry.Points.count; i++) {
      currCoord = SGWorld.Creator.CreatePosition(polylineGeometry.Points.Item(i).X, polylineGeometry.Points.Item(i).Y, 0, 3)
      lc1 = parseFloat(obj.ClientData('LC' + i)) // 获取每个顶点的里程值

      lastCoord.yaw = lastCoord.AimTo(currCoord).yaw
      SegmentLength = lastCoord.DistanceTo(currCoord)

      var count = Math.ceil(SegmentLength / gStep)
      tmpstep = SegmentLength / count
      lcstep = (lc1 - lc0) / count
      for (var k = 1; k < count; k++) {
        lc0 += lcstep
        lastCoord = lastCoord.MoveToward(currCoord, tmpstep)
        AddDMXPoint(lastCoord, lc0, -1)
      }
      AddDMXPoint(currCoord, lc1, polylineGeometry.Points.Item(i).Z)
      lastCoord = currCoord.copy()
      lc0 = lc1
    }
    endlc = lc1

    return true
  }

  // 通过基线对象顶点距离自动计算里程来初始化gGridArray[0],好处对所有线都适用。
  DMX_DrawByDist (polylineGeometry, obj) {
    let lastCoord
    let currCoord
    let SegmentLength
    let lc0, lc1, lcstep

    gPositionsArray = []
    gGridArray[0] = []
    gGridArray[1] = []
    gMinAltitude = 999999999
    lastCoord = SGWorld.Creator.CreatePosition(polylineGeometry.Points.Item(0).X, polylineGeometry.Points.Item(0).Y, 0, 3)
    lc0 = firstlc

    AddDMXPoint(lastCoord, lc0, polylineGeometry.Points.Item(0).Z)

    for (var i = 1; i < polylineGeometry.Points.count; i++) {
      currCoord = SGWorld.Creator.CreatePosition(polylineGeometry.Points.Item(i).X, polylineGeometry.Points.Item(i).Y, 0, 3)

      lastCoord.yaw = lastCoord.AimTo(currCoord).yaw
      SegmentLength = lastCoord.DistanceTo(currCoord) // may calc with Z value

      lc1 = lc0 + SegmentLength
      var count = Math.ceil(SegmentLength / gStep)
      lcstep = (lc1 - lc0) / count
      for (var k = 1; k < count; k++) {
        lc0 += lcstep
        lastCoord = lastCoord.MoveToward(currCoord, lcstep)
        AddDMXPoint(lastCoord, lc0, -1)
      }

      AddDMXPoint(currCoord, lc1, polylineGeometry.Points.Item(i).Z)
      lastCoord = currCoord.copy()
      lc0 = lc1
    }
    return true
  }

  // -------------
  // AddDMXPoint  0
  AddDMXPoint (pos, lc, th) {
    var position1 = pos.ToAbsolute(0)
    var Altitude = SGWorld.Terrain.GetGroundHeightInfo(position1.X, position1.Y, 2, true).Position.Altitude
    position1.Altitude = Altitude

    if (Altitude < gMinAltitude) gMinAltitude = Altitude

    gPositionsArray.push(position1)
    gGridArray[0].push([lc, Altitude])
    if (th > 0) gGridArray[1].push([lc, th])
  }

  DMX_GetGeolayer () {
    var len = gGridArray[0].length
    var th, lc

    gGridArray[3] = []
    for (let i = 0; i < len; i++) {
      lc = gGridArray[0][i][0]
      th = gGridArray[0][i][1] - 10 - 3 * Math.random()
      gGridArray[3][i] = [lc, th]
    }

    gGridArray[4] = []
    for (let i = 0; i < len; i++) {
      lc = gGridArray[0][i][0]
      th = gGridArray[3][i][1] - 20 - 5 * Math.random()
      gGridArray[4][i] = [lc, th]
    }

    gGridArray[5] = []
    for (let i = 0; i < len; i++) {
      lc = gGridArray[0][i][0]
      th = gGridArray[4][i][1] - 40 - 8 * Math.random()
      gGridArray[5][i] = [lc, th]
    }

    gGridArray[6] = []
    for (let i = 0; i < len; i++) {
      lc = gGridArray[0][i][0]
      th = gGridArray[5][i][1] - 80 - 15 * Math.random()
      gGridArray[6][i] = [lc, th]
    }
  }

  // 获取任何里程的地面高程
  DMX_getlcElev (lc) {
    var len = gGridArray[0].length

    for (var i = 1; i < len; i++) {
      if (lc >= gGridArray[0][i - 1][0] && lc <= gGridArray[0][i][0]) {
        return gGridArray[0][i - 1][1] + (gGridArray[0][i][1] - gGridArray[0][i - 1][1]) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
      }
    }
  }

  // 获取任何里程的轨面高程
  DMX_getTrackH (lc) {
    var len = gGridArray[1].length

    for (var i = 1; i < len; i++) {
      if (lc >= gGridArray[1][i - 1][0] && lc <= gGridArray[1][i][0]) {
        return gGridArray[1][i - 1][1] + (gGridArray[1][i][1] - gGridArray[1][i - 1][1]) * (lc - gGridArray[1][i - 1][0]) / (gGridArray[1][i][0] - gGridArray[1][i - 1][0])
      }
    }
  }

  // 跳转到任意里程
  DMX_JumpToLC (lc) {
    // alert(lc)
    if (!isFollow) return
    if (lc < firstlc) return
    if (lc > endlc) return

    var len = gGridArray[0].length
    var x, y, h
    var pos

    for (var i = 1; i <= len; i++) {
      if (lc >= gGridArray[0][i - 1][0] && lc <= gGridArray[0][i][0]) {
        h = gGridArray[0][i - 1][1] + (gGridArray[0][i][1] - gGridArray[0][i - 1][1]) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
        x = gPositionsArray[i - 1].X + (gPositionsArray[i].X - gPositionsArray[i - 1].X) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
        y = gPositionsArray[i - 1].Y + (gPositionsArray[i].Y - gPositionsArray[i - 1].Y) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
        pos = SGWorld.Creator.CreatePosition(x, y, h + 100, 3)
        pos.pitch = -90
        SGWorld.Navigate.JumpTo(pos)
        return
      }
    }
  }

  // 获取任单里程的坐标
  GetPosByLc (lc) {
    if (lc < firstlc) return null
    if (lc > endlc) return null

    var len = gGridArray[0].length
    var x, y, h
    var pos

    for (var i = 1; i <= len; i++) {
      if (lc >= gGridArray[0][i - 1][0] && lc <= gGridArray[0][i][0]) {
        h = gGridArray[0][i - 1][1] + (gGridArray[0][i][1] - gGridArray[0][i - 1][1]) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
        x = gPositionsArray[i - 1].X + (gPositionsArray[i].X - gPositionsArray[i - 1].X) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
        y = gPositionsArray[i - 1].Y + (gPositionsArray[i].Y - gPositionsArray[i - 1].Y) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
        pos = SGWorld.Creator.CreatePosition(x, y, h, 3)
        return pos
      }
    }
    return null
  }

  // -------------
  // 跳转至任意给定地面线点索引的点位置
  DMX_JumpToPoint (Point) {
    var nextPoint
    var nextSign
    if (Point >= gPositionsArray.length) {
      nextPoint = gPositionsArray[Point - 1].Copy()
      nextSign = 1
    } else {
      nextPoint = gPositionsArray[Point + 1].Copy()
      nextSign = -1
    }

    var jumpPos = gPositionsArray[Point].Copy()
    var tmpPos = gPositionsArray[Point].Copy()
    jumpPos.Distance = 250
    jumpPos.Pitch = -60
    jumpPos.Yaw = tmpPos.AimTo(nextPoint).Yaw + 90 * nextSign

    SGWorld.Navigate.JumpTo(jumpPos)
  }

// 里程系与坐标系正反算两个核心的函数实现
// 根据线路里程计算返回坐标点与轨面高,有方位角
GetBLPoint (lc) {
  if (lc < firstlc) return null
  if (lc > endlc) return null

  var len = gGridArray[0].length
  var x, y, h
  var pos

  for (var i = 1; i <= len; i++) {
    if (lc >= gGridArray[0][i - 1][0] && lc <= gGridArray[0][i][0]) {
      h = gGridArray[1][i - 1][1] + (gGridArray[1][i][1] - gGridArray[1][i - 1][1]) * (lc - gGridArray[1][i - 1][0]) / (gGridArray[1][i][0] - gGridArray[1][i - 1][0])
      x = gPositionsArray[i - 1].X + (gPositionsArray[i].X - gPositionsArray[i - 1].X) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
      y = gPositionsArray[i - 1].Y + (gPositionsArray[i].Y - gPositionsArray[i - 1].Y) * (lc - gGridArray[0][i - 1][0]) / (gGridArray[0][i][0] - gGridArray[0][i - 1][0])
      pos = SGWorld.Creator.CreatePosition(x, y, h, 3)
      pos.yaw = gPositionsArray[i - 1].AimTo(gPositionsArray[i]).yaw
      return pos
    }
  }
  return null
}

// 将一个点投影到线位上返回里程【里程，左右距】
projectonline (pos) {
  let len = gPositionsArray.length
  let dis
  let markdis = 9e10
  var markk = 0

  for (var i = 1; i < len; i++) {
    dis = gPositionsArray[i].DistanceTo(pos)
    if (dis < markdis) {
      dis = markdis
      markk = i
    } else break // 大半径线路适用
  }

  var pos1, pos2 // 找出两最临近点
  if (gPositionsArray[markk - 1].DistanceTo(pos) < gPositionsArray[markk + 1].DistanceTo(pos)) {
    pos1 = gPositionsArray[markk - 1]
    pos2 = gPositionsArray[markk]
    markk = markk - 1
  } else {
    pos1 = gPositionsArray[markk]
    pos2 = gPositionsArray[markk + 1]
  }

  pos1.yaw = pos1.AimTo(pos2).yaw
  pos.yaw = pos1.AimTo(pos).yaw

  var angle = pos1.yaw - pos.yaw
  angle = angle * Math.PI / 180.0

  dis = pos1.DistanceTo(pos)
  // 返回  [里程，左右距]
  return [gGridArray[0][markk][0] + dis * Math.cos(angle), dis * Math.sin(angle)]
}

// 下面是拓展函数

// 根据线路里程、左右距计算返回坐标点与轨面高
GetBLPointByLc (lc, offset = 0) {
  var pos = GetBLPoint(lc)
  if (pos == null) return null
  pos.yaw = +90 // 旋转90度
  return pos.move(offset, 0, 0) // 要测试，如果左右侧反了，则pos.move(-offset,0,0)
}

// wx,wy为屏幕窗口坐标
GetBLPointByWxy (wx, wy) {
  // IWorldPointInfo70 mloc = StaticCommon.mSGWorld.Window.PixelToWorld(wx, wy, WorldPointType.WPT_TERRAIN)
  let mloc = mSGWorld.Window.PixelToWorld(wx, wy, 0)
  let lcoff = projectonline(mloc.Position)

  let offset = lcoff[1]

  return [GetBLPoint(lcoff[0]), offset]
}

// 根据里程得到行政区划名称
GetXZQH(lc) {
  let lp = GetBLPointByLc(lc)
  return GetXZQHByBL(lp.YL.ToString(), lp.XB.ToString())
}

GetXZQHByBL (lng, lat) {
  let sxzh = ''
  axios.request({
    url: 'http://api.map.baidu.com/geocoder/v2/',
    method: 'get',
    data: {
      ak: '45Xv0NtLzjOGbLvR5yxvdyCtOGFHTNyu',
      location: lat + ',' + lng,
      output: 'json',
      pois: 1
    }
  }).then(res => {
    const data = res.data
    if (data.status === 0) {
      const ac = data.result.addressComponent
      sxzh = ac.province + '|' + ac.city + '|' + ac.town
    }
  }).catch(error => {
    console.log(error)
  })
  return sxzh
}
}
