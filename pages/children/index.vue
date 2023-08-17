<script setup>
import Table from '../../components/tables/ChildrenTable.vue'
const isOpen = ref(false);
const form = ref()
const districts = [
  'Gasabo',
  'Kicukiro',
  'Nyarugenge',
  'Bugesera',
  'Gatsibo',
  'Kayonza',
  'Kirehe',
  'Ngoma',
  'Nyagatare',
  'Rwamagana',
  'Ruhango',
  'Gisagara',
  'Huye',
  'Kamonyi',
  'Muhanga',
  'Nyamagabe',
  'Nyanza',
  'Nyaruguru',
  'Ruhango',
  'Burera',
  'Gicumbi',
  'Musanze',
  'Rulindo',
  'Karongi',
  'Ngororero',
  'Nyabihu',
  'Nyamasheke',
  'Rubavu',
  'Rusizi',
  'Rutsiro'
]
const isError = ref(false)
const state = ref({
birth_location:'',
code:'',
father_names:'',
mother:'',
person:'',
taken_vaccines:'',
})
const handleSubmit = (stateData)=>{
  isError.value = false
if(state.value.birth_location == '' && state.value.code !='' && state.value.father_names != '' && state.value.mother !='' && state.value.person != '' && state.value.taken_vaccines != ''){
  console.log(`form submitted`,stateData)
}
else{
isError.value = true
}
}
onMounted(() => {
  useHead(()=>{
      return{
          title: ` Vaccine | CHILDREN`
      }
  })
})
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
    <p v-if="isError" class="text-[red]">Fill all required fields*</p>
      <UFormGroup label="Father Name" name="fname" required >
        <UInput color="sky" v-model="state.father_names" />
      </UFormGroup>
      <UFormGroup label="Mother Name" name="mname" required >
        <UInput color="sky" v-model="state.mother" />
      </UFormGroup>
      <UFormGroup label="Name" name="cname" required>
        <UInput color="sky" v-model="state.person" type="text" />
      </UFormGroup>
      <UFormGroup label="Code" name="code" required>
        <UInput color="sky" v-model="state.code" type="text" />
      </UFormGroup>
      <UFormGroup label="Birth Location" name="bLocation" required>
        <USelectMenu color="sky" v-model="state.birth_location" :options="districts"  placeholder="Select Birth Location" />
      </UFormGroup>
      <UFormGroup label="Taken Vaccines" name="tvxs" required="">
<UInput color="sky" v-model="state.taken_vaccines" type="text" />
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