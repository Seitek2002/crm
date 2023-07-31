<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <RouterView />
        </q-page-container>
    </q-layout>
</template>

<style lang="scss" >
.q-field.row.no-wrap.items-start.q-field--filled.q-select.q-field--auto-height.q-select--without-input.q-select--without-chips,.q-select--single.q-field--labeled.label { 
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  background: white ;
}
.q-field__control.relative-position.row.no-wrap {
  background: white;
}
</style>