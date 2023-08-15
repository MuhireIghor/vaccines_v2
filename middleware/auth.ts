import { useUserStore } from "../stores/myStore";

export default function (){
    const store = useUserStore();
    if(!store.user.id){
return navigateTo('/auth/signup')
    }
}