<template>
  <div>
    <q-page>
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Назад" class="q-my-md" color="red" @click="route.back()" />
      </div>
      <q-card style="width: auto">
        <q-expansion-item v-model="active" style="pointer-events: none;" :label="`Основная информация`">
          <div>
              <div style="width: 100%;">
                <q-list class="product-item">
                  <span>Утверждение:</span>
                  <span v-if="receipt.approved">Одобрено</span>
                  <span v-else>Отказано</span>
                </q-list>
                <q-list class="product-item">
                  <span>Комментарий:</span>
                  <span>
                    {{ receipt.comment }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Создан:</span>
                  <span>
                    {{ receipt.created_at }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Затраты:</span>
                  <span>
                    {{ receipt.expenses }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>ID:</span>
                  <span>{{ receipt.id }}</span>
                </q-list>
              </div>
              <div style="width: 100%;">
                <q-list class="product-item">
                  <span>Номер:</span>
                  <span>{{ receipt.number }}</span>
                </q-list>
                <q-list class="product-item">
                  <span>Продукт:</span>
                  <span>{{ receipt.product }}</span>
                </q-list>
                <q-list class="product-item">
                  <span>Проект:</span>
                  <span>{{ receipt.project }}</span>
                </q-list>
                <q-list class="product-item">
                  <span>Количество:</span>
                  <span>{{ receipt.quantity }}</span>
                </q-list>
                <q-list class="product-item">
                  <span>Склад:</span>
                  <span>{{ receipt.warehouse }}</span>
                </q-list>
              </div>
          </div>
        </q-expansion-item>
      </q-card>
    </q-page>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRouter()
const store = useStore()
const receipt = computed(() => store.state.receipt.detail)

const splitterModel = ref(50)
const active = ref(true)

onMounted(() => {
  const receiptId = route.currentRoute.value.params.id
  store.dispatch('receipt/getOneById', receiptId)
  console.log(receipt)
})
</script>

<style>
.product-item {
  display: flex;
  justify-content: space-between;
}
</style>
