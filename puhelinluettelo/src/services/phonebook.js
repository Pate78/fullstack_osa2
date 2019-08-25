import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
//   console.log('getAll -> url: ', baseUrl);
  console.log('response.data: ', request.then(response => response.data));
  
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = id => {
    const deleteUrl = baseUrl+'/'+id
    const request = axios.delete(deleteUrl)
    console.log('Deleting: ', deleteUrl);
    
}

export default { 
  getAll, 
  create, 
  update,
  remove
}