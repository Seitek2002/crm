<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn
            :label="buttonText"
            color="primary"
            @click="store.dispatch('dialog/openPopup')"
        />

        <q-dialog
            v-model="store.state.dialog.modal"
            persistent
            transition-show="scale"
            transition-hide="scale"
        >
            <q-card
                class="teal text-dark"
                style="width: 700px; max-width: 80vw"
            >
                <q-card-section>
                    <div class="text-h6">
                        <slot name="dialogLabel"></slot>
                    </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <slot name="fields"></slot>
                </q-card-section>

                <q-card-actions align="right" class="bg-grey-2 text-white">
                    <slot name="actionButtons"></slot>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const props = defineProps({
    buttonText: {
        type: String,
        required: true,
    },
});
</script>
