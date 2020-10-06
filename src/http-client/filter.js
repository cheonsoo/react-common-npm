import httpClient from './index'
import API from '../resources/constants/apiEndpoints'

export const getPrdClsMList = () => {
  const data = {
    clsLvlNo: 0,
    prdClsCd: '',
    prdClsNm: '',
    upperPrdClsCd: '',
    useYn: 'Y'
  }

  return httpClient
    .post(API.GET_PRD_CLS_M_LIST, data)
    .catch((err) => {
      console.log(err)
      return null
    })
    .then((res) => {
      return res ? res.data : []
    })
}

export const getPrdClsMListByLvl = async () => {
  const prdClsItems = {
    lvl1: [],
    lvl2: [],
    lvl3: [],
    lvl4: []
  }

  try {
    const res = await getPrdClsMList()

    prdClsItems.lvl1 = res.filter((item) => item.clsLvlNo === 1)
    prdClsItems.lvl2 = res.filter((item) => item.clsLvlNo === 2)
    prdClsItems.lvl3 = res.filter((item) => item.clsLvlNo === 3)
    prdClsItems.lvl4 = res.filter((item) => item.clsLvlNo === 4)
  } catch (e) {
    console.log(e)
  }

  return prdClsItems
}
