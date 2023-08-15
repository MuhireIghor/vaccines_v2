import { log } from "console"
import { User } from "interfaces/user"
import { defineStore } from "pinia"
import { json } from "stream/consumers"

export const useUserStore = defineStore('user', () => {
    const user:any = ref({})
    const loginUser = (userData:any)=>{ 
        user.value = {...userData}
        console.log(user.value)
  
    }
if(process.client){
  const storedUserData = localStorage.getItem('USER')
  if(storedUserData !==null){
 const parsedUserData = JSON.parse(storedUserData)
 if (typeof parsedUserData === 'object' && parsedUserData !== null) {
  user.value = { ...user.value, ...parsedUserData };
}
  }

}
    watch(user,(userval)=>localStorage.setItem('USER',JSON.stringify(userval)),{deep:true})

  
  
    return { user,loginUser }
  })
  export const useVaccineStore = defineStore('vaccine',()=> {
    const vaccine = ref({
      category: '',
      created_on: '',
      expire_date: '',
      name: '',
      period: '',
      purpose: '',
      updated_on: '',
    })
    const createVaccine = (vaxData:any)=>{
      vaccine.value.category = vaxData.category
      vaccine.value.created_on = vaxData.created_on
      vaccine.value.expire_date = vaxData.expire_date
      vaccine.value.name = vaxData.name
      vaccine.value.period = vaxData.period
      vaccine.value.purpose = vaxData.purpose
      vaccine.value.updated_on = vaxData.updated_on
    }
    if(process.client){
      const storedVaxData = localStorage.getItem('vax')
      if(storedVaxData !==null){
     const parsedVaxData = JSON.parse(storedVaxData)
     if (typeof parsedVaxData === 'object' && parsedVaxData !== null) {
      vaccine.value = { ...vaccine.value, ...parsedVaxData };
    }
      }
    
    }
        watch(vaccine,(vaxval)=>localStorage.setItem('vax',JSON.stringify(vaxval)),{deep:true})
    
      
      
        return { vaccine,createVaccine }
  })
  