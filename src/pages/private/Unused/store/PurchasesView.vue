<template>
  <q-page>
    <div class="q-pa-md">
      <div class="text-h4">Закупки</div>
      <div class="q-pa-md q-gutter-sm row">
        <q-btn
          color="primary"
          size="sm"
          icon="add"
          label="Добавить"
          @click="persistent = true"
        ></q-btn>
        <q-dialog
          v-model="persistent"
          persistent
          transition-show="scale"
          transition-hide="scale"
        >
          <q-card>
            <q-card-section>
              <div class="text-h6">Добавить</div>
            </q-card-section>

            <q-separator></q-separator>

            <q-card-section style="max-height: 100vh" class="scroll">
              <div class="q-gutter-y-md column" style="width: 30em">
                <q-input
                  outlined
                  autogrow
                  label="Наименование"
                  stack-label
                  dense
                  v-model="name"
                />
                <q-input
                  outlined
                  label="Адрес"
                  stack-label
                  dense
                  v-model="address"
                />
                <q-input
                  outlined
                  autogrow
                  label="Код"
                  stack-label
                  dense
                  v-model="code"
                />
                <q-input
                  outlined
                  autogrow
                  label="Департамент"
                  stack-label
                  dense
                  v-model="department"
                />
                <q-input
                  outlined
                  autogrow
                  label="Сотрудник"
                  stack-label
                  dense
                  v-model="employee"
                />
              </div>
            </q-card-section>

            <q-separator></q-separator>

            <q-card-actions align="right">
              <q-btn
                flat
                label="Сохранить"
                color="primary"
                v-close-popup
                @click="onAdd()"
              ></q-btn>
              <q-btn flat label="Отмена" color="primary" v-close-popup></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <div class="q-pa-md">
        <q-table
          title="Закупки"
          :rows="store.state.product.products"
          :columns="columns"
          :filter="filter"
          row-key="name"
        >
          <template v-slot:top-right>
            <q-input
              outlined
              dense
              debounce="300"
              v-model="filter"
              placeholder="Поиск"
            >
              <template v-slot:append>
                <q-icon name="search"></q-icon>
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useStore } from "vuex";
const store = useStore();

const tab = ref("tovar");
const persistent = ref(false);

const filter = ref("");
const columns = [
  {
    name: "articul",
    align: "center",
    label: "Артикул",
    field: "articul",
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Наименование",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "description",
    align: "center",
    label: "Описание",
    field: "description",
    sortable: true,
  },
  {
    name: "price",
    align: "center",
    label: "Цена",
    field: "price",
    sortable: true,
  },
  { name: "country", label: "Страна", field: "country", sortable: true },
];
const rows = ref([]);

const address = ref("");
const code = ref("");
const department = ref("");
const employee = ref("");
const name = ref("");

const groupOptions = ["Лекарство", "Оборудование"];

const countryOptions = ["Кыргызстан", "Россия", "Германия", "Китай", "Корея"];

const providerOptions = ["ОсОО Рус", "ОсОО Метанин", "iBon"];

onMounted(() => {
  store.dispatch("department/fetchDepartments");
});

function onAdd() {
  store.dispatch("purchase/addPurchase", {
    name: name.value,
    address: address.value,
    department: department.value,
    employee: employee.value,
    code: code.value,
  });
}
</script>
