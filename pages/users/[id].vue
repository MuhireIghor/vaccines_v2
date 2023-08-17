<script setup>
const router = useRoute();
const isEditable = ref(false);
const editUser = () => {
  isEditable.value = true;
};


// form props

const form = ref()
const state = ref({
  email: '',
  password: '',
  dob: '',
  firstName: '',
  secondName: '',
  tel: '',
  username: '',
  gender: '',
  currrentLocation: '',
  selected: '',
  id:0
})


//router params
const userId = router.params.id;
onMounted(() => {
  useHead(() => {
    return {
      title: ` USER | ${userId}`,
    };
  });
});
</script>
<template>
  <div class="flex flex-col p-12">
    <h1 class="text-2xl font-bold" v-if="!isEditable">User Details</h1>
    <template v-if="!isEditable">
      <div :class="`${!isEditable && 'mt-12'}`">
        <div class="space-y-4">
          <p class="font-semibold">First Name :</p>
          <p class="font-semibold">Second Name :</p>
          <p class="font-semibold">Username :</p>
          <p class="font-semibold">Email :</p>
          <p class="font-semibold">Current Location :</p>
          <p class="font-semibold">Gender :</p>
      
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
  <p class="text-2xl font-bold">Edit User</p>
    <UFormGroup label="First Name" name="fname" required >
      <UInput color="sky" v-model="state.firstName" />
    </UFormGroup>
    <UFormGroup label="Second Name" name="sname" required >
      <UInput color="sky" v-model="state.secondName" />
    </UFormGroup>
    <UFormGroup label="Username" name="usrname" required>
      <UInput color="sky" v-model="state.username" type="text" />
    </UFormGroup>
    <UFormGroup label="Gender" required v-model="state.selected">
        <div class="flex gap-12">
            <UCheckbox color="sky" label="Male" name="gender"  :checked="state.selected === 'male'"
        @change="handleCheckboxChange('male')"/>
            <UCheckbox color="sky" label="Female" name="gender"  :checked="state.selected === 'female'"
        @change="handleCheckboxChange('female')"/>
        </div>
    </UFormGroup>
    <UFormGroup label="Date Of Birth" name="dob" required>
      <UInput color="sky" v-model="state.dob" type="date" />
    </UFormGroup>
    <UFormGroup label="Tel" name="tel" required>
      <UInput color="sky" v-model="state.tel" type="tel" />
    </UFormGroup>
    <UFormGroup label="Email" name="email" required >
      <UInput color="sky" v-model="state.email" type="email" />
    </UFormGroup>
    <UFormGroup label="Current Location" name="cloc" >
      <USelectMenu color="sky" v-model="state.currrentLocation" :options="districts"  placeholder="Select Current Location" />
    </UFormGroup>
    <UFormGroup label="Password" name="password" required>
      <UInput v-model="state.password" type="password" color="sky" />
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
      @click="editUser"
      v-if="!isEditable"
      color="sky"
      >Edit</UButton
    >
  </div>
</template>
