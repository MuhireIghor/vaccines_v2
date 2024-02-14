import Instance from 'axios';
import type { User } from '@/interfaces/user';
import { useAppointmentStore, useChildrenSore, useMotherStore, usePersonStore, useVaccineStore } from '../stores/myStore';
import { createPinia } from 'pinia';
import { parse } from 'path';
const pinia = createPinia()

const store = usePersonStore(pinia);
const vxStore = useVaccineStore(pinia);
const motherStore = useMotherStore(pinia)
const appointmentStore = useAppointmentStore(pinia)
const childStore = useChildrenSore(pinia)
export const axios = Instance.create({
  baseURL: 'https://vaccines-backend.onrender.com/api/v1/'
  // timeout: 1000,/
});

interface StatusResponse {
  status: string;
}


export function getStatus() {
  return axios.get<StatusResponse>('status')
}
export async function createPerson(personPayload: User) {

  try {
    
    const { data } = await axios.post('/persons', personPayload)
    store.loginPerson(data)
    console.log(`person created`, data)
    navigateTo('/')
  }
  catch (err) {
    console.log(`error occured ${err}`)
  }

}
export async function createUser(userPayload: any) {
  try {
    const { data } = await axios.post('/users', userPayload)
    store.createUser(data)
    console.log(`user created `, data)
  }
  catch (err) {
    console.log(`err occured ${err}`)
  }
}
export async function createVaccine(vaccinePayload: any) {
  try {
    const { data } = await axios.post('/vaccines', vaccinePayload);
    vxStore.createVaccine(data)
    console.log(`vaccine created ${data}`)

  }
  catch (err) {
    console.log(`err occured ${err}`)
  }
}
export async function createMother(motherPayload: any) {
  try {
    const { data } = await axios.post('/mothers', motherPayload);
    motherStore.createMother(data)
    console.log(`mother created`, data)

  }
  catch (err) {
    console.log(`err occured ${err}`)
  }
}
export async function createAppointment(appointmentPayload: any) {
  try {
    const { data } = await axios.post('/appointments', appointmentPayload)
    appointmentStore.makeAppointment(data)
    console.log(`appointment created`, data)


  } catch (err) {
    console.log(`err occured ${err}`)
  }
}
export async function createChild(childData: any) {
  try {
    const { data } = await axios.post('/children', childData)
    childStore.createChild(data)
    console.log(`child created`, data)

  }
  catch (err) {
    console.log(`err occured ${err}`)
  }
}
export async function getUsers() {
let {data} = await axios.get('/users')

return data;


}
export async function getVaccines(){
  let {data} = await axios.get('/vaccines')
  console.log(data)
  return data;
}
export async function getMothers(){
  try{
    let {data} = await axios.get("/mothers")
    console.log(data)
    return data;

  }
  catch(err){
    console.log(`${err}`)
  }
}
export async function getAppointments(){
  try{
    let {data} = await axios.get("/appointments")
    console.log(data)
    return data;

  }
  catch(err){
    console.log(`${err}`)
  }
}
export async function getChildren(){
  try{
    let {data} = await axios.get("/children")
    console.log(data)
    return data;

  }
  catch(err){
    console.log(`${err}`)
  }
}
export async function getIndividualUser(id:number){
let {data} = await axios.get(`/users/${id}`)
return data;
}
export async function getIndividualVaccine(id:number){
  try{
    let {data} = await axios.get(`/vaccines/${id}`)
    return data;
  }
  catch(err){
    console.log(err)
  }
}
export async function getIndividualMother(id:number){
  try{
    let {data} = await axios.get(`/mothers/${id}`)
    return data;

  }
  catch(err){
    console.log(err)
  }
}
export async function getIndividualAppointment(id:number){
  try{
    let {data} = await axios.get(`/appointments/${id}`)
    return data;

  }
  catch(err){
    console.log(err)
  }
}
export async function getIndividualChild(id:number){
  try{
    let {data} = await axios.get(`/children/${id}`)
    return data;

  }
  catch(err){
    console.log(err)
  }
}
export async function updateUser(updatedUserPayload:any){
  try{
    console.log(`updating users`,updatedUserPayload)
    const {username,password,person_id} = updatedUserPayload;
    let {data} = await axios.put(`/users/4`,{username:'Muhire',password:'ighor',person_id:12})
    return data;
  }catch(err){
    console.log(`err on updating ${err}`)
  }
}
export async function updateVaccine(updatedVaccinePayload:any){
  try{
   const {data} = await axios.put(`/vaccines/${updatedVaccinePayload.id}`,updatedVaccinePayload);
   console.log(data)


  }
  catch(err){
    console.log(`[vaccine]:Err on updating`,err)
  }
}
export async function updateMother(updatedMotherPayload:any){
  try{
   const {data} = await axios.put(`/mothers/${updatedMotherPayload.id}`,updatedMotherPayload);
   console.log(data)


  }
  catch(err){
    console.log(`[Mother]:Err on updating`,err)
  }
}
export async function updateAppt(updatedAppointmentPayload:any){
  try{
   const {data} = await axios.put(`/appointments/${updatedAppointmentPayload.id}`,updatedAppointmentPayload);
   console.log(data)


  }
  catch(err){
    console.log(`[Appointment]:Err on updating`,err)
  }
}
export async function updateChild(updatedChildPayload:any){
  try{
   const {data} = await axios.put(`/children/${updatedChildPayload.id}`,updatedChildPayload);
   console.log(data)


  }
  catch(err){
    console.log(`[Child]:Err on updating`,err)
  }
}
export async function deleteUser(id:number){
  try{
    console.log('deleting user  ')
   const {data} = await axios.delete(`/children/${id}`);
   console.log(data)


  }
  catch(err){
    console.log(`[User]:Err on deleting`,err)
  }
}



