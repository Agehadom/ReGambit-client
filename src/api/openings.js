import apiUrl from '../apiConfig'
import axios from 'axios'

export const openingIndex = user => {
  return axios({
    url: apiUrl + '/openings',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const openingCreate = (opening, user) => {
  return axios({
    url: apiUrl + '/openings',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { opening: opening }
  })
}

export const openingShow = (id, user) => {
  return axios({
    url: apiUrl + '/opening/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
