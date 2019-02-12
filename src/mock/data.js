import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
import { prjList } from './data/projects'
const Random = Mock.Random

export const getProjectList = req => {
  return prjList
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}

export const uploadImage = req => {
  return Promise.resolve()
}

export const getOrgData = req => {
  return orgData
}

export const getTreeSelectData = req => {
  return treeData
}
