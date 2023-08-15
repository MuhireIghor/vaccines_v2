<script setup>
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'father_names',
  label: 'Father Name',
  sortable: true
}, {
  key: 'mother',    
  label: 'Mother Name',
  sortable: true
},
{
  key: 'birth_location',
  label: 'Birth Location',
  sortable: true
}, 
 {
  key: 'code',
  label: 'Code',
  sortable: true
},
{
  key: 'person',
  label: 'Person',
  sortable: true
},
{
  key: 'taken_vaccines',
  label: 'Taken Vaccines',
  sortable: true
},
{
  key: 'actions'
}]

const selectedColumns = ref([...columns])
let children = [
  {
    id: 1,
    father_names: "John Doe Sr.",
    mother: "Jane Doe",
    birth_location: "City A",
    code: "ABC123",
    person: "John Doe",
    taken_vaccines: "COVID-19, Flu",
  },
  {
    id: 2,
    father_names: "Michael Smith Sr.",
    mother: "Emily Smith",
    birth_location: "City B",
    code: "XYZ456",
    person: "Michael Smith",
    taken_vaccines: "COVID-19",
  },
  {
    id: 3,
    father_names: "David Johnson Sr.",
    mother: "Sarah Johnson",
    birth_location: "City C",
    code: "PQR789",
    person: "David Johnson",
    taken_vaccines: "COVID-19, Tetanus",
  },
  {
    id: 4,
    father_names: "Robert Williams Sr.",
    mother: "Jennifer Williams",
    birth_location: "City A",
    code: "LMN012",
    person: "Robert Williams",
    taken_vaccines: "Flu",
  },
  {
    id: 5,
    father_names: "Daniel Brown Sr.",
    mother: "Maria Brown",
    birth_location: "City B",
    code: "DEF345",
    person: "Daniel Brown",
    taken_vaccines: "COVID-19, Hepatitis A",
  },
  {
    id: 6,
    father_names: "William Wilson Sr.",
    mother: "Olivia Wilson",
    birth_location: "City C",
    code: "GHI678",
    person: "William Wilson",
    taken_vaccines: "COVID-19",
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
      children = children.filter((child)=>child.id != row.id)
      console.log(`now children are ${children.length}`)
    }
  }]]

//pagination

const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return children.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

//methods
const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return children
  }

  return children.filter((child) => {
    return Object.values(child).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})


</script>

<template>
  <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" class="w-1/4" color="sky" />
  <UInput v-model="q" placeholder="Filter children..." class="mt-12 w-1/4" color="sky" />
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


  <UPagination v-model="page" :page-count="pageCount" :total="children.length" color="sky" />
</template>
