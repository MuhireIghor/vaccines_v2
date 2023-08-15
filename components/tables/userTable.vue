<script setup>
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'first_name',
  label: 'First Name',
  sortable: true
}, {
  key: 'second_name',
  label: 'Second Name',
  sortable: true
}, {
  key: 'gender',
  label: 'gender',
  sortable: true
}, {
  key: 'email',
  label: 'Email',
  sortable: true,
  direction: 'desc'
}, {
  key: 'current_location',
  label: 'Current Location',
  sortable: true
},
{
  key: 'actions'
}]

const selectedColumns = ref([...columns])
let people = [
  {
  id: 1,
  first_name: 'Lindsay',
  second_name: 'Walton',
  gender: 'Male',
  current_location: 'Gasabo',
  email: 'lindsay.walton@example.com',
}, 
  {
  id: 2,
  first_name: 'Lindsay',
  second_name: 'Walton',
  gender: 'Male',
  current_location: 'Kimironko',
  email: 'lindsay.walton@example.com',
}, 
  {
  id: 3,
  first_name: 'Lindsay',
  second_name: 'Walton',
  gender: 'Male',
  current_location: 'Nyabihu',
  email: 'lindsay.walton@example.com',
}, 
  {
  id: 4,
  first_name: 'Lindsay',
  second_name: 'Walton',
  gender: 'Male',
  current_location: 'Nyarugenge',
  email: 'lindsay.walton@example.com',
}, 
  {
  id: 5,
  first_name: 'Lindsay',
  second_name: 'Walton',
  gender: 'Male',
  current_location: 'Nyabihu',
  email: 'lindsay.walton@example.com',
}, 
  {
  id: 6,
  first_name: 'Lindsay',
  second_name: 'Walton',
  gender: 'Male',
  current_location: 'Bugesera',
  email: 'lindsay.walton@example.com',
}, 
]
const router = useRouter()
//actions buttons
const items = (row) => [
  [{
    label: 'Update',
   
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => {
      console.log('Edit', row.id)
router.push(`/users/${row.id}`)
  }}],[{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    click: () => {
      people = people.filter((people)=>people.id != row.id)
      console.log(`now people are ${people.length}`)
    }
  }]]

//pagination

const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

//methods
const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return people
  }

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})


</script>

<template>
  <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" class="w-1/4" color="sky" />
  <UInput v-model="q" placeholder="Filter people..." class="mt-12 w-1/4" color="sky" />
  <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"  :columns="selectedColumns" :rows="filteredRows" :sort="{ column: 'firt_name' }" >
    <template  #actions-header>
<p>Actions</p>
    </template>
    <template #actions-data="{row}" >
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>

    </template>
    </UTable>


  <UPagination v-model="page" :page-count="pageCount" :total="people.length" color="sky" />
</template>
