<script setup>
import { createPerson } from "../../services/axios";

definePageMeta({
  layout: "auth",
});
//data
const districts = [
  "Gasabo",
  "Kicukiro",
  "Nyarugenge",
  "Bugesera",
  "Gatsibo",
  "Kayonza",
  "Kirehe",
  "Ngoma",
  "Nyagatare",
  "Rwamagana",
  "Ruhango",
  "Gisagara",
  "Huye",
  "Kamonyi",
  "Muhanga",
  "Nyamagabe",
  "Nyanza",
  "Nyaruguru",
  "Ruhango",
  "Burera",
  "Gicumbi",
  "Musanze",
  "Rulindo",
  "Karongi",
  "Ngororero",
  "Nyabihu",
  "Nyamasheke",
  "Rubavu",
  "Rusizi",
  "Rutsiro",
];
const router = useRouter();

//properties
const form = ref();
const state = ref({
  current_location: "",
  dob: "",
  email: "",
  first_name: "",
  gender: "",
  second_name: "",
  tel: "",
});

//methods
function handleSubmit(state2) {
  const formattedPayload = {
    ...state2,
    dob: new Date(state2.dob).toISOString(),
  };
  createPerson(formattedPayload);
  router.push("/");
}
const handleCheckboxChange = (value) => {
  state.value.gender = value;
};
</script>

<template>
  <div class="relative flex-col">
    <div
      class="bg-transparent absolute w-3/4 md:w-1/3 bg-white opacity-70 mx-[12%] md:mx-[35%] z-50 border border-[#0ea5e9] p-4 rounded"
    >
      <UForm
        :ref="form"
        :state="state"
        @submit.prevent="handleSubmit(state)"
        class="p-4 space-y-1 w-[90%] md:w-full"
      >
        <p class="text-2xl font-bold text-center">Register</p>
        <UFormGroup label="First Name" name="fname" required>
          <UInput color="sky" v-model="state.first_name" />
        </UFormGroup>
        <UFormGroup label="Second Name" name="sname" required>
          <UInput color="sky" v-model="state.second_name" />
        </UFormGroup>
        <UFormGroup label="Gender" required v-model="state.gender">
          <div class="flex gap-12">
            <UCheckbox
              color="sky"
              label="Male"
              name="gender"
              :checked="state.gender === 'male'"
              @change="handleCheckboxChange('male')"
            />
            <UCheckbox
              color="sky"
              label="Female"
              name="gender"
              :checked="state.gender === 'female'"
              @change="handleCheckboxChange('female')"
            />
          </div>
        </UFormGroup>
        <UFormGroup label="Date Of Birth" name="dob" required>
          <UInput color="sky" v-model="state.dob" type="date" />
        </UFormGroup>
        <UFormGroup label="Tel" name="tel" required>
          <UInput color="sky" v-model="state.tel" type="tel" />
        </UFormGroup>
        <UFormGroup label="Email" name="email" required>
          <UInput color="sky" v-model="state.email" type="email" />
        </UFormGroup>
        <UFormGroup label="Current Location" name="cloc">
          <USelectMenu
            color="sky"
            v-model="state.current_location"
            :options="districts"
            placeholder="Select Current Location"
          />
        </UFormGroup>
        <div class="w-full flex justify-center">
          <UButton type="submit" color="sky" @click="handleSubmit(state)">
            Submit
          </UButton>
        </div>
      </UForm>
    </div>
    <div class="w-full flex">
      <img src="../../public/doctor.svg" class="w-[100%] h-[85vh]" />
    </div>
  </div>
</template>
