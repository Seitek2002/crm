<template>
  <div>
    <q-page>
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Назад" class="q-my-md" color="red" @click="route.back()" />
      </div>
      <q-card v-if="contractor" style="width:auto;">
        <q-expansion-item :label="`Название: ${contractor.name}`">
          <q-splitter v-model="splitterModel">
            <template v-slot:before>
              <div class="q-pa-md">

                <q-list class="product-item">
                  <span>Адрес:</span>
                  <span>
                    {{ contractor.address }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Страна товара:</span>
                  <span>
                    {{ contractor.address_comment }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Комментарий к адресу:</span>
                  <span>
                    {{ data.department }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Банковские счета:</span>
                  <span>
                    {{ contractor.bank_accounts }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Код:</span>
                  <span>
                    {{ contractor.code }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Комментарий:</span>
                  <span>
                    {{ contractor.comment }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Тип подрядчика:</span>
                  <span>
                    {{ contractor.contractor_type }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Описание:</span>
                  <span>
                    {{ contractor.description }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Номер дисконтной карты:</span>
                  <span>
                    {{ contractor.discount_card_number }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Почта:</span>
                  <span>
                    {{ contractor.email }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Внешний код:</span>
                  <span>
                    {{ contractor.external_code }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Факс:</span>
                  <span>
                    {{ contractor.fax }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>Группы:</span>
                  <span>
                    {{ contractor.groups }}
                  </span>
                </q-list>
                <q-list class="product-item">
                  <span>ИНН:</span>
                  <span>
                    {{ contractor.inn }}
                  </span>
                </q-list>

              </div>
            </template>
            <template v-slot:after>
              <div class="q-pa-md">
                <q-list class="product-item"><span>КПП:</span> <span>{{ contractor.kpp }}</span></q-list>
                <q-list class="product-item"><span>Адрес юридического лица:</span> <span>{{
                  contractor.legal_entity_address }}</span></q-list>
                <q-list class="product-item"><span>Адрес юридического лица комментарий:</span> <span>{{
                  contractor.legal_entity_address_comment }}</span></q-list>
                <q-list class="product-item"><span>Наименования юридического лица:</span> <span>{{
                  contractor.legal_entity_name }}</span></q-list>
                <q-list class="product-item"><span>Имя:</span> <span>{{ contractor.name }}</span></q-list>
                <q-list class="product-item"><span>ОГРН:</span> <span>{{ contractor.ogrn }}</span></q-list>
                <q-list class="product-item"><span>ОКПО:</span> <span>{{ contractor.okpo }}</span></q-list>
                <q-list class="product-item"><span>Телефон:</span> <span>{{ contractor.phone }}</span></q-list>
                <q-list class="product-item"><span>Тип цены:</span> <span>{{ contractor.price_type }}</span></q-list>
                <q-list class="product-item"><span>Общий доступ:</span> <span>{{ contractor.shared_access
                }}</span></q-list>
                <q-list class="product-item"><span>Статус:</span> <span>{{ contractor.status }}</span></q-list>
                <q-list class="product-item"><span>Пользователь:</span> <span>{{ contractor.user }}</span></q-list>
              </div>
            </template>
          </q-splitter>
        </q-expansion-item>
      </q-card>
      <span class="text-h6" v-else>Контрагент не найден</span>
    </q-page>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRouter()
const store = useStore()
const contractor = computed(() => store.state.contractors.detail)
const data = computed(() => store.state.products.detail)
const splitterModel = ref(50)


onMounted(() => {
  const contractorId = route.currentRoute.value.params.id
  store.dispatch('contractors/getOneById', contractorId)
  console.log(contractor);
})
</script>
<style>
.product-item {
  display: flex;
  justify-content: space-between;
}</style>