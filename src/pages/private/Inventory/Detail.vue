<template>
    <div>
        <q-page>
            <div class="q-pa-md q-gutter-sm">
                <q-btn
                    label="Назад"
                    class="q-my-md"
                    color="red"
                    @click="route.back()"
                />
            </div>
            <q-card v-if="inventory">
                <q-card-section>
                    <q-card-title>
                        <span class="text-h6"
                            >Название: {{ inventory.name }}</span
                        >
                    </q-card-title>
                </q-card-section>
                <q-card-section>
                    <q-list>
                        <template
                            v-for="(value, fieldname) in inventory"
                            :key="fieldname"
                        >
                            <q-item v-if="fieldname != 'id'">
                                <q-item-section>
                                    <q-item-label
                                        >{{ fieldname }}:
                                        {{ value }}</q-item-label
                                    >
                                </q-item-section>
                            </q-item>
                        </template>
                    </q-list>
                </q-card-section>
            </q-card>
            <span class="text-h6" v-else> Контрагент не найден </span>
        </q-page>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const route = useRouter();
const store = useStore();
const inventory = computed(() => store.state.inventory.detail);

onMounted(() => {
    const inventoryId = route.currentRoute.value.params.id;
    store.dispatch('inventory/getOneById', inventoryId);
});
</script>
