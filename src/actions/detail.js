import {get} from '@/utils/request'
import api from '@/services/api'

export function getName (options){
  return {
    type: 'FETCH_DETAIL_NAME',
    payload: get(api.hotWordsUrl)
  }
}