<template>
  <q-header bordered class="bg-deep-purple-5 text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"></q-btn>
      <q-toolbar-title></q-toolbar-title>
      <div>
        <q-btn flat round dense icon="logout" tag="a" href="#" @click="handleExit"></q-btn>
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered id="q-app-sidebar">
    <q-list>
      <q-item-label header>
        <q-toolbar-title class="q-pt-xs">CRM ВИТА</q-toolbar-title>
      </q-item-label>

      <q-item clickable to="/" class="animate__animated animate__backInLeft animate_dashboard">
        <q-item-section avatar>
          <q-icon name="dashboard" color="purple"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>Главная</q-item-label>
          <q-item-label caption>Виджеты</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="animate__animated animate__backInLeft animate_reg" clickable to="/registration">
        <q-item-section avatar>
          <q-icon name="edit_calendar" color="purple"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>Записи на прием</q-item-label>
          <q-item-label caption>Сеанс диализа</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="animate__animated animate__backInLeft animate_patientreg" clickable to="/registration_patient">
        <q-item-section avatar>
          <q-icon name="edit_note" color="purple"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>Регистрация пациента</q-item-label>
          <q-item-label caption>Регистрация на диализ</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="animate__animated animate__backInLeft animate_patient" clickable to="/patient">
        <q-item-section avatar>
          <q-icon name="group" color="purple"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>Пациенты</q-item-label>
          <q-item-label caption>просмотр пациентов</q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item
        class="animate__animated animate__backInLeft animate_store"
        icon="store"
        label="Склад"
        style="color: #9c27b0"
      >
        <q-item class="animate__animated animate__backInLeft animate_inventory" clickable to="/inventory">
          <q-item-section avatar>
            <q-icon name="inventory" color="purple"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Инвентаризация</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="animate__animated animate__backInLeft animate_cancellation" clickable to="/cancellation">
          <q-item-section avatar>
            <q-icon name="free_cancellation" color="purple"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Списание</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="animate__animated animate__backInLeft animate_cancellation" clickable to="/receipt">
          <q-item-section avatar>
            <q-icon name="receipt" color="purple"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Оприходывание</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="animate__animated animate__backInLeft animate_apartment" clickable to="/contractor">
          <q-item-section avatar>
            <q-icon name="apartment" color="purple"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Контрагент</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="animate__animated animate__backInLeft animate_product" clickable to="/product">
          <q-item-section avatar>
            <q-icon name="local_mall" color="purple"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>Товар</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-separator
        color="orange"
        inset
        class="q-mt-lg q-mb-sm animate__animated animate__backInLeft animate__slow"
      ></q-separator>
      <q-item class="animate__animated animate__backInLeft animate_accounts" clickable to="/accounts">
        <q-item-section avatar>
          <q-icon name="manage_accounts" color="purple"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>Сотрудники</q-item-label>
          <q-item-label caption>управление пользователями</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="animate__animated animate__backInLeft animate_exit" clickable @click="handleExit" tag="a">
        <q-item-section avatar>
          <q-icon name="logout" color="purple"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label>Выход</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function handleExit(e) {
  e.preventDefault()
  store.dispatch('auth/logout')
  router.push('/login')
}
</script>
<style scoped>
.animate_dashboard {
  --animate-duration: 0.7s;
}
.animate_reg {
  --animate-duration: 0.9s;
}
.animate_patientreg {
  --animate-duration: 1.1s;
}
.animate_patient {
  --animate-duration: 1.3s;
}
.animate_inventory {
  --animate-duration: 0.3s;
}
.animate_cancellation {
  --animate-duration: 0.5s;
}
.animate_store {
  --animate-duration: 1.5s;
}
.animate_apartment {
  --animate-duration: 0.7s;
}
.animate_product {
  --animate-duration: 0.9s;
}
.animate_accounts {
  --animate-duration: 2s;
}
.animate_exit {
  --animate-duration: 2.1s;
}
</style>
