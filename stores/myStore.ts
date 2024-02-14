import { log } from "console"
import type { User } from "@/interfaces/user"
import { defineStore } from "pinia"
import { json } from "stream/consumers"
import { getUsers } from "../services/axios"

export const usePersonStore = defineStore('person', () => {
  const person: any = ref()
  const user: any = ref()
  function loginPerson(personData: any) {
    person.value = { ...personData }
    console.log(Object.keys(person.value))
  }
  function createUser(userData: any) {
    user.value = { ...userData }
  }

  if (process.client) {
    const storedUserData = localStorage.getItem('PERSON')
    if (storedUserData !== null) {
      const parsedUserData = JSON.parse(storedUserData)
      if (typeof parsedUserData === 'object' && parsedUserData !== null) {
        person.value = { ...person.value, ...parsedUserData };
      }
    }

  }
   watch(person, (personval) => localStorage.setItem('person', JSON.stringify(personval)), { deep: true })



  return { person, loginPerson, createUser, user }
})
export const useVaccineStore = defineStore('vaccine', () => {
  const vaccine = ref()
  const createVaccine = (vaxData: any) => {
    vaccine.value = { ...vaxData }
  }
  // if(process.client){
  //   const storedVaxData = localStorage.getItem('vax')
  //   if(storedVaxData !==null){
  //  const parsedVaxData = JSON.parse(storedVaxData)
  //  if (typeof parsedVaxData === 'object' && parsedVaxData !== null) {
  //   vaccine.value = { ...vaccine.value, ...parsedVaxData };
  // }
  //   }

  // }
  watch(vaccine, (vaxval) => localStorage.setItem('vax', JSON.stringify(vaxval)), { deep: true })



  return { vaccine, createVaccine }
})


export const useMotherStore = defineStore('mother', () => {
  const mother = ref()
  const createMother = (motherData: any) => {
    mother.value = { ...motherData }
  }
  return { mother, createMother }
})
export const useAppointmentStore = defineStore('appointment', () => {
  const appointment = ref()
  const makeAppointment = (appointmentData: any) => {
    appointment.value = { ...appointmentData }
  }
  return { appointment, makeAppointment }
})
export const useChildrenSore = defineStore('children', () => {
  const child = ref()
  const createChild = (childData: any) => {
    child.value = { ...childData }
  }
  return { child, createChild }
})