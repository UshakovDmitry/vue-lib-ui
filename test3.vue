<script setup lang="ts">
  import { ref, defineSlots } from 'vue'
  defineProps({
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    minLength: {
      type: Number,
      required: false,
    },
    maxLength: {
      type: Number,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    classes: {
      type: String,
      required: false,
      default: '',
    },
  })

  const emits = defineEmits(['onChange'])

  const value = ref('')

  const onChange = () => {
    emits('onChange', { value })
  }
</script>
<template>
  <input
    class="base-input"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :minLength="minLength"
    :maxlength="maxLength"
    :disabled="disabled"
    :readonly="readonly"
    @input="onChange"
  />
</template>

<style scoped>
  .base-input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
    
/* Для type="search" */
  &::-webkit-search-cancel-button {
      -webkit-appearance: none; /* Убрать стандартный вид кнопки */
      appearance: none; /* Для всех браузеров поддерживающих стандарт */
      margin: 0; /* Удалить любые внешние отступы */
    }

    /* Удаление дополнительных элементов декорации в полях поиска в браузерах WebKit */
    &::-webkit-search-decoration,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none; /* Скрыть элементы */
    }

    /* Удаление кнопки очистки поля в Internet Explorer и Microsoft Edge */
    &::-ms-clear,
    &::-ms-reveal {
      display: none; /* Скрыть кнопку */
      width: 0; /* Обнулить ширину */
      height: 0; /* Обнулить высоту */
    }

    /* Удаление стандартной обводки при фокусе (для всех браузеров) */
    &:focus {
      outline: none; /* Убрать стандартную обводку при фокусе */
    }
  }
</style>
