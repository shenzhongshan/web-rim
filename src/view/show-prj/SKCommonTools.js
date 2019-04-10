/* eslint-disable */
import {ItemCode, AccuracyLevel} from './SGWorldAPIEnums.js'

class SKCommonTools {

  constructor (sgworld){
    this.mSGWorld = sgworld
  }

  GetFlyPath () {
      let str = this.mSGWorld.Project.Name;
      return Path.GetFullPath(str).Replace(Path.GetFileName(str), "");
  }

  //给定节点向上追索到其项目节点
  JudgeProjectNode (id) {
      do {
          try
          {
            let s = this.mSGWorld.ProjectTree.GetClientData(id, "节点类型");
            if (s == "项目节点") return id;
          }catch(err)
          {

          }

            id = this.mSGWorld.ProjectTree.GetNextItem(id, ItemCode.PARENT);
            if (id == this.mSGWorld.ProjectTree.RootID) return "";
            if (id == "") return "";

      } while (true);
  }

  //获取每个点的地形高程
  GetElev(xb, yl) {
      return this.mSGWorld.Terrain.GetGroundHeightInfo(yl, xb, AccuracyLevel.ACCURACY_FORCE_BEST_RENDERED, false).Position.Altitude;
  }

  CreateColor(r, g, b, a = 255){
      return this.mSGWorld.Creator.CreateColor(r, g, b, a);
  }
  // 用于自动找到文档打开时第一个方案ID,此方案ID应该赋给mCurCaseID作为全局变量存在
  FindFirstCaseID () {
    let mRes = this.GetGroupFeaturesID('')
    let mark = ''
    for (const sid of mRes) {
      try{
        mark = this.mSGWorld.ProjectTree.GetClientData(sid, '节点类型')
      }catch(error){
        console.log(error)
      }
      if (mark ==='项目节点') {
       return sid
      }
    }
    return ''
  }

  // <summary>
  // 递归遍历查找ParentID节点下所有的节点名称为objName的所有ID
  // </summary>
  // <param name="objName"></param>
  // <param name="ParentID"></param>
  // <returns></returns>
  FindObjectID(objName, ParentID) {
      let mIDs = [];
      try{
          let ChildID = this.mSGWorld.ProjectTree.GetNextItem(ParentID, ItemCode.CHILD);
          while (true){
              if (!ChildID || ChildID.trim()=="") break;
              if (this.mSGWorld.ProjectTree.GetItemName(ChildID) == objName){
                  mIDs.push(ChildID);
              }
              if (this.mSGWorld.ProjectTree.IsGroup(ChildID)){
                  let mSubIDs = this.FindObjectID(objName, ChildID);
                  if (mSubIDs.length > 0) mIDs.push(...mSubIDs);
              }
              ChildID = this.mSGWorld.ProjectTree.GetNextItem(ChildID, ItemCode.NEXT);
          }
      } catch(e) {
          // return mIDs;
          // Nonthing
      }
      return mIDs;
  }

 //返回其中第一个
  FindFirstObjectID(objName, ParentID) {
    debugger
    let s = this.FindObjectID(objName, ParentID)
    if (s.length > 0) return s[0]
    return ""
  }

  //递归遍历查找ParentID节点下所有的节点名称含有objName的所有ID
  FindObjectIDByLikeName (objName, ParentID) {
    let mIDs = []
    let ChildID = this.mSGWorld.ProjectTree.GetNextItem(ParentID, ItemCode.CHILD)
    while (true) {
      if (!ChildID ||  ChildID.trim() == "") break
      if (this.mSGWorld.ProjectTree.GetItemName(ChildID).Contains(objName)) {
        mIDs.push(ChildID)
      }
      ChildID = this.mSGWorld.ProjectTree.GetNextItem(ChildID, ItemCode.NEXT)
    }
    return mIDs
  }

  // 在ParentGroupId节点下查找GroupName目录，如果没有找到则创建该目录。
  FindAndCreateGroup ( ParentGroupId, GroupName, isLook = false) {
      let ChildID = this.mSGWorld.ProjectTree.GetNextItem(ParentGroupId, ItemCode.CHILD)
      if (!ChildID || ChildID.trim() == ""){
          return isLook ? this.mSGWorld.ProjectTree.CreateLockedGroup(GroupName, ParentGroupId) : this.mSGWorld.ProjectTree.CreateGroup(GroupName, ParentGroupId);
      }
      if (this.mSGWorld.ProjectTree.GetItemName(ChildID) == GroupName){
          return ChildID;
      }
      while (true){
          ChildID = this.mSGWorld.ProjectTree.GetNextItem(ChildID, ItemCode.NEXT);
          if (!ChildID ||  ChildID.trim() == ""){ // 如果没找到节点则返回string.Empty；
              return isLook ? this.mSGWorld.ProjectTree.CreateLockedGroup(GroupName, ParentGroupId) : this.mSGWorld.ProjectTree.CreateGroup(GroupName, ParentGroupId);
          }
          if (this.mSGWorld.ProjectTree.GetItemName(ChildID) == GroupName){
              return ChildID;
          }
      }

  }

  // 获取某个目录下的所有节点ID
  GetGroupFeaturesID(ParentGroupId)
  {
      let mRes = [];
      let ChildID = this.mSGWorld.ProjectTree.GetNextItem(ParentGroupId, ItemCode.CHILD);
      if (!ChildID ||  ChildID.trim() == "") return mRes;
      mRes.push(ChildID);

      while (true){
          ChildID = this.mSGWorld.ProjectTree.GetNextItem(ChildID, ItemCode.NEXT);
          if (!ChildID ||  ChildID.trim() == "") return mRes;
          mRes.push(ChildID);
      }
  }

  // <summary>
  // 清空Group，但不删除该Group
  // </summary>
  // <param name="GroupId"></param>
  ClearGroup(GroupId) {
      let ChildID = this.mSGWorld.ProjectTree.GetNextItem(GroupId, ItemCode.CHILD);
      if (!ChildID ||  ChildID.trim()) return;

      let deleteIDs = [];
      deleteIDs.push(ChildID);
      while (true){
          ChildID = this.mSGWorld.ProjectTree.GetNextItem(ChildID, ItemCode.NEXT);
          if (!ChildID ||  ChildID.trim()) break;
          deleteIDs.Add(ChildID);
      }
      let i = 0;
      deleteIDs.foreach (id => {
          i++;
          this.mSGWorld.ProjectTree.DeleteItem(id);
      })
      //platform.@case.WinCoreMgr.WinCoreMgr.pInfo.AddMsg(i.ToString());

  }

  // 得到当前选择节点的节点名称
  GetSelFeatureName() {
      let id = this.mSGWorld.ProjectTree.GetNextItem("", ItemCode.SELECTED);
      if (!id || id == "") return "";
      return this.mSGWorld.ProjectTree.GetItemName(id);
  }

  // 得到当前选择节点的节点对象
  GetSelFeature() {debugger
      let id = this.mSGWorld.ProjectTree.GetNextItem(this.mSGWorld.ProjectTree.RootID, ItemCode.SELECTED);
      if (!id || id == "") return null;
      return this.mSGWorld.ProjectTree.GetObject(id)
  }
}
export default SKCommonTools
