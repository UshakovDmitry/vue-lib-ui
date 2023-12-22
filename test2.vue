у меня есть вот такой файлик с компонентом baseInput.vue
<script setup lang="ts">
  import { ref } from 'vue'
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

  const onChange = (): void => {
    emits('onChange', value)
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
    autocomplete="off"
    @input="onChange"
  />
</template>

<style scoped>
  /* TODO Некоторые браузеры могут игнорировать autocomplete="off" из соображений удобства пользователя или безопасности. */
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

    /* Стили для type="password" и type="email" */
    &[type='password'],
    &[type='email'] {
      /* Удаление вебкит-специфичных стилей для password и email типов */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button,
      &::-webkit-clear-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Фикс для Firefox */
      &::-moz-placeholder {
        opacity: 1; /* Убедитесь, что placeholder виден */
      }

      /* Стили для IE */
      &::-ms-clear,
      &::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
      }
    }

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


Мне нужно реализовать для baseInput написание тестов и положить их в файл baseInput.tetst.ts 

вот пример написания других тестов 
используй его в качестве примера но опирайся на мой компонет 
добавь подробные комментарии в код чтобы я понимал что происходит и какой мсетод что делат
import BaseInput from '@/components/BaseInput.vue';
import { describe, expect, test, afterEach, beforeEach, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { nextTick } from 'vue';

describe('MainContainer', () => {
  let wrapper: VueWrapper<any>;
  let INPUT: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(BaseInput, { 
      props: {
        placeholder: false,
        required: false,
        minLength: false,
        maxLength: false,
        disabled: false,
        readonly: false,
      }
    });
    INPUT = wrapper.findComponent(BaseInput);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('Компонент существует', () => {
    expect(wrapper.exists()).toBe(true);
  }); 

  test('Компонент имеет событие onChange', () => {
    INPUT.trigger('input');
    expect(wrapper.emitted()).toHaveProperty('onChange');
  });

  test('Cобытие onChange не сработает при props.disabled = true', async () => {
    wrapper.setProps({ disabled: true });
    await nextTick();
    INPUT.trigger('input');
    expect(wrapper.emitted()).toEqual({});
  });
});
