<script setup>
const router = useRoute(    );
const isEditable = ref(false);
const editVaccine= () => {
  isEditable.value = true;
};


// form props

const form = ref()
const state = ref({
  category: '',
  created_on: '',
  expire_date: '',
  name: '',
  period: '',
  purpose: '',
  updated_on: '',
})


//router params
const vaxId = router.params.id;
onMounted(() => {
  useHead(() => {
    return {
      title: `VACCINE | ${vaxId}`,
    };
  });
});
</script>
<template>
  <div class="flex flex-col p-12">
    <h1 class="text-2xl font-bold" v-if="!isEditable">Vaccine Details</h1>
    <template v-if="!isEditable">
      <div :class="`${!isEditable && 'mt-12'}`">
        <div class="space-y-4">
          <p class="font-semibold">Vaccine Name :</p>
          <p class="font-semibold">Category :</p>
          <p class="font-semibold">Created On :</p>
          <p class="font-semibold">Updated On :</p>
          <p class="font-semibold">Expire Date :</p>
          <p class="font-semibold">Purpose :</p>
          <p class="font-semibold">Period :</p>
      
        </div>
      </div>
    </template>
    <template v-else> 
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
    </template>
    <UButton
      class="mx-auto px-12 "
      @click="editVaccine"
      v-if="!isEditable"
      color="sky"
      >Edit</UButton
    >
  </div>
</template>
