import Instance from 'axios';
import { User } from 'interfaces/user';
import { useUserStore } from '../stores/myStore';
import { createPinia } from 'pinia';
const pinia = createPinia()

const store = useUserStore(pinia);
export const axios = Instance.create({
    baseURL: 'https://vaccines-backend.onrender.com/api/v1/'
    // timeout: 1000,/
  });

interface StatusResponse {
status: string;
}


export function getStatus(){
    return axios.get<StatusResponse>('status')
}
export async function createUser (userPayload:User){
  try{
const {data} = await axios.post('/persons',userPayload)
store.loginUser(data)
console.log(`user created`,data)
  }
  catch(err){
console.log(`error occured ${err}`)
  }
}