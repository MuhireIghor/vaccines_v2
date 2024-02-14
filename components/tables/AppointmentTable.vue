<script setup>
const {appointments} = defineProps(['appointments'])
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
  key: 'actions'
}]

const selectedColumns = ref([...columns])

const router = useRouter()
//actions buttons
const items = (row) => [
  [{
    label: 'Update',
   
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => {
      console.log('Edit', row.id)
router.push(`/appointments/${row.id}`)
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
const q = ref('')



//methods

const validAppointments = computed(() => appointments || []);
watch(
  () => appointments,
  () => {
    // Update your local data properties here if needed
  }
);

//methods

const filteredAndPaginatedRows = computed(() => {
  const filteredAppointments = validAppointments.value.filter((appt) => {
    return Object.values(appt).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });

  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return filteredAppointments.slice(start, end);
});

</script>

<template>
  <div>

  <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" class="w-1/4" color="sky" />
  <UInput v-model="q" placeholder="Filter children..." class="mt-12 w-1/4" color="sky" />
  <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"  :columns="selectedColumns" :rows="filteredAndPaginatedRows" :sort="{ column: 'person' }" >
    <template  #actions-header>
<p>Actions</p>
    </template>
    <template #actions-data="{row}" >
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>

    </template>
    </UTable>


  <UPagination v-model="page" :page-count="pageCount" :total="validAppointments.length" color="sky" />
  </div>
</template>
