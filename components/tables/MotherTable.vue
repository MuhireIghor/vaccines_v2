<script setup>
const { mothers } = defineProps(["mothers"]);
const columns = [
  {
    key: "id",
    label: "ID",
    sortable: true,
    direction: "asc",
  },
  {
    key: "updated_on",
    label: "Updated On",
    sortable: true,
  },
  {
    key: "created_on",
    label: "Created On",
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
        router.push(`/mothers/${row.id}`);
      },
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => {
        mothers = mothers.filter((mother) => mother.id != row.id);
        console.log(`now people are ${mothers.length}`);
      },
    },
  ],
];

//pagination

const page = ref(1);
const pageCount = 5;
const q = ref("");

const validMothers = computed(() => mothers || []);
watch(
  () => mothers,
  () => {
    // Update your local data properties here if needed
  }
);

const filteredAndPaginatedRows = computed(() => {
  const filteredMothers = validMothers.value.filter((mother) => {
    return Object.values(mother).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });

  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return filteredMothers.slice(start, end);
});
</script>

<template>
  <div>
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
    placeholder="Filter mother..."
    class="mt-12 w-1/4"
    color="sky"
  />
  <UTable
    :empty-state="{
      icon: 'i-heroicons-circle-stack-20-solid',
      label: 'No items.',
    }"
    :columns="selectedColumns"
    :rows="filteredAndPaginatedRows"
    :sort="{ column: 'person' }"
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
    :total="validMothers.length"
    color="sky"
  />
</div>
</template>
