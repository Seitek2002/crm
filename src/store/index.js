import { createStore } from 'vuex';

// import patient from '../store/modules/patient';
// import purchase from '../store/modules/purchase';
// import department from '../store/modules/department';
import { auth } from '../store/modules/auth';
import { contractors } from '../store/modules/contractors';
import { products } from '../store/modules/product';
import { dialog } from './modules/dialog';
import { receipt } from './modules/receipt';
import { cancellation } from './modules/cancellation';
import { inventory } from './modules/inventory';
const store = createStore({
    modules: {
        // patient,
        // purchase,
        // department,
        products,
        receipt,
        cancellation,
        inventory,
        auth,
        contractors,
        dialog,
    },
});

export default store;
