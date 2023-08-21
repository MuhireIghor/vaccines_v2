import { usePersonStore } from "../stores/myStore";

export default function (){
    const store = usePersonStore();
    if(!store.person.id){
return navigateTo('/auth/signup')
    }
}