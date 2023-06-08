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
                                <!-- :bg-color="field.required ? 'red' : ''"
                                :label-color="field.required ? 'white' : ''"
                                :color="field.required ? 'white' : 'black'" -->
                        </template>
                    </template>
                </div>
            </template>
            <q-checkbox left-label v-model="left" label="Label on Left" />
            <template v-slot:actionButtons>
                <q-btn
                    style="color: #1976D2"
                    flat
                    label="Сохранить"
                    @click="handleCreate"
                />
                <q-btn flat label="Отмена" v-close-popup style="color: #1976D2" />
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
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import AddView from '../../../components/UI/Dialog/AddView.vue';
import columns from './columns';
let filter = ref('');
const store = useStore();
const $q = useQuasar();
const route = useRouter();
onMounted(() => {
    store.dispatch('products/getAll');
});
const rows = computed(() => store.state.products.list);
const requiredFields = ref(
    columns.map(col => ({
        name: col.name,
        label: col.label,
        required: !!col?.required,
        type: col?.type ?? '',
        options: col?.type == 'select' ? col.options : '',
    }))
);
function handleRowClick(e, row) {
    route.push(`/product/detail/${row.id}`);
}
function handleCreate() {
    const combinedObject = requiredFields.value.reduce((result, column) => {
        if (column.required) {
            result[column.name] = column.value ?? '';
        }
        return result;
    }, {});
    console.log(combinedObject);
    store.dispatch('products/create', combinedObject).then(
        () => {
            $q.notify({
                message: 'Успешно создан товар',
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

</script>
