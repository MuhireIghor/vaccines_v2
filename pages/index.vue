<script setup>
import Card from "../components/services/index.vue";
definePageMeta({
  layout: "none",
});
const router = useRouter();
const handleRegister = () => {
  router.push("/auth/signup");
};
const showDropDown = ref(false);
const handleShowDropDown = () =>{
  showDropDown.value = true;
}
const handleHideDropDown = ()=>{
  showDropDown.value = false;
}
</script>
<template>
  <div class="z-20 bg-white shadow p-4 w-full top-[0.5px] sticky flex">
    <div class="basis-1/3 md:basis-1/4">
      <Logo />
    </div>
    <div class="block md:hidden basis-1/3 flex justify-center hover:cursor-pointer" @click="handleShowDropDown">
      <UIcon class="text-sky-600 text-4xl" name="i-heroicons-bars-3" />
    </div>
    <div class="justify-evenly basis-2/4 hidden md:flex">
      <p
        class="font-medium text-lg hover:decoration hover:underline hover:cursor-pointer hover:text-[#0ea5e9]"
      >
        Home
      </p>
      <p
        class="font-medium text-lg hover:decoration hover:underline hover:cursor-pointer hover:text-[#0ea5e9]"
      >
        About us
      </p>
      <p
        class="font-medium text-lg hover:decoration hover:underline hover:cursor-pointer hover:text-[#0ea5e9]"
      >
        Contacts
      </p>
    </div>
    <div class="basis-1/4 flex justify-end">
      <UButton @click="handleRegister()" color="sky">Register</UButton>
    </div>
  </div>
  <div class="w-full md:hidden block divide-y-2 bg-white space-y-2 border-b-2" v-if="showDropDown">
    <div class="w-full flex justify-end" @click="handleHideDropDown">
<UIcon class="text-black-600 text-4xl" name="i-heroicons-stop"  />
    </div>
    <p
        class="font-medium text-lg hover:decoration hover:underline hover:cursor-pointer hover:text-[#0ea5e9]"
      >
        Home
      </p>
      <p
        class="font-medium text-lg hover:decoration hover:underline hover:cursor-pointer hover:text-[#0ea5e9]"
      >
        About us
      </p>
      <p
        class="font-medium text-lg hover:decoration hover:underline hover:cursor-pointer hover:text-[#0ea5e9]"
      >
        Contacts
      </p>
  </div>
  <div class="pt-12 px-4 md:px-8 md:flex md:flex-row">
    <div class="basis-1/2 space-y-4">
      <p class="bg-blue bg-clip-text font-semibold text-xl text-[#0ea5e9]">
        VACCINES
      </p>
      <p class="w-full pr-6 md:pr-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illo
        quae odio doloribus eligendi in molestias vel dolore similique
        assumenda.
      </p>
      <p class="w-full pr-6 md:pr-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illo
        quae odio doloribus eligendi in molestias vel dolore similique
        assumenda,Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Expedita illo quae odio doloribus eligendi in molestias vel dolore
        similique assumenda, Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Expedita illo quae odio doloribus eligendi in molestias vel dolore
        similique assumenda.
      </p>

      <UButton
        color="sky"
        class="py-4 px-4 md:px-16 mx-32 sm:mx-0 sm:translate-y-20 md:translate-y-2"
        >EXPLORE MORE</UButton
      >
    </div>
    <div class="basis-1/2 flex justify-end">
      <img src="/doctor.svg" class="h-[60vh] w-[80%] md:w-full" />
    </div>
  </div>
  <div class="space-y-6">
    <p
      class="text-center font-semibold text-[#0ea5e9] hover:underline hover:decoration-2 hover:cursor-pointer mt-12"
    >
      OUR SERVICES
    </p>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:px-12"
    >
      <Card
        title="title1"
        iconsName="i-heroicons-sun"
        desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <Card
        title="title1"
        iconsName="i-heroicons-star"
        desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <Card
        title="title1"
        iconsName="i-heroicons-swatch"
        desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <Card
        title="title1"
        iconsName="i-heroicons-clipboard"
        desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
    </div>
  </div>
  <div class="space-y-6 mt-12">
    <p
      class="text-center font-semibold text-[#0ea5e9] hover:underline hover:decoration-2 hover:cursor-pointer"
    >
      ABOUT US
    </p>
    <div class="w-full md:flex">
      <div class="basis-1/2 flex justify-center">
        <img src="/doctor.svg" class="h-[60vh] w-[80%] md:w-full" />
      </div>
      <div class="basis-1/2">
        <p class="px-4 py-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus eum quo et repellendus molestias, ad sed accusantium
          beatae laboriosam necessitatibus tempore sequi amet modi natus quia
          soluta doloribus, veniam, deleniti dolorum? Ea id deserunt, alias
          facilis nulla recusandae veniam.
        </p>
        <UButton class="py-4 px-8 md:px-16 mx-32 sm:mx-6" color="sky"
          >Read More</UButton
        >
      </div>
    </div>
  </div>
  <div
    class=" mt-16 px-12 bg-gradient-to-tr from-cyan-400 via-[#0ea5e9] to-slate-100  space-y-4 sm:space-y-0 sm:flex justify-evenly w-11/12 py-4 mx-auto rounded-t-[40px] border border-slate-200"
  >
    <div class="basis-1/3 space-y-6">
      <div>
        <p class="font-semibold">Home</p>
      </div>
      <div class="space-y-2">
        <p>Careers</p>
        <p>Company Profile</p>
        <p>Contact us</p>
        <p>News</p>
        <p>Private Policy</p>
      </div>
    </div>
    <div class="basis-1/3 space-y-6">
      <div class="space-y-3">
        <div>
          <p class="font-semibold">Support</p>
        </div>
        <div class="space-y-2">
          <p>Become a member</p>
          <p>FAQs</p>
          <p>Become a partner</p>
        </div>
      </div>
      <div class="space-y-3">
        <div>
          <p class="font-semibold">Support</p>
        </div>
        <div class="space-y-2">
          <p>Become a member</p>
          <p>FAQs</p>
          <p>Become a partner</p>
        </div>
      </div>
    </div>
    <div class="basis-1/3 space-y-6">
      <div class="space-y-3">
        <div>
          <p class="font-semibold">Contacts</p>
        </div>
        <div class="space-y-2">
          <p class="hover:cursor-pointer">info@gmail.com</p>
          <p class="hover:cursor-pointer">(+220)-0392-9899</p>
        
        </div>
      </div>
      <div class="space-y-3">
        <div>
          <p class="font-semibold">Location</p>
        </div>
        <div class="space-y-2">
          <p>KK 16 ,ST Kicukiro ,Niboye</p>
          <p >Kigali,Rwanda</p>

        </div>
      </div>
    </div>
  </div>
</template>
