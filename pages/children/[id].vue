<script setup>
import { getIndividualChild, updateChild } from "../../services/axios";

const router = useRoute();
const isEditable = ref(false);
const editUser = () => {
  isEditable.value = true;
};

const handleSubmit = async (state) => {
  try {
    await updateChild(state)

  } catch (err) {
    console.log(err);
  }
};
// form props

const form = ref();
const state = ref();

//router params
const childId = router.params.id;
const childDetails = await getIndividualChild(childId);
state.value = { ...childDetails };
console.log(childDetails);
onMounted(() => {
  useHead(() => {
    return {
      title: ` CHILD | ${childId}`,
    };
  });
});
</script>
<template>
  <div class="flex flex-col p-12">
    <h1 class="text-2xl font-bold" v-if="!isEditable">Child Details</h1>
    <template v-if="!isEditable">
      <div :class="`${!isEditable && 'mt-12'} border-2 p-12 rounded-lg`">
        <div class="space-y-4">
          <p class="font-semibold">
            Father Names :<span class="font-light">{{
              state.father_names
            }}</span>
          </p>
          <p class="font-semibold">
            Mother id :<span class="font-light">{{ state.mother_id }}</span>
          </p>
          <p class="font-semibold">
            Person Id :<span class="font-light">{{ state.person_id }}</span>
          </p>
          <p class="font-semibold">
            Birth location :<span class="font-light">{{
              state.birth_location
            }}</span>
          </p>
          <p class="font-semibold">
            Code :<span class="font-light">{{ state.code }}</span>
          </p>

          <UButton
            class="mx-auto px-12"
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
        <p class="text-2xl font-bold">Edit Child</p>
        <UFormGroup label="Father Name" name="fname" required>
          <UInput color="sky" v-model="state.father_names" />
        </UFormGroup>
        <UFormGroup label="Mother id" name="mid" required>
          <UInput color="sky" v-model="state.mother_id" />
        </UFormGroup>
        <UFormGroup label="Person id" name="pid" required>
          <UInput color="sky" v-model="state.person_id" />
        </UFormGroup>
        <UFormGroup label="Birth Location" name="blocation" required>
          <UInput color="sky" v-model="state.birth_location" />
        </UFormGroup>
        <UFormGroup label="Code" name="code" required>
          <UInput color="sky" v-model="state.code" />
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
