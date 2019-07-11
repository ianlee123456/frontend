import apiRequest, { baseRequest } from '@/extra/axios'

const admin = {
  urlPrefix: 'backend',
  axiosGetAdmins () {
    const url = this.urlPrefix + '/admins';
    return apiRequest.get(url).then(response => response.data);
  },
  testBase () {
    console.log('baseRequest.defaults.baseURL', baseRequest.defaults.baseURL)
    console.log('apiRequest.defaults.baseURL', apiRequest.defaults.baseURL)
  }
}

export default admin
