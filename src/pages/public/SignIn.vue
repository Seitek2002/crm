<template>
    <q-page
        class="bg-light window-height window-width row justify-center items-center"
    >
        <div class="column">
            <div class="row">
                <q-card square bordered class="q-pa-lg shadow-2">
                    <q-card-section>
                        <q-form class="q-gutter-md">
                            <q-input
                                square
                                filled
                                clearable
                                v-model="email"
                                type="email"
                                label="Email"
                            />
                            <q-input
                                square
                                filled
                                clearable
                                v-model="password"
                                type="password"
                                label="Введите пароль..."
                            />
                        </q-form>
                    </q-card-section>
                    <q-card-actions class="q-px-md">
                        <q-btn
                            unelevated
                            color="purple-8"
                            size="lg"
                            class="full-width"
                            label="Войти"
                            @click="logIn"
                        />
                    </q-card-actions>
                    <q-card-section class="text-center q-pa-none">
                        <p class="text-grey-7">Создать аккаунт</p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const $q = useQuasar();
const loggedIn = computed(() => {
    return store.state.auth.status.loggedIn;
});
onMounted(() => {
    if (loggedIn) {
        router.push('/');
    }
});

let email = ref('');
let password = ref('');

const logIn = () => {
    const user = {
        email: email.value,
        password: password.value,
    };
    store.dispatch('auth/login', user).then(
        (data) => {
            router.push('/');
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
                console.log(
                    typeof error.response.data[errMsg],
                    error.response.data[errMsg]
                );
            }
        }
    );
};
</script>
<style>
.q-card {
    width: 360px;
}
</style>
