import apiRequest, { baseRequest } from '@/extra/axios'

const urlPrefix = 'backend/permissions';
const permission = {
  axiosGetPermissions () {
    return apiRequest.get(urlPrefix).then(response => response.data)
  },
  axiosPatchPermissions (data) {
    return apiRequest.patch(urlPrefix, data).then(response => response.data)
  },
  axiosAddPermission (data) {
    return apiRequest.post(urlPrefix, data ).then(response => response.data)
  }
}

export default permission

