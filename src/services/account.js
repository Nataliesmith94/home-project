import axios from 'axios'

export default {
  getData () {
    return axios.get('http://localhost:9088/api/home/')
  },
  getPersonalisedData (name) {
    return axios.get('http://localhost:9088/api/greeting/' + name)
  }
}
