import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import App from './App.vue';
import store from './store';

import Plugin from '@quasar/quasar-ui-qcalendar/dist/QCalendarDay.esm.js';
import '@quasar/quasar-ui-qcalendar/dist/QCalendarDay.min.css';

import langDe from 'quasar/lang/ru';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';
import 'animate.css';
import router from './router';

const app = createApp(App);

app.use(Quasar, {
    lang: langDe,
    plugins: { Notify },
});
app.use(store);
app.use(router);
app.use(Plugin);

app.mount('#app');
