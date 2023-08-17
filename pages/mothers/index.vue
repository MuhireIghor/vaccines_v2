<script setup>
import Table from '../../components/tables/MotherTable.vue'
const isOpen = ref(false)
const isError = ref(false)
const form = ref()
const state = ref({
  created_on: '',
  person: '',
  taken_vaccines: '',
  updated_on: '',

})
onMounted(() => {
  useHead(()=>{
      return{
          title: ` Vaccine | MOTHERS`
      }
  })
})
//methods
function handleSubmit(stateData){
isError.value=false;
  if(state.value.created_on!= '' && state.value.updated_on!= '' && state.value.person!='' && state.value.taken_vaccines !=''){
    console.log(`mother created successfully`);
  }else{
  isError.value = true;
}
}

</script>
<template>
    <div>
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold">Mothers</h1>
        <UButton
          icon="i-heroicons-plus"
          size="xl"
          color="sky"
          @click="isOpen = true"
          >Add Mother</UButton
        >
      </div>
      <UModal v-model="isOpen" :transition="false" >
          <UForm
      :ref="form"
      :state="state"
      @submit.prevent="handleSubmit(state)"
      class="p-4 space-y-2"
  
    >
    <p class="text-2xl font-bold">Add Mother</p>
    <p v-if="isError" class="text-[red]">Fill all required fields*</p>
      <UFormGroup label="Mother Name" name="mname" required >
        <UInput color="sky" v-model="state.person" />
      </UFormGroup>
      <UFormGroup label="Created On" name="mCreatedOn" required >
        <UInput color="sky" v-model="state.created_on" type="date" />
      </UFormGroup>
      <UFormGroup label="Updated On" name="mUpdatedOn" required >
        <UInput color="sky" v-model="state.updated_on" type="date" />
      </UFormGroup>
      <UFormGroup label="Taken Vaccines" name="mtakenVxs" required >
        <UInput color="sky" v-model="state.taken_vaccines" />
      </UFormGroup>

      
      
  <div class="w-full flex justify-center">
      <UButton type="submit" color="sky" @click="handleSubmit(state)">
        Submit
      </UButton>
  
  </div>
    </UForm>
      </UModal>
  
      <div class="mt-12">
      <Table/>
    </div>
    </div>
  </template>