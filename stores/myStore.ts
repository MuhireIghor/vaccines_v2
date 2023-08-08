import { User } from "interfaces/user"
import { defineStore } from "pinia"
import { json } from "stream/consumers"

export const useCounterStore = defineStore('counter', () => {
    const user:any = ref({
        email: '',
        password: '',
        dob: '',
        first_name: '',
        second_name: '',
        tel: '',
        username: '',
        gender: '',
        currrent_location: '',
        selected: '' as string ,
        person_id:0
          })
    const loginUser = (userData:any)=>{
        user.value.email = userData.email
        user.value.password = userData.password
        user.value.dob = userData.dob
        user.value.first_name = userData.firstName
        user.value.second_name = userData.secondName
        user.value.tel = userData.tel
        user.value.username = userData.username
        user.value.gender = userData.gender
        user.value.currrent_location = userData.currentLocation
        user.value.selected = userData.selected

    }

    const storedUserData = localStorage.getItem('USER')
    if(storedUserData !==null){
   const parsedUserData = JSON.parse(storedUserData)
   if (typeof parsedUserData === 'object' && parsedUserData !== null) {
    user.value = { ...user.value, ...parsedUserData };
  }
    }
    watch(user,(userval)=>localStorage.setItem('USER',JSON.stringify(userval)),{deep:true})

  
  
    return { user,loginUser }
  })