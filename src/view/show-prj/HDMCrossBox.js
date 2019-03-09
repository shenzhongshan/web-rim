/* eslint-disable */
import {
  CircularRouteType,
  DynamicMotionStyle,
  AltitudeTypeCode
} from './SGWorldAPIEnums.js'
import SKCommonTools from './SKCommonTools.js'

class HDMCrossBox {

  constructor(sgworld, mLinePos) {
    this.mSGWorld = sgworld
    this.mLinePos = mLinePos
    this.mSKTools = new SKCommonTools(sgworld)
    this.isStart = false
    this.prelc = -1
  }

  Start() {
    if (!this.mLinePos.IsVaild) return;
    this.mSGWorld.AttachEvent('OnLButtonDown', MSGWorld_OnLButtonDown)


  }
  //  ITerrain3DRectBase70 mBox = null;
  ShowHDMCross(X, Y) {
    let offset = 10.0;
    let pt = this.mLinePos.GetBLPoint(X, Y, offset);
    if (Math.abs(pt.LC - this.prelc) < 0.5) return;
    this.prelc = pt.LC;
    offset = 80;

    let lc = pt.LC;
    let mst = this.mLinePos.GetPoint3DFList([lc, lc, lc - 100.0, lc - 100.0], [offset, -offset, -offset, offset]);
    for (var k = 0; k < 4; k++) mst[k].ZH = pt.ZH - 100;
    for (var k = 0; k < 4; k++) mst.push(new Point3DF(mst[k].XB, mst[k].YL, pt.ZH + 100));
    let geometry = this.mSGWorld.Creator.GeometryCreator.CreateLineStringGeometry(mst.toArray());
    this.mSGWorld.Analysis.ShowCrossSectionBox(geometry, false, "#FFFF00FF");
    //LinePoint mloc = this.mLinePos.GetBLPoint((float)pt.LC+0.5f);
    //mloc.ZH = mst[0].ZH;
    //IPosition70 pos =  this.mSKTools.CreatePosion(mloc);
    //if (mBox==null)
    //{
    //    mBox = this.mSGWorld.Creator.CreateBox(pos, 0.4, 180, 200);
    //    mBox.SaveInFlyFile = false;
    //    mBox.SetParam(5450, 1);
    //    mBox.FillStyle.Color.FromHTMLColor("#646464");
    //    mBox.FillStyle.Color.SetAlpha(50);
    //    mBox.TreeItem.Name = pt.ToDKString()+"_横断�?";
    //}
    //else
    //{
    //    mBox.Position = pos;
    //    mBox.TreeItem.Name = pt.ToDKString() + "_横断�?";
    //}

  }

  MSGWorld_OnLButtonDown(Flags, X, Y) {
    if (!isStart) {
      ShowHDMCross(X, Y);
      this.mSGWorld.AttachEvent('OnFrame',MSGWorld_OnFrame)
      isStart = true;
    } else {
      this.mSGWorld.DetachEvent('OnFrame',MSGWorld_OnFrame)
      this.mSGWorld.DetachEvent('OnLButtonDown',MSGWorld_OnLButtonDown)
      isStart = false;

      if (confirm("保留提取断面吗？")) {
        this.mSGWorld.Analysis.HideCrossSectionBox();
        // if (mBox != null) this.mSGWorld.ProjectTree.DeleteItem(mBox.ID);
      }
    }
    return true;
  }

  MSGWorld_OnFrame() {
    let pos = this.mSGWorld.Window.GetMouseInfo();
    ShowHDMCross(pos.X, pos.Y);
  }
}
export default HDMCrossBox
