import { variants } from '../.nuxt/tailwind.config';

<script setup>
const selected = ref(false)

const links = [ {
  label: 'Dashboard',
  icon: 'i-heroicons-home',
  to: '/dashboard'
}, {
  label: 'Users',
  icon: 'i-heroicons-user-group',
  to: '/users'
}, {
  label: 'Vaccines',
  icon: 'i-heroicons-eye-dropper',
  to: '/vaccines'
}
,{
  label: 'Mothers',
  icon: 'i-heroicons-user-plus',
  to: '/mothers'
},
{
  label: 'Children',
  icon: 'i-heroicons-user',
  to: '/children'
},
{
  label: 'Appointment',
  icon: 'i-heroicons-clipboard',
  to: '/appointments'
}


]

</script>

<template>
    <main class="h-[100vh] flex">
     <aside class="px-2 py-2 w-1/5">
     <div class="flex space-x-4 items-center pb-6">
        <UIcon class="text-2xl pl-10" name="i-heroicons-bars-3-20-solid" />
         <Logo />
     </div>
     <div>
        <h4 class="text-gray-300 pb-4 px-2">Menu</h4>
        <UVerticalNavigation :links="links" />
     </div>
     </aside>
     <div class="w-4/5">
        <header class="py-3 flex justify-end items-center">
            <div class="w-[14rem]">
                <div class="bg-gray-100 rounded-full"><UInput  variant="none"  icon="i-heroicons-magnifying-glass-20-solid" size="md"  :trailing="false" rounded="rounded-full" placeholder="search..."/></div>
            </div>
            <span class="bg-gray-100  h-8 w-8 flex items-center justify-center rounded-full ml-6 mr-2 relative">
                <UIcon name="i-heroicons-bell-alert" class="text-gray-500 text-lg" />
                <span class="block absolute w-[6px] h-[6px] bg-red-500 rounded-full top-2 right-2 border border-white"></span>
            </span>
            <span class="block mx-2">
                <UToggle color="sky"  on-icon="i-heroicons-moon" off-icon="i-heroicons-sun" v-model="selected"  />
            </span>
            <span class="mr-3">
                <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" chip-color="primary" chip-text="" chip-position="top-right" size="sm" />
            </span>
        </header>
        <section class="bg-gray-100 w-full h-full rounded-tl-2xl p-4">
            <slot />
        </section>
     </div>
    </main>
</template>