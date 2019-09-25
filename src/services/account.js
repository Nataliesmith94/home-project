import axios from 'axios'

export default {
  findAccountByEmail (email) {
    return axios.get('http://localhost:9088/api/account/findEmail', {
      params: {
        email: email
      }
    })
  },
  getFirstName (email) {
    return axios.get('http://localhost:9088/api/account/getFirstName', {
      params: {
        email: email
      }
    })
  },
  postAccount( data ) {
    return axios.post('http://localhost:9088/api/account/create', data)
  }
}
