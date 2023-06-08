<template>
  <q-page class="q-pa-sm bg-white">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Заполните адрес"
            icon="person"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <div class="row">
              <div class="col-12">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="card_detail.pin"
                    label="Пин"
                  />
                </q-item>
                <q-btn
                  rounded
                  @click="getDataByPin"
                  class="float-right q-mr-md q-mb-md"
                  color="blue"
                  label="Получить данные"
                />
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.first_name"
                    label="Имя *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.last_name"
                    label="Фамилия *"
                  />
                </q-item>
              </div>
              <div class="col-12">
                <q-item>
                  <q-input
                    dense
                    autogrow
                    outlined
                    v-model="address_detail.address_line_1"
                    class="full-width"
                    label="Адрес 1 *"
                  />
                </q-item>
              </div>
              <div class="col-12">
                <q-item>
                  <q-input
                    dense
                    autogrow
                    outlined
                    v-model="address_detail.address_line_2"
                    class="full-width"
                    label="Почтовый адрес 2 *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.city"
                    label="Город *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.state"
                    label="Область"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.zip_code"
                    label="Почтовый код"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.country"
                    label="Страна *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-checkbox
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.checkbox"
                    label="Сохранить эти данные пациента"
                  />
                </q-item>
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn
                rounded
                @click="
                  () => {
                    done1 = true;
                    step = 2;
                  }
                "
                class="float-right q-mr-md q-mb-md"
                color="blue"
                label="Вперед"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Детали сеанса"
            icon="person"
            :done="step > 2"
            :header-nav="step > 2"
          >
            <div class="row">
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="card_detail.name"
                    label="Поле 1*"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.card_number"
                    label="Поле 2 *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    autogrow
                    outlined
                    v-model="address_detail.expiry_date"
                    class="full-width"
                    label="Поле 3 *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-input
                    dense
                    autogrow
                    outlined
                    v-model="address_detail.cvv"
                    class="full-width"
                    label="Поле 4 *"
                  />
                </q-item>
              </div>
              <div class="col-6">
                <q-item>
                  <q-checkbox
                    dense
                    outlined
                    class="full-width"
                    v-model="address_detail.checkbox"
                    label="Сохранить"
                  />
                </q-item>
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn
                rounded
                @click="
                  () => {
                    done2 = true;
                    step = 3;
                  }
                "
                class="float-right q-mr-md q-mb-md"
                color="blue"
                label="Вперед"
              />
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                rounded
                label="Назад"
                class="q-mr-sm float-right"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Проверить данные"
            icon="person"
            :header-nav="step > 3"
          >
            <div class="row">
              <div class="col-12">
                <q-item-label header class="text-h6">Итого</q-item-label>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Данные 1</q-item-label>
                    <q-item-label caption>Описание</q-item-label>
                  </q-item-section>
                  <q-item-section side> 510.99 сом </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Данные 2</q-item-label>
                    <q-item-label caption>Описание</q-item-label>
                  </q-item-section>
                  <q-item-section side> 1119.99 сом </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Данные 3</q-item-label>
                    <q-item-label caption>Описание</q-item-label>
                  </q-item-section>
                  <q-item-section side> 800 сом </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Данные 4</q-item-label>
                    <q-item-label caption>Описание </q-item-label>
                  </q-item-section>
                  <q-item-section side> 178.99 сом </q-item-section>
                </q-item>
                <q-separator></q-separator>

                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Данные 5</q-item-label>
                  </q-item-section>
                  <q-item-section side> Бесплатно </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width" style="border-top: 3px dotted blue">
                  <q-item-section>
                    <q-item-label lines="1">Итого</q-item-label>
                  </q-item-section>
                  <q-item-section side> 4789 сом </q-item-section>
                </q-item>
              </div>
            </div>

            <q-card class="rounded-borders">
              <q-card-section horizontal>
                <q-card-section class="col-5 q-pt-xs">
                  <div class="text-h6 text-center">Пациент</div>
                  <div class="text-subtitle1">Пан Паныч</div>
                  <div class="text-subtitle2">Описание</div>
                </q-card-section>
                <q-card-section class="col-7 q-pt-xs">
                  <div class="text-h6 text-center">Способ оплаты</div>
                  <div class="text-subtitle1 q-mb-xs">Карта - Visa</div>
                  <div class="text-subtitle1 q-mb-xs">
                    Держатель - П***н Паныч
                  </div>
                  <div class="text-subtitle1 q-mb-xs">
                    Номер карты - xxxx-xxxx-xxxx-1234
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>

            <q-stepper-navigation>
              <q-btn
                rounded
                @click="done3 = true"
                class="float-right q-mr-md q-mb-md"
                color="blue"
                label="Сохранить"
              />
              <q-btn
                flat
                @click="step = 2"
                color="primary"
                rounded
                label="Назад"
                class="q-mr-sm float-right"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <q-card class="bg-grey-2">
          <q-card-section class="text-center text-h6 text-black">
            <q-icon name="group" class="q-mr-sm" />
            Пациенты
          </q-card-section>
          <q-card-section horizontal>
            <q-card-section class="col-5 flex flex-center"> </q-card-section>
            <q-card-section class="">
              <div class="text-subtitle2 q-mt-sm">Данные 1</div>
              <div class="text-subtitle2 q-mb-xs">1011.99 сом</div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center"> </q-card-section>
            <q-card-section class="">
              <div class="text-subtitle2 q-mt-md">Данные 2</div>
              <div class="text-subtitle2 q-mb-xs">2319.99 сом</div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center"> </q-card-section>
            <q-card-section class="">
              <div class="text-subtitle2 q-mt-md">Данные 3</div>
              <div class="text-subtitle2 q-mb-xs">2278.99сом</div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section horizontal class="q-pa-none">
            <q-card-section class="col-5 flex flex-center"> </q-card-section>
            <q-card-section class="">
              <div class="text-subtitle2 q-mt-md">Данные 4</div>
              <div class="text-subtitle2 q-mb-xs">1178.99сом</div>
            </q-card-section>
          </q-card-section>

          <q-separator></q-separator>
          <q-card-section class="row">
            <div class="col-12 text-h6 full-width">
              <div class="float-right q-mr-md">
                Итого : <span class="text-blue">8288.96сом</span>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

let step = ref(1);
let address_detail = ref({});
let card_detail = ref({});

const getDataByPin = async () => {
  if (!card_detail.value.pin) {
    return;
  }

  const pinData = await store.dispatch("patient/getInfoByPin", {
    pin: card_detail.value.pin,
  });

  address_detail.value.first_name = pinData.name;
  address_detail.value.last_name = pinData.surname;
};
</script>
