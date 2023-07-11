import Instance from 'axios';

export const axios = Instance.create({
    baseURL: 'https://vaccines-backend.onrender.com/api/v1/',
    timeout: 1000,
  });

interface StatusResponse {
status: string;
}


export function getStatus(){
    return axios.get<StatusResponse>('status')
}