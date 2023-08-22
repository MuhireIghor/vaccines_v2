<script setup>
import { getIndividualAppointment,updateAppt} from '../../services/axios';

const router = useRoute();
const isEditable = ref(false);
const editUser = () => {
  isEditable.value = true;
};

const handleSubmit =async (state)=>{
  try{
    
    await updateAppt({id,person_id,password,username})

  }catch(err){
    console.log(err)
  }
}
// form props

const form = ref()
const state = ref()


//router params
const apptId = router.params.id;
const apptDetails = await getIndividualAppointment(apptId);
state.value = {...apptDetails}
console.log(apptDetails)
onMounted(() => {
  useHead(() => {
    return {
      title: ` APPOINTMENT | ${apptId}`,
    };
  });
});
</script>
<template>
  <div class="flex flex-col p-12">
    <h1 class="text-2xl font-bold" v-if="!isEditable">Appointment Details</h1>
    <template v-if="!isEditable">
      <div :class="`${!isEditable && 'mt-12'} border-2 p-12 rounded-lg` " >
        <div class="space-y-4">
          <p class="font-semibold">Vaccine id :<span class="font-light">{{  state.vaccine_id}}</span></p>
          <p class="font-semibold">Person id :<span class="font-light">{{  state.person_id}}</span></p>
          <p class="font-semibold">Health Care id :<span class="font-light">{{ state.health_care_id }}</span></p>
          <p class="font-semibold">Appointment date :<span class="font-light">{{ state.date_of_appointment }}</span></p>
 
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
  <p class="text-2xl font-bold">Edit Appointment</p>
    <UFormGroup label="Vaccine id" name="vxId" required >
      <UInput color="sky" v-model="state.vaccine_id" />
    </UFormGroup>
    <UFormGroup label="Person id" name="pid" reqpiduired >
      <UInput color="sky" v-model="state.person_id" />
    </UFormGroup>
    <UFormGroup label="Healt care id" name="hcareid" required>
      <UInput color="sky" v-model="state.health_care_id" type="text" />
    </UFormGroup>
    <UFormGroup label="Date of appointment" name="dofappt" required>
      <UInput color="sky" v-model="state.date_of_appointment" type="date" />
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
