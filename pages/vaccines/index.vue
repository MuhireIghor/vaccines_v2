<script setup>
import { useVaccineStore } from '../../stores/myStore'
import Table from '../../components/tables/vaccineTable.vue'
import { createVaccine, getVaccines } from '../../services/axios';

onMounted(() => {
  useHead(()=>{
      return{
          title: ` Vaccine | VACCINES`
      }
  })
})
const isOpen = ref(false);
const form = ref()

//vax store
const store = useVaccineStore()


const state = ref({
  category: '',
  expire_date: '',
  name: '',
  period: '',
  purpose: ''
})
const handleSubmit = (vaxData)=>{
  const payloadData = {...vaxData,expire_date:new Date(vaxData.expire_date).toISOString()}
   createVaccine(payloadData)

}
let vaccines = ref([])
vaccines.value = await getVaccines()
</script>
<template>
    <div>
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold">Vaccines</h1>
        <UButton
          icon="i-heroicons-plus"
          size="xl"
          color="sky"
          @click="isOpen = true"
          >Add Vaccine</UButton
        >
      </div>
      <UModal v-model="isOpen" :transition="false" >
          <UForm
      :ref="form"
      :state="state"
      @submit.prevent="handleSubmit(state)"
      class="p-4 space-y-2"
  
    >
    <p class="text-2xl font-bold">Add Vaccine</p>
      <UFormGroup label="vaccine Name" name="vname" required >
        <UInput color="sky" v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Vaccine Category" name="vcategory" required >
        <UInput color="sky" v-model="state.category" />
      </UFormGroup>
      <UFormGroup label="Purpose" name="purpose" required>
        <UInput color="sky" v-model="state.purpose" type="text" />
      </UFormGroup>
      <UFormGroup label="Expire Date" name="expireDate" required>
        <UInput color="sky" v-model="state.expire_date" type="date" />
      </UFormGroup>
      <UFormGroup label="Period" name="period" required>
        <UInput color="sky" v-model="state.period" type="text" />
      </UFormGroup>
  <div class="w-full flex justify-center">
      <UButton type="submit" color="sky" @click="handleSubmit(state)">
        Submit
      </UButton>
  
  </div>
    </UForm>
      </UModal>
      <div class="mt-12">
<Table :vaccines="vaccines" />
      </div>
    </div>
  </template>