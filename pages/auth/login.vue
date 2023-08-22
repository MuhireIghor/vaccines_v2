<script setup>
const userInfo = ref({
    email:'',
    password:''
})
definePageMeta({
    layout:'auth'
})
</script>
<template>
    <div class="w-full h-[80vh] flex justify-center items-center">
        <form @submit="onSubmit" class="flex flex-col rounded-lg mdgra p-5 max-w-[500px] md:w-1/2 w-11/12 border-2">
        <h1 class="text-xl font-semibold relative mx-auto">VACCINE
            <v-icon size="14" class=" text-[#0ea5e9] absolute right-2 -top-1" icon="fas fa-paper-plane" />
        </h1>
        <h1 class="text-center text-[#0ea5e9] font-semibold text-lg mt-4 ">Log into VACCINE</h1>
        <div class="flex flex-col w-full mt-5">
            <label class="px-2" for="">Email</label>
            <input type="email"
                class="w-full rounded-lg outline-none focus:border-[#0ea5e9] duration-300 px-4 py-2 border-2 border-[#0ea5e9]/30 border-solid mt-2"
                v-model="userInfo.email" placeholder="Email" />
        </div>
        <div class="flex flex-col w-full mt-5">
            <label class="px-2" for="">Password</label>
            <input v-model="userInfo.password" type="password"
                class="w-full rounded-lg outline-none focus:border-[#0ea5e9] duration-300 px-4 py-2 border-2 border-[#0ea5e9]/30 border-solid mt-2"
                placeholder="Password" />
        </div>
        
        <button 
            class="bg-[#0ea5e9]  px-6 py-3 text-white rounded-lg mt-8"
            >
            Login
        </button>
        <div className="flex w-full items-center justify-between mt-5">
            <span>Don't have an account? </span>
            <RouterLink to="/auth/signup" className="text-[#0ea5e9] underline">Signup</RouterLink>
        </div>
    </form>

    </div>
</template>