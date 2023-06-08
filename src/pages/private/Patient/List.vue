<template>
    <q-card>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
        >
            <q-tab name="all" label="ВСЕ" />
            <q-tab name="privilegies" label="ЛЬГОТНЫЕ" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="all">
                <q-table
                    :grid="$q.screen.xs"
                    flat
                    bordered
                    :rows="contacts_list"
                    :columns="columns"
                    row-key="name"
                    :filter="filter"
                >
                    <template v-slot:top-right>
                        <q-input
                            borderless
                            dense
                            debounce="300"
                            v-model="filter"
                            placeholder="Поиск..."
                        >
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </template>

                    <template v-slot:body-cell-avatar="props">
                        <q-td :props="props">
                            <q-avatar>
                                <img :src="props.value" />
                            </q-avatar>
                        </q-td>
                    </template>
                    <template v-slot:item="props">
                        <q-card bordered flat>
                            <q-card-section>
                                <q-avatar>
                                    <img :src="props.row.avatar" />
                                </q-avatar>
                            </q-card-section>

                            <q-list dense>
                                <q-item
                                    v-for="col in props.cols.filter(
                                        col => col.name !== 'avatar'
                                    )"
                                    :key="col.name"
                                >
                                    <q-item-section>
                                        <q-item-label>{{
                                            col.label
                                        }}</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-item-label caption>{{
                                            col.value
                                        }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card>
                    </template>
                </q-table>
            </q-tab-panel>

            <q-tab-panel name="privilegies">
                <q-table
                    :grid="$q.screen.xs"
                    flat
                    bordered
                    :rows="favorites_list"
                    :columns="columns"
                    row-key="name"
                    :filter="filter"
                >
                    <template v-slot:top-right>
                        <q-input
                            borderless
                            dense
                            debounce="300"
                            v-model="filter"
                            placeholder="Поиск..."
                        >
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </template>
                    <template v-slot:body-cell-avatar="props">
                        <q-td :props="props">
                            <q-avatar>
                                <img :src="props.value" />
                            </q-avatar>
                        </q-td>
                    </template>
                    <template v-slot:item="props">
                        <q-card bordered flat>
                            <q-card-section>
                                <q-avatar>
                                    <img :src="props.row.avatar" />
                                </q-avatar>
                            </q-card-section>

                            <q-list dense>
                                <q-item
                                    v-for="col in props.cols.filter(
                                        col => col.name !== 'avatar'
                                    )"
                                    :key="col.name"
                                >
                                    <q-item-section>
                                        <q-item-label>{{
                                            col.label
                                        }}</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-item-label caption>{{
                                            col.value
                                        }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card>
                    </template>
                </q-table>
            </q-tab-panel>
        </q-tab-panels>
    </q-card>
</template>
<script setup>
import { ref } from 'vue';
let tab = ref('all');
const columns = [
    {
        name: 'avatar',
        align: 'left',
        label: '',
        field: 'avatar',
    },
    {
        name: 'desc',
        required: true,
        label: 'Имя',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true,
    },
    {
        name: 'position',
        align: 'left',
        label: 'Тип',
        field: 'position',
    },
    {
        name: 'email',
        align: 'left',
        label: 'E-mail',
        field: 'email',
    },
    {
        name: 'company_email',
        align: 'left',
        label: 'Корп. E-mail',
        field: 'company_email',
    },
    {
        name: 'website',
        align: 'left',
        label: 'Вебсайт',
        field: 'website',
    },
    {
        name: 'phone',
        align: 'left',
        label: 'Телефон',
        field: 'phone',
    },
    {
        name: 'secondary_phone',
        align: 'left',
        label: 'Мобильный',
        field: 'secondary_phone',
    },
    {
        name: 'address',
        align: 'left',
        label: 'Адрес',
        field: 'address',
    },
];
const filter = ref('');
const contacts_list = [
    {
        name: 'Pratik Patel',
        position: 'Пациент',
        avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
        email: 'pratikpatelpp802@gmail.com',
        company_email: 'pratikpatelpp802@gmail.com',
        website: 'www.test.com',
        phone: '+9910101010',
        secondary_phone: '+9910101010',
        address: 'BB 101 Om Sai Residency Palsana',
    },
    {
        name: 'Razvan Stoenescu',
        position: 'Пациент',
        avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
        email: 'mailto:razvan@quasar.dev',
        company_email: 'mailto:razvan@quasar.dev',
        website: 'https://github.com/rstoenescu',
        phone: '+1-004-658-0042',
        secondary_phone: '(331) 009-4655 x3147',
        address: '92290 Lisa Cove',
    },
    {
        name: 'Jeff Galbraith',
        position: 'Пациент',
        avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
        email: 'mailto:jeff@quasar.dev',
        company_email: 'mailto:jeff@quasar.dev',
        website: 'http://jeffgalbraith.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
    },
    {
        name: 'Brunhilde Panswick',
        position: 'Пациент',
        avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
        email: 'test.@quasar.dev',
        company_email: 'test.@quasar.dev',
        website: 'http://test1.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
    },
    {
        name: 'Winfield Stapforth',
        position: 'Пациент',
        avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
        email: 'test2.@quasar.dev',
        company_email: 'test.@quasar.dev',
        website: 'http://test2.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
    },
];
const favorites_list = [
    {
        name: 'Искаков Арзымат',
        position: 'Пациент',
        avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
        email: 'pratikpatelpp802@gmail.com',
        company_email: 'pratikpatelpp802@gmail.com',
        website: 'www.test.com',
        phone: '+9910101010',
        secondary_phone: '+9910101010',
        address: 'BB 101 Om Sai Residency Palsana',
    },
    {
        name: 'Коромушкина Елена',
        position: 'Пациент',
        avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
        email: 'mailto:razvan@quasar.dev',
        company_email: 'mailto:razvan@quasar.dev',
        website: 'https://github.com/rstoenescu',
        phone: '+1-004-658-0042',
        secondary_phone: '(331) 009-4655 x3147',
        address: '92290 Lisa Cove',
    },
    {
        name: 'Усманова Арина',
        position: 'Пациент',
        avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
        email: 'mailto:jeff@quasar.dev',
        company_email: 'mailto:jeff@quasar.dev',
        website: 'http://jeffgalbraith.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
    },
];
</script>
<style scoped>
.q-card {
    width: 100%;
}
</style>
