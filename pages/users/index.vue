<script>
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'

// Access QueryClient instance
const queryClient = useQueryClient()

// Query
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
})



</script>

<template>
    <div>

        <div class="flex justify-between">
            <h1 class="text-2xl font-bold">Users</h1>
            <UButton icon="i-heroicons-plus" size="xl" color="sky">Add User</UButton>
        </div>

        <div>
            
        </div>
    </div>
</template>