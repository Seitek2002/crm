<template>
    <q-page>
        <div class="q-pa-md">
            <q-card class="bg-transparent no-shadow no-border full-width">
                <q-card-section class="q-pa-none">
                    <div class="row q-col-gutter-sm">
                        <div
                            v-for="(item, index) in items"
                            :key="index"
                            class="col-md-3 col-sm-12 col-xs-12"
                        >
                            <q-item
                                :style="`background-color: ${item.color1}`"
                                class="q-pa-none animate__animated animate__fadeInDown"
                            >
                                <q-item-section
                                    class="q-pa-md q-ml-none text-white"
                                >
                                    <q-item-label
                                        class="text-white text-h6 text-weight-bolder"
                                        >{{ item.value }}</q-item-label
                                    >
                                    <q-item-label>{{
                                        item.title
                                    }}</q-item-label>
                                </q-item-section>

                                <q-item-section side class="q-mr-md text-white">
                                    <q-icon
                                        :name="item.icon"
                                        color="white"
                                        size="44px"
                                    ></q-icon>
                                </q-item-section>
                            </q-item>
                        </div>
                    </div>
                </q-card-section>
            </q-card>

            <q-card class="q-mt-sm full-width">
                <q-card-section class="text-h6 q-pb-none">
                    <q-item
                        class="animate__animated animate__fadeInLeft animate__fast"
                    >
                        <q-item-section avatar class="">
                            <q-icon color="blue" name="bar_chart" size="44px" />
                        </q-item-section>

                        <q-item-section>
                            <div class="text-h6">Пациенты, Лекарства</div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section class="row">
                    <div class="col-lg-7 col-sm-12 col-xs-12 col-md-7">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                                <q-item
                                    class="animate__animated animate__fadeInUp"
                                >
                                    <q-item-section top avatar>
                                        <q-avatar
                                            color="blue"
                                            text-color="white"
                                            icon="group"
                                        />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label
                                            class="text-h6 text-blue text-bold"
                                            >321</q-item-label
                                        >
                                        <q-item-label caption
                                            >Пациенты</q-item-label
                                        >
                                    </q-item-section>
                                </q-item>
                            </div>
                            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                                <q-item
                                    class="animate__animated animate__fadeInUp"
                                >
                                    <q-item-section top avatar>
                                        <q-avatar
                                            color="pink"
                                            text-color="white"
                                            icon="medical_information"
                                        />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label
                                            class="text-h6 text-grey-8 text-bold"
                                            >9876</q-item-label
                                        >
                                        <q-item-label caption
                                            >Лекарства</q-item-label
                                        >
                                    </q-item-section>
                                </q-item>
                            </div>
                            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                                <q-item
                                    class="animate__animated animate__fadeInUp"
                                >
                                    <q-item-section top avatar>
                                        <q-avatar
                                            color="green-6"
                                            text-color="white"
                                            icon="biotech"
                                        />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label
                                            class="text-h6 text-green-6 text-bold"
                                            >345</q-item-label
                                        >
                                        <q-item-label caption
                                            >Оборудования</q-item-label
                                        >
                                    </q-item-section>
                                </q-item>
                            </div>
                            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                                <q-item
                                    class="animate__animated animate__fadeInUp"
                                >
                                    <q-item-section top avatar>
                                        <q-avatar
                                            color="orange-8"
                                            text-color="white"
                                            icon="medical_services"
                                        />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label
                                            class="text-h6 text-orange-8 text-bold"
                                            >1021</q-item-label
                                        >
                                        <q-item-label caption
                                            >Услуги</q-item-label
                                        >
                                    </q-item-section>
                                </q-item>
                            </div>
                        </div>
                        <div>
                            <div id="saleschart" style="height: 250px"></div>
                            <!--            <IEcharts style="height: 250px" :option="getSalesOptions" :resizable="true" />-->
                        </div>
                    </div>
                </q-card-section>
            </q-card>

            <q-card class="q-mt-sm full-width">
                <q-card-section class="text-h6 q-pb-none">
                    <q-item>
                        <q-item-section avatar class="">
                            <q-icon
                                color="blue"
                                name="medical_information"
                                size="44px"
                            />
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>
                                <div class="text-h6">Последние деализы</div>
                            </q-item-label>
                            <q-item-label caption class="text-black">
                                Мониторинг услуг
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section class="q-pa-none q-ma-none">
                    <q-table
                        class="no-shadow no-border"
                        :rows="sales_data"
                        :columns="sales_column"
                        hide-bottom
                    >
                        <template v-slot:body-cell-Products="props">
                            <q-td :props="props">
                                <q-item>
                                    <q-item-section>
                                        <q-item-label>{{
                                            props.row.prod_num
                                        }}</q-item-label>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{
                                            props.row.code
                                        }}</q-item-label>
                                        <q-item-label>{{
                                            props.row.product_name
                                        }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Name="props">
                            <q-td :props="props">
                                <q-item>
                                    <q-item-section avatar>
                                        <q-avatar>
                                            <q-icon
                                                name="account_circle"
                                                color="grey"
                                                size="44px"
                                            ></q-icon>
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{
                                            props.row.name
                                        }}</q-item-label>
                                        <q-item-label caption class=""
                                            >Дата сеанса: <br />{{
                                                props.row.date
                                            }}</q-item-label
                                        >
                                    </q-item-section>
                                </q-item>
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Status="props">
                            <q-td :props="props" class="text-left">
                                <q-chip
                                    class="text-white text-capitalize"
                                    :label="props.row.status"
                                    :color="getChipColor(props.row.status)"
                                ></q-chip>
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Stock="props">
                            <q-td :props="props">
                                <q-item>
                                    <q-item-section>
                                        <q-item-label>
                                            <span class="text-blue">
                                                <q-icon
                                                    name="bug_report"
                                                    color="blue"
                                                    size="20px"
                                                    v-if="
                                                        props.row.type ==
                                                        'error'
                                                    "
                                                ></q-icon>
                                                <q-icon
                                                    name="settings"
                                                    color="blue"
                                                    size="20px"
                                                    v-if="
                                                        props.row.type == 'info'
                                                    "
                                                ></q-icon>
                                                <q-icon
                                                    name="flag"
                                                    color="blue"
                                                    size="20px"
                                                    v-if="
                                                        props.row.type ==
                                                        'success'
                                                    "
                                                ></q-icon>
                                                <q-icon
                                                    name="fireplace"
                                                    color="blue"
                                                    size="20px"
                                                    v-if="
                                                        props.row.type ==
                                                        'warning'
                                                    "
                                                ></q-icon>
                                                {{ props.row.stock }}
                                            </span>
                                            <q-chip
                                                class="float-right text-white text-capitalize"
                                                :label="props.row.type"
                                                color="positive"
                                                v-if="
                                                    props.row.type == 'success'
                                                "
                                            ></q-chip>
                                            <q-chip
                                                class="float-right text-white text-capitalize"
                                                :label="props.row.type"
                                                color="info"
                                                v-if="props.row.type == 'info'"
                                            ></q-chip>
                                            <q-chip
                                                class="float-right text-white text-capitalize"
                                                :label="props.row.type"
                                                color="warning"
                                                v-if="
                                                    props.row.type == 'warning'
                                                "
                                            ></q-chip>
                                            <q-chip
                                                class="float-right text-white text-capitalize"
                                                :label="props.row.type"
                                                color="negative"
                                                v-if="props.row.type == 'error'"
                                            ></q-chip>
                                        </q-item-label>
                                        <q-item-label caption class="">
                                            <q-linear-progress
                                                dark
                                                :color="
                                                    getColor(props.row.Progress)
                                                "
                                                :value="
                                                    props.row.Progress / 100
                                                "
                                            />
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-td>
                        </template>
                    </q-table>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>
<script setup>
const items = [
    {
        title: 'Поступления за месяц',
        icon: 'euro',
        value: '1 300 000 сом',
        color1: '#546bfa',
    },
    {
        title: 'Пациенты за неделю',
        icon: 'people',
        value: '35',
        color1: '#3a9688',
    },
    {
        title: 'Новые пациенты за неделю',
        icon: 'person',
        value: '5',
        color1: '#7cb342',
    },
    {
        title: 'Пользователи онлайн',
        icon: 'online_prediction',
        value: '10',
        color1: '#f88c2b',
    },
];

const sales_data = [
    {
        name: 'Авдиенко Игорь',
        Progress: 70,
        status: 'Отказался',
        stock: '14 / 30',
        date: '11.01.2023',
        avatar: 'https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4',
        product_name: 'Кабинет 1, Кресло 2',
        total: '3600с',
        code: 'ПРОЦЕДУРНЫЙ',
        prod_num: '1',
    },
    {
        name: 'Бердибеков Эсеналы',
        Progress: 60,
        status: 'Завершен',
        date: '03.12.2022',
        stock: '25 / 70',
        avatar: 'https://avatars2.githubusercontent.com/u/27857088?s=400&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4',
        product_name: 'Кабинет 2, Кресло 1',
        total: '5000с',
        code: 'ПРОЦЕДУРНЫЙ',
        prod_num: '2',
    },
    {
        name: 'Керимбек уулу Илгиз',
        Progress: 30,
        status: 'Прибыл',
        stock: '35 / 50',
        avatar: 'https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4',
        product_name: 'Кабинет 3, Кресло 3',
        total: '4000с',
        date: '13.01.2023',
        code: 'ПРОЦЕДУРНЫЙ',
        prod_num: '3',
    },
    {
        name: 'Пронин Евгений',
        Progress: 100,
        status: 'Получает',
        stock: '18 / 33',
        avatar: 'https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4',
        product_name: 'Кабинет 4, Кресло 1',
        total: '5000с',
        date: '13.01.2023',
        code: 'ПРОЦЕДУРНЫЙ',
        prod_num: '4',
    },
];

const sales_column = [
    {
        name: 'Products',
        label: 'Процедурный кабинет',
        field: 'Products',
        sortable: true,
        align: 'left',
    },
    {
        name: 'Name',
        label: 'Пациент',
        field: 'name',
        sortable: true,
        align: 'left',
    },
    {
        name: 'Total',
        label: 'Оплата',
        field: 'total',
        sortable: true,
        align: 'right',
        classes: 'text-bold',
    },
    {
        name: 'Status',
        label: 'Статус',
        field: 'status',
        sortable: true,
        align: 'left',
        classes: 'text-bold',
    },
    {
        name: 'Stock',
        label: 'Процент завершения',
        field: 'task',
        sortable: true,
        align: 'left',
    },
];

function getColor(val) {
    if (val > 70 && val <= 100) {
        return 'green';
    } else if (val > 50 && val <= 70) {
        return 'blue';
    }
    return 'red';
}
function getChipColor(status) {
    if (status == 'Отказался') {
        return 'negative';
    } else if (status == 'Завершен') {
        return 'positive';
    } else if (status == 'Прибыл') {
        return 'warning';
    } else if (status == 'Получает') {
        return 'info';
    } else {
        return 'dark';
    }
}
</script>
