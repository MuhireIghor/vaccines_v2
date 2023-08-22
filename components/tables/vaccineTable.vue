<script setup>
const { vaccines } = defineProps(["vaccines"]);
const columns = [
  {
    key: "id",
    label: "Id",
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
  },
  {
    key: "expire_date",
    label: "Expire Date",
    sortable: true,
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "period",
    label: "Period",
    sortable: true,
  },
  {
    key: "purpose",
    label: "Purpose",
    sortable: true,
  },
  {
    key: "actions",
  },
];

const selectedColumns = ref([...columns]);

const router = useRouter();

//actions buttons
const items = (row) => [
  [
    {
      label: "Update",

      icon: "i-heroicons-pencil-square-20-solid",
      click: () => {
        console.log("Edit", row.id);
        router.push(`/vaccines/${row.id}`);
      },
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => {
        vaccines = vaccines.filter((vax) => vax.id != row.id);
        console.log(`now vaccines are ${vaccines.length}`);
      },
    },
  ],
];

const validVaccines = computed(() => vaccines || []);
watch(
  () => vaccines,
  () => {
    // Update your local data properties here if needed
  }
);

//pagination

const page = ref(1);
const pageCount = 5;
const q = ref("");

//methods
const filteredAndPaginatedRows = computed(() => {
  const filteredVaccines = validVaccines.value.filter((vaccine) => {
    return Object.values(vaccine).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });

  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return filteredVaccines.slice(start, end);
});
</script>

<template>
  <USelectMenu
    v-model="selectedColumns"
    :options="columns"
    multiple
    placeholder="Columns"
    class="w-1/4"
    color="sky"
  />
  <UInput
    v-model="q"
    placeholder="Filter people..."
    class="mt-12 w-1/4"
    color="sky"
  />
  <UTable
    :empty-state="{
      icon: 'i-heroicons-circle-stack-20-solid',
      label: 'No User Available.',
    }"
    :columns="selectedColumns"
    :rows="filteredAndPaginatedRows"
  >
    <template #actions-header>
      <p>Actions</p>
    </template>
    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-ellipsis-horizontal-20-solid"
        />
      </UDropdown>
    </template>
  </UTable>
  <UPagination
    v-model="page"
    :page-count="pageCount"
    :total="validVaccines.length"
    color="sky"
  />
</template>
