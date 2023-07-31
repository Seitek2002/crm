<template>
  <q-page>
    <div class="q-pa-md">
      <q-tabs v-model="tab" dense class="bg-white-2 text-primary" inline-label align="justify">
        <q-tab name="tovar" label="Товары и услуги" />
        <q-tab name="oprihodovanie" label="Оприходования" />
        <q-tab name="spisanie" label="Списания" />
        <q-tab name="ostatki" label="Остатки" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
        <q-tab-panel name="tovar">
          <div class="text-h4">Товары</div>
          <div class="q-pa-md q-gutter-sm row">
            <q-btn color="primary" size="sm" icon="add" label="Товар" @click="persistent = true"></q-btn>
            <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Добавить товар</div>
                </q-card-section>

                <q-separator></q-separator>

                <q-card-section style="max-height: 100vh" class="scroll">
                  <div class="q-gutter-y-md column" style="width: 30em">
                    <q-input outlined label="Наименовние товара" stack-label dense v-model="name" />
                    <q-input outlined autogrow label="Описание" stack-label dense v-model="description" />
                    <q-separator color="purple"></q-separator>
                    <q-select
                      outlined
                      v-model="group"
                      label="Группа"
                      :options="groupOptions"
                      behavior="menu"
                      dense
                    ></q-select>

                    <q-select
                      outlined
                      v-model="country"
                      label="Страна"
                      :options="countryOptions"
                      behavior="menu"
                      dense
                    ></q-select>

                    <q-select
                      outlined
                      v-model="provider"
                      label="Поставщик"
                      :options="providerOptions"
                      behavior="menu"
                      dense
                    ></q-select>
                    <q-input outlined label="Артикул" stack-label dense v-model="articul" />
                    <q-input outlined label="Код" stack-label dense v-model="code" />

                    <q-separator color="blue"></q-separator>
                    <q-input outlined label="Количество" stack-label dense v-model="amount" />
                    <q-input outlined label="Цена" stack-label dense v-model="price" />
                  </div>
                </q-card-section>

                <q-separator></q-separator>

                <q-card-actions align="right">
                  <q-btn flat label="Сохранить" color="primary" v-close-popup @click="onAdd()"></q-btn>
                  <q-btn flat label="Отмена" color="primary" v-close-popup></q-btn>
                </q-card-actions>
              </q-card>
            </q-dialog>

            <q-btn color="primary" size="sm" icon="print" label="печать"></q-btn>
          </div>

          <div class="q-pa-md">
            <q-table
              title="Товары"
              :rows="store.state.product.products"
              :columns="columns"
              :filter="filter"
              row-key="name"
            >
              <template v-slot:top-right>
                <q-input outlined dense debounce="300" v-model="filter" placeholder="Поиск">
                  <template v-slot:append>
                    <q-icon name="search"></q-icon>
                  </template>
                </q-input>
              </template>
            </q-table>
          </div>
        </q-tab-panel>

        <q-tab-panel name="oprihodovanie">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="spisanie">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="ostatki">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { useStore } from 'vuex'
const store = useStore()

const tab = ref('tovar')
const persistent = ref(false)

const filter = ref('')
const columns = [
  {
    name: 'articul',
    align: 'center',
    label: 'Артикул',
    field: 'articul',
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'Наименование',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true,
  },
  {
    name: 'description',
    align: 'center',
    label: 'Описание',
    field: 'description',
    sortable: true,
  },
  {
    name: 'price',
    align: 'center',
    label: 'Цена',
    field: 'price',
    sortable: true,
  },
  { name: 'country', label: 'Страна', field: 'country', sortable: true },
]
const rows = ref([])

const name = ref('')
const description = ref('')
const group = ref('')
const country = ref('')
const provider = ref('')
const articul = ref('')
const code = ref('')
const amount = ref(0)
const price = ref(0)

const groupOptions = ['Лекарство', 'Оборудование']

const countryOptions = ['Кыргызстан', 'Россия', 'Германия', 'Китай', 'Корея']

const providerOptions = ['ОсОО Рус', 'ОсОО Метанин', 'iBon']

onMounted(() => {
  store.dispatch('product/fetchProducts')
  console.log(store.state.product.products)
}),
  function onAdd() {
    fetch('http://127.0.0.1:8000/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        group: group.value,
        country: country.value,
        provider: provider.value,
        articul: articul.value,
        code: code.value,
        amount: amount.value,
        price: price.value,
        status: 10,
      }),
    })
  }
</script>
