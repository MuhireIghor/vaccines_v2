<script setup>
import Table from '../../components/tables/MotherTable.vue'
import { createMother,getMothers } from '../../services/axios';
const mothers = ref([]);
mothers.value = await getMothers()
const isOpen = ref(false)
const isError = ref(false)
const form = ref()
const state = ref({
  person_id: '',
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
  const formattedData = {...stateData,person_id:parseInt(stateData.person_id)}
isError.value=false;
  if(state.value.person_id != ''){
   createMother(formattedData)
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
      <UFormGroup label="Mother id" name="mid" required >
        <UInput color="sky" v-model="state.person_id" />
      </UFormGroup>
    
      
      
  <div class="w-full flex justify-center">
      <UButton type="submit" color="sky" @click="handleSubmit(state)">
        Submit
      </UButton>
  
  </div>
    </UForm>
      </UModal>
  
      <div class="mt-12">
      <Table :mothers = "mothers" />
    </div>
    </div>
  </template>