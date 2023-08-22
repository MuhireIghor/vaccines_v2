<script setup>
import { getIndividualMother,updateMother } from '../../services/axios';

const router = useRoute();
const isEditable = ref(false);
const editUser = () => {
  isEditable.value = true;
};


// form props

const form = ref()
const state = ref()


//router params
const motherId = router.params.id;
const motherDetails = await getIndividualMother(motherId);
state.value = {...motherDetails};
const handleSubmit = async (state)=>{
    try{
        console.log('state to update mother',state)   
        await updateMother(state) 
    }
    catch(err)
{
    console.log(err)
}}


onMounted(() => {
  useHead(() => {
    return {
      title: ` MOTHER | ${motherId}`,
    };
  });
});
</script>
<template>
  <div class="flex flex-col p-12">
    <h1 class="text-2xl font-bold" v-if="!isEditable">Mother Details</h1>
    <template v-if="!isEditable">
      <div :class="`${!isEditable && 'mt-12'} border-2 p-12 rounded-lg` " >
        <div class="space-y-4">

          <p class="font-semibold">Person Id :<span class="font-light">{{  state.person_id}}</span></p>

          <UButton
      class="mx-auto px-12 "
      @click="editUser"
      v-if="!isEditable"
      color="sky"
      >Edit</UButton
    >
        </div>
      </div>
    </template>
    <template v-else> 
        <UForm
    :ref="form"
    :state="state"
    @submit.prevent="handleSubmit(state)"
    class="space-y-2 w-1/2 mx-auto"

  >
  <p class="text-2xl font-bold">Edit Mother</p>
    <UFormGroup label="Person id" name="pid" required >
      <UInput color="sky" v-model="state.person_id" />
    </UFormGroup>



<div class="w-full flex justify-center">
    <UButton type="submit" color="sky" @click="handleSubmit(state)">
      Submit
    </UButton>

</div>
  </UForm>    
    </template>

  </div>
</template>
