<script setup>
const {children} = defineProps(['children'])
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'father_names',
  label: 'Father Name',
  sortable: true
}, {
  key: 'mother_id',    
  label: 'Mother Id',
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
router.push(`/children/${row.id}`)
  }}],[{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    click: () => {
      children = children.filter((child)=>child.id != row.id)
      console.log(`now children are ${children.length}`)
    }
  }]]

//pagination

const q = ref('')
const page = ref(1)
const pageCount = 5

const validChildren = computed(() => children || []);
watch(
  () => children,
  () => {
    // Update your local data properties here if needed
  }
);


//methods
const filteredAndPaginatedRows = computed(() => {
  const filteredChildren = validChildren.value.filter((child) => {
    return Object.values(child).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });

  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return filteredChildren.slice(start, end);
});


</script>

<template>
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


  <UPagination v-model="page" :page-count="pageCount" :total="validChildren.length" color="sky" />
</template>
