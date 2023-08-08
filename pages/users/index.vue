<script setup lang="ts">
// import { _margin } from "#tailwind-config/theme"
import Table from '../../components/tables/index.vue'
import { _left } from "#tailwind-config/theme/backgroundPosition"
import { useQueryClient, useQuery} from "@tanstack/vue-query"
import axios from "axios"
import {useCounterStore} from '../../stores/myStore'
import { createUser } from "../../services/axios"
const store = useCounterStore();
 

// Access QueryClient instance
const queryClient = useQueryClient();
//Modal and form handler values
const isOpen = ref(false);
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
  selected: '' as string | undefined,
  id:0
})

const handleCheckboxChange = (value:string) => {
 state.value.selected = value;
}
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

function handleSubmit (state2:any) {

store.loginUser(state2)
console.log('now username is',store.user.username)
createUser(state2.value )
  // Do something with state.value
}


// Query
// const { isLoading, isError, data, error } = useQuery({
//   queryKey: ['users'],
//   queryFn: getUsers,
// })
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold">Users</h1>
      <UButton
        icon="i-heroicons-plus"
        size="xl"
        color="sky"
        @click="isOpen = true"
        >Add User</UButton
      >
    </div>
    <UModal v-model="isOpen" :transition="false" >
        <UForm
    :ref="form"
    :state="state"
    @submit.prevent="handleSubmit(state)"
    class="p-4 space-y-2"

  >
  <p class="text-2xl font-bold">Add user</p>
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
    </UModal>

    <div class="mt-12">
      <Table />
    </div>
  </div>
</template>
<style scoped>

</style>