<template>
  <div class="text-field">
    <div class="text-field__icon">
      <input class="text-field__input" :placeholder="placeholder" :v-model="model" />
      <span class="text-field__aicon"></span>
    </div>
  </div>
</template>

<script setup>
defineProps(['placeholder', 'model'])
</script>

<style>
.text-field {
  margin-bottom: 1rem;
  width: 49%;
  font-family: "Montserrat";
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 1.575rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.text-field__input[type='search']::-webkit-search-decoration,
.text-field__input[type='search']::-webkit-search-cancel-button,
.text-field__input[type='search']::-webkit-search-results-button,
.text-field__input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

/* active icon - 1 вариант */
.text-field__icon {
  position: relative;
}

.text-field__icon .text-field__input {
  padding-right: 2.5rem;
}

.text-field__aicon {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0.875rem;
  width: 1rem;
  cursor: pointer;
  color: #bdbdbd;
  transition: color 0.15s ease-in-out;
}

.text-field__aicon:hover {
  color: #212529;
}

/* active icon - 2 вариант */
.text-field__aicon-2 {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2.5rem;
  border: 1px solid #bdbdbd;
  background-color: #f5f5f5;
  cursor: pointer;
  color: #212529;
  transition: background-color 0.15s ease-in-out;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.text-field__aicon-2:hover {
  background-color: #e0e0e0;
}
</style>
