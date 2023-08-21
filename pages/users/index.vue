<script setup lang="ts">
import { _margin } from "#tailwind-config/theme";
import Table from "../../components/tables/userTable.vue";
import { _left } from "#tailwind-config/theme/backgroundPosition";
import { useQueryClient } from "@tanstack/vue-query";
import { usePersonStore } from "../../stores/myStore";
import { createUser, getUsers } from "../../services/axios";
let users:any = ref([]);

users.value = await getUsers()
//store intance
const store = usePersonStore();  
// Access QueryClient instance
const queryClient = useQueryClient();

const router = useRouter()
//formdata state
const isOpen = ref(false);
const form = ref();
const state = ref({
password:'',
person_id:0,
username:''
});

function handleSubmit(state2: any) {  
const payloadData = {...state2,person_id:parseInt(state2.person_id)}
  createUser(payloadData);
}
onMounted(() => {
  useHead(() => {
    return {
      title: ` Vaccine | USERS`,
    };
  });
}); 


// onBeforeMount(() => {
// if(!store.person.id){
// router.push('/auth/signup');
// }
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
    <UModal v-model="isOpen" :transition="false">
      <UForm
        :ref="form"
        :state="state"
        @submit.prevent="handleSubmit(state)"
        class="p-4 space-y-2"
      >
        <p class="text-2xl font-bold">Add user</p>
        <UFormGroup label="Username" name="usrname" required>
          <UInput color="sky" v-model="state.username" />
        </UFormGroup>
        <UFormGroup label="Password" name="pwd" required>
          <UInput color="sky" v-model="state.password" />
        </UFormGroup>
        <UFormGroup label="Person Id" name="pid" required>
          <UInput color="sky" v-model="state.person_id" type="number"/>
        </UFormGroup>
        <div class="w-full flex justify-center">
          <UButton type="submit" color="sky" @click="handleSubmit(state)">
            Submit
          </UButton>
        </div>
      </UForm>
    </UModal>

    <div class="mt-12">
      <Table :people="users"   />
    </div>
  </div>
</template>
<style scoped></style>
