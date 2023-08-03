<template>
    <div>
        <AddView :button-text="'Добавить оприходывание'">
            <template v-slot:dialogLabel>Добавление Оприходывание</template>
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
              <Input v-else :placeholder="field.label" :model="field.value" />
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
import columns from './columns/';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import AddView from '../../../components/UI/Dialog/AddView.vue';
import Input from '../../../components/UI/inputs/Input.vue'

const store = useStore();
const $q = useQuasar();
const route = useRouter();
function handleRowClick(e, row) {
    route.push(`/receipt/detail/${row.id}`);
}
function handleCreate() {
    const combinedObject = requiredFields.value.reduce((result, column) => {
        if (column.required) {
            result[column.name] = column.value ?? '';
        }
        return result;
    }, {});
    console.log(combinedObject, '85');
    store.dispatch('receipt/create', combinedObject).then(
        () => {
            $q.notify({
                message: 'Успешно создано оприходывание',
                color: 'positive',
                position: 'top',
            });
            store.dispatch('dialog/closePopup');
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
                });
            }
        }
    );
}
onMounted(() => {
    store.dispatch('receipt/getAll');
});
const rows = computed(() => store.state.receipt.list);
const requiredFields = ref(
    columns.map(col => ({
        name: col.name,
        label: col.label,
        required: !!col?.required,
        type: col?.type ?? '',
        options: col?.type == 'select' ? [{ label: 'Группа 1', value: 1 }] : '',
    }))
);
console.log(requiredFields.value);
</script>
