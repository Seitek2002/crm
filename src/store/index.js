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
import { country } from './modules/country';
import { group } from './modules/group';
import { supplier } from './modules/supplier';
import { weight } from './modules/weight';
import { barcode_name } from './modules/barcode_name';
import { accounting } from './modules/accounting';
import { barcode } from './modules/barcode';
import { calculation } from './modules/calculation';
import { division } from './modules/division';

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
        country,
        group,
        supplier,
        weight,
        barcode_name,
        accounting,
        barcode,
        calculation,
        division
    },
});

export default store;
