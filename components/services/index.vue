<script setup>
const props = defineProps({ iconsName:'', title:'', desc:''});
</script>

<template>
  <div class="shadow-md rounded-lg w-11/12 sm:w-full mx-auto sm:mx-0 border border-slate-200 h-64 bg-white space-y-6 py-4">
    <div class="mx-auto flex items-center justify-center w-12 h-12 rounded-[25%] bg-slate-200">
      <UIcon :name="iconsName" class="text-3xl" />
    </div>
    <div class="pl-8">
      <p class="text-lf font-semibold text-[#0ea5e9]">{{ title }}</p>
    </div>
    <div class="pl-8">
      <p>{{ desc }}</p>
    </div>
  </div>
</template>
