<script setup>
const columns = [{
  key: 'id',
  label: 'ID',
  sortable:true
}, {
  key: 'date_of_appointment',
  label: 'Date Of Appointment',
  sortable: true
}, {
  key: 'description',
  label: 'Description',
  sortable: true
},
{
  key: 'health_care',
  label: 'Health Care',
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
let appointments = [
  {id:1,
    date_of_appointment: "2023-03-15",
    description: "Routine checkup",
    health_care: "City Hospital",
    person: "John Doe",
    taken_vaccines: "Flu",
  },
  {id:2,
    date_of_appointment: "2023-04-20",
    description: "Vaccination appointment",
    health_care: "Community Clinic",
    person: "Jane Smith",
    taken_vaccines: "COVID-19",
  },
  {id:3,
    date_of_appointment: "2023-05-10",
    description: "Health assessment",
    health_care: "Wellness Center",
    person: "Michael Johnson",
    taken_vaccines: "Tetanus",
  },
  {id:4,
    date_of_appointment: "2023-06-25",
    description: "Follow-up visit",
    health_care: "City Hospital",
    person: "Emily Williams",
    taken_vaccines: "COVID-19, Hepatitis A",
  },
  {id:5,
    date_of_appointment: "2023-07-18",
    description: "Checkup for allergies",
    health_care: "Allergy Clinic",
    person: "Daniel Brown",
    taken_vaccines: "None",
  },
  {id:6,    
    date_of_appointment: "2023-08-05",
    description: "Annual physical",
    health_care: "Community Health Center",
    person: "Olivia Wilson",
    taken_vaccines: "Flu",
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
      children = appointments.filter((appointment)=>appointment.id != row.id)
      console.log(`now children are ${appointments.length}`)
    }
  }]]

//pagination

const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return appointments.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

//methods
const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return appointments
  }

  return appointments.filter((appointment) => {
    return Object.values(appointment).some((value) => {
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


  <UPagination v-model="page" :page-count="pageCount" :total="appointments.length" color="sky" />
</template>
