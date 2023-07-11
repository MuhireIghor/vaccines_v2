
<script setup>
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
     <aside class="px-1 py-2 w-1/5">
     <div class="flex space-x-4 items-center pb-6">
        <UIcon class="text-2xl" name="i-heroicons-bars-3-20-solid" />
         <Logo />
     </div>
     <div>
        <h4 class="text-gray-300 pb-4 px-2">Menu</h4>
        <UVerticalNavigation :links="links" />
     </div>
     </aside>
     <div class="w-4/5">
        <header class="py-3 flex justify-end">
            <div class="w-[14rem]">
            <UInput class="bg-gray-100" icon="i-heroicons-magnifying-glass-20-solid" size="md" color="white" :trailing="false" rounded="rounded-full" placeholder="search..."/>
            </div>
            <span class="bg-gray-100  h-8 w-8 flex items-center justify-center rounded-full mx-4">
                <UIcon name="i-heroicons-bell-alert" class="text-gray-500 text-lg" />
            </span>
        </header>
        <section class="bg-gray-100 w-full h-full">
            <slot />
        </section>
     </div>
    </main>
</template>