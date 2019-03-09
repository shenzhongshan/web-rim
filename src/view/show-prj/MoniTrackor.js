/* eslint-disable */
import {
  CircularRouteType,
  DynamicMotionStyle,
  AltitudeTypeCode
} from './SGWorldAPIEnums.js'
import SKCommonTools from './SKCommonTools.js'

class MoniTrackor {

  constructor(sgworld, mCurCaseID, mLinePos,LibPath) {
    this.mSGWorld = sgworld
    this.mCurCaseID = mCurCaseID
    this.LibPath = LibPath
    this.mLinePos = mLinePos
    this.mSKTools = new SKCommonTools(sgworld)
  }
  //= "模拟列车"= @"D:\铁路数据中心\Model\rail.dae"
  AttachDynamicObject(lineID, sname, objfile, sc = 1.0) {
    try {
      let sNode = FindAndCreateGroup("", "展示批注");
      let gPolyObj = mSG.Creator.CreateDynamicObject(0, DynamicMotionStyle.MOTION_MANUAL, DynamicObjectType.DYNAMIC_3D_MODEL, objfile, sc, AltitudeTypeCode.ATC_TERRAIN_ABSOLUTE, sNode, sname); // 1, 1, "010", 100, 0, 0, "010");
      gPolyObj.Attachment.AttachTo(lineID, 0, 0, 0, 0, 0, 0);
      gPolyObj.ShowTrack = false;
      gPolyObj.CircularRoute = CircularRouteType.CRT_JUMP_TO_START;
      gPolyObj.SaveInFlyFile = true;
      return gPolyObj;
    } catch (ex) {
      alert(ex.Message + ex.StackTrace);
      return null;
    }

  }

  Run() {
    let routetype = this.mSGWorld.ProjectTree.GetClientData(this.mCurCaseID, "RouteType");
    let str = "_" + this.mSGWorld.ProjectTree.GetItemName(this.mCurCaseID) + "_" + Date.now().toString();
    let radNext = (max) => Math.round(Math.random() * 100) % max
    let c = 0;
    let carnum = 15;
    let LineID = this.mSKTools.FindFirstObjectID("基线", this.mCurCaseID)
    if (LineID == "") return;

    switch (routetype) {
      case "单线铁路":
      case "单线地铁":
      case "双线铁路":
      case "双线地铁":
        AttachDynamicObject(LineID, "列车漫游" + str, this.LibPath + "BIMModel\\Common\\rail.xpl2");
        break;

      case "河道":
        AttachDynamicObject(LineID, "游船" + str, this.LibPath + "BIMModel\\Common\\boat.xpl2");
        break;
      case "单向两车道":
      case "单向三车道":
        c = radNext(carnum);
        AttachDynamicObject(LineID, "机动" + str, this.LibPath + "BIMModel\\Common\\car" + String(c) + ".xpl2");
        break;
      case "单向三车道":
      case "双向八车道":
      case "双向六车道":
      case "双向四车道":
        alert("No Demo");
        break;
      case "云轨":
        AttachDynamicObject(LineID, "云轨机车" + str, this.LibPath + "BIMModel\\Common\\BYDRail.xpl2");
        break;
    }

  }

  Fly() {
    let str = Date.now().toString();
    let mplane = this.mSKTools.CreateDynamicObject(this.mLinePos.mXYH_menterline, "飞机巡航" + str, this.LibPath + "BIMModel\\Common\\Boeing787.xpl2", 500, this.mLinePos.mTool_xyH2BLH, 2000, 3);
    let sNode = this.mSKTools.FindAndCreateGroup("", "展示批注");
    let mV = this.mSGWorld.Creator.CreateVideoOnTerrain(Application.StartupPath + "\\RES\\LiDARScan.wmv", this.mSGWorld.Creator.CreatePosition(), sNode, "扫描区域" + str);
    mV.ShowProjectionLines = true;
    mV.VideoOpacity = 0.3;
    mV.UseTelemetry = false;
    mV.Position.Pitch = -90;
    mV.Attachment.AttachTo(mplane.ID, 0, 0, 0, 0, 0, 0);
  }
}
export default MoniTrackor
