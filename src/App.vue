<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <RouterView />
        </q-page-container>
    </q-layout>
</template>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 
.q-field.row.no-wrap.items-start.q-field--filled.q-select.q-field--auto-height.q-select--without-input.q-select--without-chips,.q-select--single.q-field--labeled.label { 
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  background: white ; 
  font-family: "Montserrat";
}
.q-field__control.relative-position.row.no-wrap {
  background: white;
}
.q-item__section--main ~ .q-item__section--side {
    display: none;
}
</style>