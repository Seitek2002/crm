<template>
  <div>
    <AddView :button-text="'Добавить товар'">
      <template v-slot:dialogLabel>Добавление товара</template>
     <template v-slot:fields>
        <div class="q-gutter-y-md row justify-between">
          <template v-for="field in requiredFields" :key="field.name">
            <template v-if="field.required">
              <q-select
                filled
                v-model="field.value"
                input-debounce="0"
                :label="field.label"
                :options="field.options"
                style="width: 49%"
                option-value="value"
                option-label="label"
                emit-value
                v-if="field.type == 'select'"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-input
                filled
                :label="field.label"
                stack-label
                v-model="field.value"
                style="width: 49%"
                v-else
              />
            </template>
          </template>
        </div>
      </template>
      <template v-slot:actionButtons>
        <q-btn
          style="color: #1976d2"
          flat
          label="Сохранить"
          @click="handleCreate"
        />
        <q-btn flat label="Отмена" v-close-popup style="color: #1976d2" />
      </template>
    </AddView>
<q-table
      :grid="$q.screen.xs"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      @row-click="handleRowClick"
    ></q-table>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import AddView from '../../../components/UI/Dialog/AddView.vue'
import columns from './columns'

let filter = ref('')
const store = useStore()
const $q = useQuasar()
const route = useRouter()

const countryVal = ref('')
const groupVal = ref('')
const supplierVal = ref('')
const weightVal = ref('')
const barcode_nameVal = ref('')
const accountingVal = ref('')
const barcodeVal = ref('')
const calculationVal = ref('')
const divisionVal = ref('')

onMounted(() => {
  store.dispatch('products/getAll')
  store.dispatch('country/getAll')
  store.dispatch('group/getAll')
  store.dispatch('supplier/getAll')
  store.dispatch('weight/getAll')
  store.dispatch('barcode_name/getAll')
  store.dispatch('accounting/getAll')
  store.dispatch('barcode/getAll')
  store.dispatch('calculation/getAll')
  store.dispatch('division/getAll')
})

const countries = computed(() => {
  const acc = []

  store.state.country.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const groups = computed(() => {
  const acc = []

  store.state.group.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const suppliers = computed(() => {
  const acc = []

  store.state.supplier.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const weights = computed(() => {
  const acc = []

  store.state.weight.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const barcode_names = computed(() => {
  const acc = []

  store.state.barcode_name.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const accountings = computed(() => {
  const acc = []

  store.state.accounting.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const barcodes = computed(() => {
  const acc = []

  store.state.barcode.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const divisions = computed(() => {
  const acc = []

  store.state.division.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const calculations = computed(() => {
  const acc = []

  store.state.calculation.list.forEach(({ name }) => {
    acc.push(name)
  })

  return acc
})

const rows = computed(() => store.state.products.list)
const requiredFields = ref(
  columns.map(col => ({
    name: col.name,
    label: col.label,
    required: !!col?.required,
    type: col?.type ?? '',
    options: col?.type == 'select' ? col.options : '',
  }))
)
function handleRowClick(e, row) {
  route.push(`/product/detail/${row.id}`)
}
function handleCreate() {
  const combinedObject = requiredFields.value.reduce((result, column) => {
    if (column.required) {
      result[column.name] = column.value ?? ''
    }
    return result
  }, {})
  console.log(combinedObject)
  store.dispatch('products/create', combinedObject).then(
    () => {
      $q.notify({
        message: 'Успешно создан товар',
        color: 'positive',
        position: 'top',
      })
      store.dispatch('dialog/closePopup')
    },
    error => {
      for (let errMsg in error?.response?.data) {
        $q.notify({
          message:
            typeof error.response.data[errMsg] === 'string'
              ? error.response.data[errMsg]
              : `${error.response.data[errMsg][0]} [${errMsg}]`,
          color: 'red',
          position: 'top',
          actions: [
            {
              label: 'Закрыть',
              color: 'white',
            },
          ],
        })
      }
    }
  )
}
</script>
