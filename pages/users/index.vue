<script setup lang="ts">
import { _margin } from "#tailwind-config/theme";
import Table from "../../components/tables/userTable.vue";
import { _left } from "#tailwind-config/theme/backgroundPosition";
import { useQueryClient } from "@tanstack/vue-query";
import { useUserStore } from "../../stores/myStore";
import { createUser } from "../../services/axios";
//store intance
const store = useUserStore();

// Access QueryClient instance
const queryClient = useQueryClient();

const router = useRouter()
//formdata state
const isOpen = ref(false);
const form = ref();
const state = ref({
password:'',
person_id:store.user.id,
username:''
});

function handleSubmit(state2: any) {  
  store.loginUser(state2);
  createUser(state2);
}
onMounted(() => {
  useHead(() => {
    return {
      title: ` Vaccine | USERS`,
    };
  });
}); 


onBeforeMount(() => {
if(!store.user.id){
router.push('/auth/signup');
}
})
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
        <UFormGroup label="First Name" name="fname" required>
          <UInput color="sky" v-model="state.username" />
        </UFormGroup>
        <UFormGroup label="Second Name" name="sname" required>
          <UInput color="sky" v-model="state.password" />
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
<style scoped></style>
