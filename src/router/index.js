import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/private/HomeView.vue';
import SignIn from '../pages/public/SignIn.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import('../pages/private/Dashboard/Index.vue'),
            },
            {
                path: '/registration',
                name: 'registration',
                component: () => import('../pages/private/Registration/Index.vue'),
            },
            {
                path: '/registration_patient',
                name: 'registration_patient',
                component: () => import('../pages/private/Registration/Patient.vue'),
            },
            {
                path: '/patient',
                name: 'patient',
                redirect: '/patient/lists',
                children: [
                    {
                        path: 'lists',
                        name: 'patientList',
                        component: () => import('../pages/private/Patient/List.vue'),
                    },
                    {
                        path: 'detail/:id',
                        name: 'patientDetail',
                        component: () => import('../pages/private/Patient/Detail.vue'),
                    },
                ],
                component: () => import('../pages/private/Patient/Index.vue'),
            },
            {
                path: '/inventory',
                name: '/inventory',
                component: () => import('../pages/private/Inventory/Index.vue'),
                redirect: '/inventory/lists',
                children: [
                    {
                        path: 'lists',
                        name: 'inventoryList',
                        component: () => import('../pages/private/Inventory/List.vue'),
                    },
                    {
                        path: 'detail/:id',
                        name: 'patientDetail',
                        component: () => import('../pages/private/Inventory/Detail.vue'),
                    },
                ],
            },
            {
                path: '/cancellation',
                name: '/cancellation',
                component: () => import('../pages/private/Cancellation/Index.vue'),
                redirect: '/cancellation/lists',
                children: [
                    {
                        path: 'lists',
                        name: 'cancellationList',
                        component: () => import('../pages/private/Cancellation/List.vue'),
                    },
                    {
                        path: 'detail/:id',
                        name: 'cancellationDetail',
                        component: () => import('../pages/private/Cancellation/Detail.vue'),
                    },
                ],
            },
            {
                path: '/receipt',
                name: '/receipt',
                component: () => import('../pages/private/Receipt/Index.vue'),
                redirect: '/receipt/lists',
                children: [
                    {
                        path: 'lists',
                        name: 'receiptList',
                        component: () => import('../pages/private/Receipt/List.vue'),
                    },
                    {
                        path: 'detail/:id',
                        name: 'receiptDetail',
                        component: () => import('../pages/private/Receipt/Detail.vue'),
                    },
                ],
            },
            {
                path: '/contractor',
                name: '/contractor',
                component: () => import('../pages/private/Contractor/Index.vue'),
                redirect: '/contractor/lists',
                children: [
                    {
                        path: 'lists',
                        name: 'contractorList',
                        component: () => import('../pages/private/Contractor/List.vue'),
                    },
                    {
                        path: 'detail/:id',
                        name: 'contractorDetail',
                        component: () => import('../pages/private/Contractor/Detail.vue'),
                    },
                ],
            },
            {
                path: '/product',
                name: '/product',
                component: () => import('../pages/private/Product/Index.vue'),
                redirect: '/product/lists',
                children: [
                    {
                        path: 'lists',
                        name: 'productList',
                        component: () => import('../pages/private/Product/List.vue'),
                    },
                    {
                        path: 'detail/:id',
                        name: 'productDetail',
                        component: () => import('../pages/private/Product/Detail.vue'),
                    },
                ],
            },
            // {
            //     path: '/accountant/salary',
            //     name: '/accountant/salary',
            //     component: () => import('../pages/private/Accounts/accountant/AccountantView.vue'),
            // },
            // {
            //     path: '/accountant/report',
            //     name: '/accountant/report',
            //     component: () => import('../pages/private/Accounts/accountant/ReportView.vue'),
            // },
            // {
            //     path: '/store/index',
            //     name: '/store/index',
            //     component: () => import('../pages/private/Unused/store/IndexView.vue'),
            // },
            // {
            //     path: '/store/purchases',
            //     name: '/store/purchases',
            //     component: () => import('../pages/private/Unused/store/PurchasesView.vue'),
            // },
            // {
            //     path: '/store/sales',
            //     name: '/store/sales',
            //     component: () => import('../pages/private/Unused/store/SalesView.vue'),
            // },
            // {
            //     path: '/store/product',
            //     name: '/store/product',
            //     component: () => import('../pages/private/Unused/store/ProductView.vue'),
            // },
            // {
            //     path: '/store/partner',
            //     name: '/store/partner',
            //     component: () => import('../pages/private/Unused/store/PartnerView.vue'),
            // },
            // {
            //     path: '/accounts',
            //     name: 'accounts',
            //     component: () => import('../pages/private/Accounts/Index.vue'),
            // },
        ],
    },
    {
        path: '/login',
        name: 'signin',
        component: SignIn,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../pages/public/404PageView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const publicPages = ['/login', '/404'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});
export default router;
