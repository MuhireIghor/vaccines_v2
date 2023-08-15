<script setup>
const columns = [{
  key: 'id',
  label: 'ID',
  sortable:true,
  direction:'asc'
},  {
  key: 'person',
  label: 'Person',
  sortable: true
}, {
  key: 'updated_on',
  label: 'Updated On',
  sortable: true
}, {
  key: 'taken_vaccines',
  label: 'Taken Vaccines',
  sortable: true
}, {
  key: 'current_location',
  label: 'Current Location',
  sortable: true
},
{
  key: 'created_on',
  label: 'Created On',
  sortable: true
},
{
  key: 'actions'
}]

const selectedColumns = ref([...columns])
let mothers = [
  {
    id: 1,
    person: "John Doe",
    updated_on: "2023-08-13",
    created_on: "2023-08-10",
    taken_vaccines: "COVID-19, Flu",
    current_location: "City A",
  },
  {
    id: 2,
    person: "Jane Smith",
    updated_on: "2023-08-12",
    created_on: "2023-08-05",
    taken_vaccines: "COVID-19",
    current_location: "City B",
  },
  {
    id: 3,
    person: "Michael Johnson",
    updated_on: "2023-08-11",
    created_on: "2023-08-02",
    taken_vaccines: "COVID-19, Tetanus",
    current_location: "City C",
  },
  {
    id: 4,
    person: "Emily Williams",
    updated_on: "2023-08-10",
    created_on: "2023-07-29",
    taken_vaccines: "Flu",
    current_location: "City A",
  },
  {
    id: 5,
    person: "Daniel Brown",
    updated_on: "2023-08-09",
    created_on: "2023-07-25",
    taken_vaccines: "COVID-19, Hepatitis A",
    current_location: "City B",
  },
  {
    id: 6,
    person: "Olivia Wilson",
    updated_on: "2023-08-08",
    created_on: "2023-07-20",
    taken_vaccines: "COVID-19",
    current_location: "City C",
  },
];
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
      mothers = mothers.filter((mother)=>mother.id != row.id)
      console.log(`now people are ${mothers.length}`)
    }
  }]]

//pagination

const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return mothers.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

//methods
const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return mothers
  }

  return mothers.filter((mother) => {
    return Object.values(mother).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})


</script>

<template>
  <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" class="w-1/4" color="sky" />
  <UInput v-model="q" placeholder="Filter mother..." class="mt-12 w-1/4" color="sky" />
  <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"  :columns="selectedColumns" :rows="filteredRows" :sort="{ column: 'person' }" >
    <template  #actions-header>
<p>Actions</p>
    </template>
    <template #actions-data="{row}" >
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>

    </template>
    </UTable>


  <UPagination v-model="page" :page-count="pageCount" :total="mothers.length" color="sky" />
</template>
