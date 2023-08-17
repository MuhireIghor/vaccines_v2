<script setup>
import Table from '../../components/tables/AppointmentTable.vue'
const isOpen = ref(false);
const form = ref()
const isError = ref(false)
const state = ref({
  date_of_appointment: '',
  description: '',
  health_care: '',
  person: '',
  taken_vaccines: ''
})
const handleSubmit = (stateData)=>{
  isError.value = false
    if(state.value.date_of_appointment != '' && state.value.description != '' && state.value.health_care!='' && state.value.person!=''&& state.value.taken_vaccines!=''){
console.log(`form submitted`,stateData)
    }
    else{
      isError.value = true
    }
}
onMounted(() => {
  useHead(()=>{
      return{
          title: ` Vaccine | APPOINTMENTS`
      }
  })
})
</script>
<template>
    <div>
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold">Appointments</h1>
        <UButton
          icon="i-heroicons-plus"
          size="xl"
          color="sky"
          @click="isOpen = true"
          >Add Appointment</UButton
        >
      </div>
      <UModal v-model="isOpen" :transition="false" >
          <UForm
      :ref="form"
      :state="state"
      @submit.prevent="handleSubmit(state)"
      class="p-4 space-y-2"
  
    >
    <p class="text-2xl font-bold">Add Appointment</p>
    <p v-if="isError" class="text-[red]">Fill all required fields*</p>
      <UFormGroup label="Date Of Appointment" name="pname" required >
        <UInput color="sky" v-model="state.date_of_appointment" />
      </UFormGroup>
      <UFormGroup label="Appointment Description" name="appDesc" required >
        <UInput color="sky" v-model="state.description" />
      </UFormGroup>
      <UFormGroup label="Health Care" name="hcare" required>
        <UInput color="sky" v-model="state.health_care" type="date" />
      </UFormGroup>
      <UFormGroup label="Person" name="person" required>
        <UInput color="sky" v-model="state.person"  />
      </UFormGroup>
      <UFormGroup label="updated On" name="updatedOn" required>
        <UInput color="sky" v-model="state.taken_vaccines"/>
      </UFormGroup>
  
  <div class="w-full flex justify-center">
      <UButton type="submit" color="sky" @click="handleSubmit(state)">
        Submit
      </UButton>
  
  </div>
    </UForm>
      </UModal>
      <div class="mt-12">
<Table />
      </div>
    </div>
  </template>