<script setup>
import { getIndividualVaccine,updateVaccine } from "../../services/axios";

const router = useRoute();
const isEditable = ref(false);
const editVaccine = () => {
  isEditable.value = true;
};
const handleSubmit = (state)=>{
  updateVaccine(state);
}
//router params
const vaxId = router.params.id;

// form props
const form = ref();
const state = ref();
const vaxDetails = await getIndividualVaccine(vaxId);
state.value = { ...vaxDetails };
const {expire_date} = state.value;
let dateObject = new Date(expire_date);


// Format options
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",

};

// Format the date
const formattedDate = dateObject.toLocaleDateString("en-US", options);

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
      <div :class="`${!isEditable && 'mt-12'} border-2 p-12 rounded-lg  `">
        <div class="space-y-4">
          <p class="font-semibold">
            Vaccine Name :<span class="font-light">{{ state.name }}</span>
          </p>
          <p class="font-semibold">
            Category :<span class="font-light">{{ state.category }}</span>
          </p>
          <p class="font-semibold">
            Expire Date :<span class="font-light">{{ state.expire_date.toString() }}</span>
          </p>
          <p class="font-semibold">
            Purpose :<span class="font-light">{{ state.purpose }}</span>
          </p>
          <p class="font-semibold">
            Period :<span class="font-light">{{ state.period }}</span>
          </p>
          <UButton
      class="mx-auto px-12"
      @click="editVaccine"
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
        class="p-4 space-y-2"
      >
        <p class="text-2xl font-bold">Add Vaccine</p>
        <UFormGroup label="vaccine Name" name="vname" required>
          <UInput color="sky" v-model="state.name" />
        </UFormGroup>
        <UFormGroup label="Vaccine Category" name="vcategory" required>
          <UInput color="sky" v-model="state.category" />
        </UFormGroup>
        <UFormGroup label="Purpose" name="purpose" required>
          <UInput color="sky" v-model="state.purpose" type="text" />
        </UFormGroup>
        <UFormGroup label="Expire Date" name="expireDate" required>
          <UInput color="sky" v-model="formattedDate" type="date" />
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

  </div>
</template>
