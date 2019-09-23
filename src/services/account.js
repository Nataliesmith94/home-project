import axios from 'axios'

export default {
  getData (email) {
    return axios.get('http://localhost:9088/api/account/findEmail', {
      params: {
        email: email
      }
    })
  }
  ,
  getFirstName (email) {
    return axios.get('http://localhost:9088/api/account/getFirstName', {
      params: {
        email: email
      }
    })
  }
}
