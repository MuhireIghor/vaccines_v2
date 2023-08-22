<script setup>
import Table from "../../components/tables/ChildrenTable.vue";
import {createChild,getChildren} from '../../services/axios'
const children = ref([])
children.value =await getChildren()

const isOpen = ref(false);
const form = ref();
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
const isError = ref(false);
const state = ref({
  birth_location: "",
  code: "",
  father_names: "",
  mother_id: "",
  person_id: "",
});
const handleSubmit = (stateData) => {
  isError.value = false;
  if (
    state.value.birth_location != "" &&
    state.value.code != "" &&
    state.value.father_names != "" &&
    state.value.mother_id != "" &&
    state.value.person_id != ""
  ) {
    const formattedData = {
      ...stateData,
      mother_id: parseInt(stateData.mother_id),
      person_id: parseInt(stateData.person_id),
    };
    createChild(formattedData)
    
  } else {
    isError.value = true;
  }
};
onMounted(() => {
  useHead(() => {
    return {
      title: ` Vaccine | CHILDREN`,
    };
  });
});
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
    <UModal v-model="isOpen" :transition="false">
      <UForm
        :ref="form"
        :state="state"
        @submit.prevent="handleSubmit(state)"
        class="p-4 space-y-2"
      >
        <p class="text-2xl font-bold">Add Child</p>
        <p v-if="isError" class="text-[red]">Fill all required fields*</p>
        <UFormGroup label="Father Name" name="fname" required>
          <UInput color="sky" v-model="state.father_names" />
        </UFormGroup>
        <UFormGroup label="Mother id" name="mid" required>
          <UInput color="sky" v-model="state.mother_id" />
        </UFormGroup>
        <UFormGroup label="Person id" name="persid" required>
          <UInput color="sky" v-model="state.person_id" type="text" />
        </UFormGroup>
        <UFormGroup label="Code" name="code" required>
          <UInput color="sky" v-model="state.code" type="text" />
      </UFormGroup>
        <UFormGroup label="Birth Location" name="bLocation" required>
          <USelectMenu
            color="sky"
            v-model="state.birth_location"
            :options="districts"
            placeholder="Select Birth Location"
          />
        </UFormGroup>

        <div class="w-full flex justify-center">
          <UButton type="submit" color="sky" @click="handleSubmit(state)">
            Submit
          </UButton>
        </div>
      </UForm>
    </UModal>

    <div class="mt-12">
      <Table :children="children" />
    </div>
  </div>
</template>
