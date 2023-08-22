<script setup>
import { deleteUser } from "../../services/axios";
const { people } = defineProps(["people"]);
console.log(people);
const columns = [
  {
    key: "person_id",
    label: "ID",
  },
  {
    key: "username",
    label: "Username",
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
        router.push(`/users/${row.id}`);
      },
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => {
        deleteUser(row.id);
      },
    },
  ],
];

//pagination

const q = ref("");
const page = ref(1);
const pageCount = 4;

const validPeople = computed(() => people || []);
watch(
  () => people,
  () => {
    // Update your local data properties here if needed
  }
);

//methods

const filteredAndPaginatedRows = computed(() => {
  const filteredPeople = validPeople.value.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });

  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return filteredPeople.slice(start, end);
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
    v-if="filteredAndPaginatedRows.length > 0"
    :empty-state="{
      icon: 'i-heroicons-circle-stack-20-solid',
      label: 'No users available.',
    }"
    :columns="selectedColumns"
    :rows="filteredAndPaginatedRows"
    :sort="{ column: 'firt_name' }"
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
    :total="validPeople.length"
    color="sky"
  />
</template>
