// 里程系与坐标系正反算两个核心的函数实现

import axios from '@/libs/api.request'

// 根据线路里程计算返回坐标点与轨面高,有方位角
function GetBLPoint (lc) {
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
function projectonline (pos) {
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
export function GetBLPoint2 (lc, offset) {
  var pos = GetBLPoint(lc)
  if (pos == null) return null
  pos.yaw = +90 // 旋转90度
  return pos.move(offset, 0, 0) // 要测试，如果左右侧反了，则pos.move(-offset,0,0)
}

// wx,wy为屏幕窗口坐标
export function GetBLPoint3 (wx, wy, offset) {
  // IWorldPointInfo70 mloc = StaticCommon.mSGWorld.Window.PixelToWorld(wx, wy, WorldPointType.WPT_TERRAIN)
  var mloc = mSGWorld.Window.PixelToWorld(wx, wy, 0)
  var lcoff = projectonline(mloc.Position)

  offset = lcoff[1] // offset能这样返回吗？

  return GetBLPoint(lcoff[0])
}

// 根据里程得到行政区划名称
export function GetXZQH (lc) {
  // var pos = GetBLPoint(lc)
  //    LinePoint lp = StaticCommon.mLinePos.GetBLPoint(lc)
  return GetXZQHByBL(lp.YL.ToString(), lp.XB.ToString())
}

export const GetXZQHByBL = (lng, lat) => {
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

// 以下为C#代码，主要思路就是对url访问后得到的xml进行解析得到行政区名称，请用JS翻译
/*
function GetXZQHByBL(lng, lat) {

  try {
    let url = 'http://api.map.baidu.com/geocoder/v2/?ak=45Xv0NtLzjOGbLvR5yxvdyCtOGFHTNyu&location=' + lat + ',' + lng + '&output=xml&pois=1'
    WebRequest request = WebRequest.Create(url)
    request.Method = "POST"
    XmlDocument xmlDoc = new XmlDocument()
    let sendData = xmlDoc.InnerXml
    byte[] byteArray = Encoding.Default.GetBytes(sendData)

    Stream dataStream = request.GetRequestStream()
    dataStream.Write(byteArray, 0, byteArray.Length)
    dataStream.Close()

    WebResponse response = request.GetResponse()
    dataStream = response.GetResponseStream()
    StreamReader reader = new StreamReader(dataStream, System.Text.Encoding.GetEncoding("utf-8"))
    let responseXml = reader.ReadToEnd()

    XmlDocument xml = new XmlDocument()
    xml.LoadXml(responseXml)
    let status = xml.DocumentElement.SelectSingleNode("status").InnerText

    if (status == "0") {
      let sxzh = ""
      XmlNodeList nodes = xml.DocumentElement.GetElementsByTagName("province")
      if (nodes.Count > 0) sxzh = nodes[0].InnerText
      nodes = xml.DocumentElement.GetElementsByTagName("city")
      if (nodes.Count > 0) sxzh += "|" + nodes[0].InnerText
      nodes = xml.DocumentElement.GetElementsByTagName("district")
      if (nodes.Count > 0) sxzh += "|" + nodes[0].InnerText
      nodes = xml.DocumentElement.GetElementsByTagName("town")
      if (nodes.Count > 0) sxzh += "|" + nodes[0].InnerText

      return sxzh
    }
  } catch {

  }
  return ""
}
*/
