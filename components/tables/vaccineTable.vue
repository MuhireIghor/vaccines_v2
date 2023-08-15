<script setup>
const columns = [{
  key: 'id',
  label: 'Id'
},
 {
  key: 'category',
  label: 'Category',
  sortable: true
}, {
  key: 'created_on',
  label: 'Created On',
  sortable: true
}, {
  key: 'expire_date',
  label: 'Expire Date',
  sortable: true
}, {
  key: 'name',
  label: 'Name',
  sortable: true,
 
}, {
  key: 'period',
  label: 'Period',
  sortable: true
},
 {
  key: 'purpose',
  label: 'Purpose',
  sortable: true
},{
  key: 'updated_on',
  label: 'Updated On',
  sortable: true
},
{
  key: 'actions'
}
];

const selectedColumns = ref([...columns])
let vaccines = [
{id:1,
  category: 'Vx 1',
  created_on: '12-01-2022',
  expire_date: '12-03-2025',
  name: 'vx 01 ',
  period: '2',
  purpose: 'immunisation',
  updated_on: '12-09-2023'
},
{id:2,
  category: 'Vx 1',
  created_on: '12-01-2022',
  expire_date: '12-03-2025',
  name: 'vx 01 ',
  period: '2',
  purpose: 'immunisation',
  updated_on: '12-09-2023'
},
{id: 3,
  category: 'Vx 1',
  created_on: '12-01-2022',
  expire_date: '12-03-2025',
  name: 'vx 01 ',
  period: '2',
  purpose: 'immunisation',
  updated_on: '12-09-2023'
},
{id:4,
  category: 'Vx 1',
  created_on: '12-01-2022',
  expire_date: '12-03-2025',
  name: 'vx 01 ',
  period: '2',
  purpose: 'immunisation',
  updated_on: '12-09-2023'
},
{id:5,
  category: 'Vx 1',
  created_on: '12-01-2022',
  expire_date: '12-03-2025',
  name: 'vx 01 ',
  period: '2',
  purpose: 'immunisation',
  updated_on: '12-09-2023'
},
{id:6,
  category: 'Vx 1',
  created_on: '12-01-2022',
  expire_date: '12-03-2025',
  name: 'vx 01 ',
  period: '2',
  purpose: 'immunisation',
  updated_on: '12-09-2023'
}
]
const router = useRouter()

//actions buttons
const items = (row) => [
  [{
    label: 'Update',
   
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => {
      console.log('Edit', row.id)
router.push(`/vaccines/${row.id}`)
  }}],[{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    click: () => {
      vaccines = vaccines.filter((vax)=>vax.id != row.id)
      console.log(`now vaccines are ${vaccines.length}`)
    }
  }]]

//pagination

const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return vaccines.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

//methods
const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return vaccines
  }

  return vaccines.filter((vaccine) => {
    return Object.values(vaccine).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})


</script>

<template>
  <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" class="w-1/4" color="sky" />
  <UInput v-model="q" placeholder="Filter people..." class="mt-12 w-1/4" color="sky" />
  <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No User Available.' }"  :columns="selectedColumns" :rows="filteredRows" >
    <template  #actions-header>
<p>Actions</p>
    </template>
    <template #actions-data="{row}" >
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>

    </template>
    </UTable>
  <UPagination v-model="page" :page-count="pageCount" :total="vaccines.length" color="sky" />
</template>

