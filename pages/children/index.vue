<script setup>
const isOpen = ref(false);
const form = ref()

const state = ref({
  category: '',
  createdOn: '',
  expireDate: '',
  name: '',
  period: '',
  purpose: '',
  updatedOn: '',
})
const handleSubmit = ()=>{
    console.log('Form Sumbitted')
}
</script>
<template>
    <div>
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold">Children</h1>
        <UButton
          icon="i-heroicons-plus"
          size="xl"
          color="sky"
          @click="isOpen = true"
          >Add Child</UButton
        >
      </div>
      <UModal v-model="isOpen" :transition="false" >
          <UForm
      :ref="form"
      :state="state"
      @submit.prevent="handleSubmit(state)"
      class="p-4 space-y-2"
  
    >
    <p class="text-2xl font-bold">Add Child</p>
      <UFormGroup label="vaccine Name" name="vname" required >
        <UInput color="sky" v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Vaccine Category" name="vcategory" required >
        <UInput color="sky" v-model="state.category" />
      </UFormGroup>
      <UFormGroup label="Purpose" name="purpose" required>
        <UInput color="sky" v-model="state.purpose" type="text" />
      </UFormGroup>
      <UFormGroup label="Created On" name="createdOn" required>
        <UInput color="sky" v-model="state.createdOn" type="date" />
      </UFormGroup>
      <UFormGroup label="updated On" name="updatedOn" required>
        <UInput color="sky" v-model="state.updatedOn" type="date" />
      </UFormGroup>
      <UFormGroup label="Expire Date" name="expireDate" required>
        <UInput color="sky" v-model="state.expireDate" type="date" />
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
  
      <div></div>
    </div>
  </template>