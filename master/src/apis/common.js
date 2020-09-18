import { get } from '../utils/request'

export const questMenuInfo = (params) => {
  return get('menu', params)
}