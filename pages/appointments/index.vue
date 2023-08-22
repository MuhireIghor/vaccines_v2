<script setup>
import Table from "../../components/tables/AppointmentTable.vue";
import {createAppointment, getAppointments} from '../../services/axios'
const isOpen = ref(false);
let appointments = ref([])
appointments.value = await getAppointments();
const form = ref();
const isError = ref(false);
const state = ref({
  person_id: "",
  vaccine_id: "",
  healthcare_id: "",
  appointment_date: "",
});
const handleSubmit = (stateData) => {
  isError.value = false;
  if (
  stateData.person_id != '' && stateData.vaccine_id!= '' && stateData.healthcare_id!= '' && stateData.appointment_date!= ''
  ) {
    const formattedData = {appointment_date:new Date(stateData.appointment_date).toISOString(),person_id:parseInt(stateData.person_id),vaccine_id:parseInt(stateData.vaccine_id),healthcare_id:parseInt(stateData.healthcare_id)}
    createAppointment(formattedData)

  } else {
    isError.value = true;
  }
};
onMounted(() => {
  useHead(() => {
    return {
      title: ` Vaccine | APPOINTMENTS`,
    };
  });
});
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
    <UModal v-model="isOpen" :transition="false">
      <UForm
        :ref="form"
        :state="state"
        @submit.prevent="handleSubmit(state)"
        class="p-4 space-y-2"
      >
        <p class="text-2xl font-bold">Add Appointment</p>
        <p v-if="isError" class="text-[red]">Fill all required fields*</p>
        <UFormGroup label="Date Of Appointment" name="pname" required>
          <UInput color="sky" v-model="state.appointment_date" type="date" />
        </UFormGroup>
  
        <UFormGroup label="Health Care" name="hcare" required>
          <UInput color="sky" v-model="state.healthcare_id" type="number" />
        </UFormGroup>
        <UFormGroup label="Vaccine id" name="vid" required>
          <UInput color="sky" v-model="state.vaccine_id" />
        </UFormGroup>
        <UFormGroup label="Person" name="person" required>
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
      <Table :appointments="appointments" />
    </div>
  </div>
</template>
