import apiRequest, { baseRequest } from '@/extra/axios'

const urlPrefix = 'backend/roles';

const role = {
  axiosGetRoles () {
    return apiRequest.get(urlPrefix).then(response => response.data);
  },
  axiosGetRole (roleId) {
    const url = urlPrefix + '/' + roleId;
    return apiRequest.get(url).then(response => response.data)
  },
  axiosAddRole (data) {
    return apiRequest.post(urlPrefix, data).then(response => response.data)
  },
  axiosPutRole (roleId, data) {
    const url = urlPrefix + '/' + roleId;
    return apiRequest.put(url, data).then(response => response.data)
  }
}

export default role
