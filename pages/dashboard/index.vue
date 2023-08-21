<script setup lang="ts">
const pinia = createPinia()
import { useVaccineStore } from '../../stores/myStore';
const vxStore = useVaccineStore(pinia)
import dayjs from 'dayjs'
import { createPinia } from 'pinia';
const route = useRoute()
const now = dayjs(dayjs()).format('dddd, MMMM DD');
const hour = dayjs(dayjs()).format('H')
const dayPart = getPartOfDay(hour);

function getPartOfDay(time: string): string {
  const hour = Number(time.split(":")[0]);
  if (hour >= 0 && hour <= 11) {
    return "Morning";
  } else if (hour >= 12 && hour <= 16) {
    return "Afternoon";
  } else if (hour >= 17 && hour <= 20) {
    return "Evening";
  } else {
    return "Night";
  }
}
useHead(()=>{
    return{
        title: `VACCINE | DASHBOARD`
    }
})
// definePageMeta({
//   middleware:'auth'
// })
</script>

<template>
  <div>
    <h5 class="text-gray-500 text-sm">{{ now }}</h5>
    <h2 class="text-gray-900 dark:text-gray-100 pt-2 text-xl">Good {{ dayPart }}! Joe Wellington</h2>
    <div class="pt-10">
      <div class="flex justify-between">
        <div class="bg-white dark:bg-gray-950 w-fit px-12 py-4 rounded-md shadow-md">
          <div class="w-16 h-16 bg-emerald-100 flex items-center justify-center rounded-full">
            <UIcon class="text-emerald-600 text-4xl " name="i-heroicons-paint-brush"/>
          </div>
          <div class="pt-3 font-semibold text-lg">
          +240 Vaccines
          </div>
        </div>

        <div class="bg-white dark:bg-gray-950 w-fit px-12 py-4 rounded-md shadow-md">
          <div class="w-16 h-16 bg-amber-100 flex items-center justify-center rounded-full">
            <UIcon class="text-amber-600 text-4xl " name="i-heroicons-user"/>
          </div>
          <div class="pt-3 font-semibold text-lg">
          +311 New Users
          </div>
        </div>

        <div class="bg-white dark:bg-gray-950 w-fit px-12 py-4 rounded-md shadow-md">
          <div class="w-16 h-16 bg-sky-100 flex items-center justify-center rounded-full ">
            <UIcon class="text-sky-600 text-4xl " name="i-heroicons-clipboard"/>
          </div>
          <div class="pt-3 font-semibold text-lg">
          +142  Appointments
          </div>
        </div>

        <div class="bg-white dark:bg-gray-950 w-fit px-12 py-4 rounded-md shadow-md">
          <div class="w-16 h-16 bg-pink-100 flex items-center justify-center rounded-full">
            <UIcon class="text-pink-600 text-4xl " name="i-heroicons-chat-bubble-left-right"/>
          </div>
          <div class="pt-3 font-semibold text-lg">
          +142 New Records
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

