<template>
  <div>
    <q-page>
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Назад" class="q-my-md" color="red" @click="route.back()" />
      </div>
      <q-card style="width: auto">
        <q-expansion-item v-model="active" style="pointer-events: none;" :label="`Основная информация товара: ${data.name}`">
          <div style="display: flex; align-items: start;">
            <div style="width: 50%;">
              <q-list class="product-item">
                <span class="span-name">Название товара:</span>
                <span>
                  {{ data.name }}
                </span>
              </q-list>
              <q-list class="product-item">
                <span class="span-name">Страна товара:</span>
                <span>
                  {{ data.country }}
                </span>
              </q-list>
              <q-list class="product-item">
                <span class="span-name">Департамент:</span>
                <span>
                  {{ data.department }}
                </span>
              </q-list>
              <q-list class="product-item">
                <span class="span-name">Группа:</span>
                <span>
                  {{ data.group }}
                </span>
              </q-list>
            </div>
            <div style="width: 50%;">
              <q-list class="product-item"><span>Поставщик:</span>
                <span>{{ data.supplier }}</span>
              </q-list>
              <q-list class="product-item"><span>Единица измерения:</span>
                <span>{{ data.unit }}</span>
              </q-list>
              <q-list class="product-item"><span>ВАТ:</span>
                <span>{{ data.vat }}</span>
              </q-list>
              <q-list class="product-item"><span>Минимальная цена:</span>
                <span>{{ data.min_price }}</span>
              </q-list>
              <q-list class="product-item"><span>Описание:</span>
                <span>{{ data.description }}</span>
              </q-list>
            </div>
          </div>
        </q-expansion-item>
      </q-card>
      <q-card style="width: auto;"   >
        <q-expansion-item style="pointer-events: none;" v-model="active" label="Характеристики товара">
          <q-card-section>

            <q-list class="product-item">
              <span>Артикул:</span> 
                <span>
                  {{ data.article }}
                </span> 
            </q-list>

            <q-list class="product-item">
              <span>Объем:</span> 
                <span>
                  {{ data.volume }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Вес:</span> 
                <span>
                  {{ data.weight }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Налоговая система:</span> 
                <span>
                  {{ data.tax_system }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Атрибут платежа:</span> 
                <span>
                  {{ data.payment_attribute }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Цена продажи:</span> 
                <span>
                  {{ data.selling_price }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Штрихкод:</span> 
                <span>
                  {{ data.barcode }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Название штрихкода:</span> 
                <span>
                  {{ data.barcode_name }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Внешний код:</span> 
                <span>
                  {{ data.external_code }}
                </span> 
            </q-list>
            <q-list class="product-item">
              <span>Kод:</span> 
                <span>
                  {{ data.code }}
                </span> 
            </q-list>
          </q-card-section>
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
const data = computed(() => store.state.products.detail)

const splitterModel = ref(50)
const active = ref(true)

onMounted(() => {
  const dataId = route.currentRoute.value.params.id
  store.dispatch('products/getOneById', dataId)
  console.log(data)
})
</script>

<style lang="scss">
.product-item {
  display: flex;
  justify-content: space-between;

  span:not(:first-child) {
    padding: 10px 5px;
    width: 100%;
    border: 1px solid #c9c9c9;
    display: flex;
    justify-content: end;
  }

  span:not(:last-child) {
    padding: 10px 5px;
    width: 100%;
    border: 1px solid #c9c9c9;
  }
}
</style>
