  ❯ SearchField (10)
     ✓ Компонент существует
     ✓ Компонент отображает правильные пропсы
     ✓ Компонент правильно обрабатывает ввод данных
     ✓ Компонент генерирует событие onChange при изменении данных
     ✓ Компонент правильно обрабатывает состояние disabled
     ✓ Компонент правильно обрабатывает состояние readonly
     × Компонент правильно отображает ошибку
     × Компонент правильно отображает подсказку
     ✓ Компонент правильно отображает лейбл
     × Компонент правильно отображает значение



 FAIL  src/components/SearchField.test.ts > SearchField > Компонент правильно отображает ошибку
Error: Cannot call text on an empty DOMWrapper.
 ❯ Object.get node_modules/@vue/test-utils/dist/vue-test-utils.esm-bundler.mjs:1525:27
 ❯ src/components/SearchField.test.ts:67:22
     65|         await wrapper.setProps({ errorText: 'Error' })
     66|         const error = wrapper.find('.error')
     67|         expect(error.text()).toBe('Error')
       |                      ^
     68|     })
     69| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/4]⎯
 FAIL  src/components/SearchField.test.ts > SearchField > Компонент правильно отображает подсказку
Error: Cannot call text on an empty DOMWrapper.
 ❯ Object.get node_modules/@vue/test-utils/dist/vue-test-utils.esm-bundler.mjs:1525:27
 ❯ src/components/SearchField.test.ts:73:21
     71|         await wrapper.setProps({ hintText: 'Hint' })
     72|         const hint = wrapper.find('.hint')
     73|         expect(hint.text()).toBe('Hint')
       |                     ^
     74|     })
     75| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/4]⎯
 FAIL  src/components/SearchField.test.ts > SearchField > Компонент правильно отображает значение
AssertionError: expected null to be 'Value' // Object.is equality

- Expected:
"Value"

+ Received:
null

 ❯ src/components/SearchField.test.ts:85:53
     83|         await wrapper.setProps({ value: 'Value' })
     84|         const input = wrapper.find('input[type="search"]')
     85|         expect(input.element.getAttribute('value')).toBe('Value')
       |                                                     ^
     86|     })
     87| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/4]⎯
 Test Files  2 failed | 21 passed (23)
      Tests  3 failed | 75 passed (78)
   Start at  15:31:33
   Duration  2.31s (transform 531ms, setup 2ms, collect 2.50s, tests 898ms, environment 4.17s, prepare 1.90s)


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit

<template>
    <div class="alser-ui-library-field">
      <label v-if="label" class="label">
        <p
          class="lable__text"
          :class="{
            lable__text_required: disabled,
          }"
        >
          {{ label }}
        </p>
        <p v-if="required" class="label__mark">*</p>
      </label>
  
      <div
        class="input-wrapper"
        :class="{
          'input-wrapper_error': errorText,
          'input-wrapper_disabled': disabled,
        }"
      >

        <BaseInput
          :type="'search'"
          :placeholder="placeholder"
          :required="required"
          :minLength="minLength"
          :maxLength="maxLength"
          :disabled="disabled"
          :readonly="readonly"
          @onChange="emits('onChange', $event)"
        ></BaseInput>
        <icon-component
        v-if="isIcon"
          :width="24"
          :height="24"
          :color="'gray-blue'"
          :view-box="'0 0 24 24'"
        >
          <SearchIcon></SearchIcon>
        </icon-component>
      </div>
      <span :class="errorText ? 'error-text' : 'hidden-span'">{{
        errorText
      }}</span>
      <span :class="hintText ? 'hint-text' : 'hidden-span'">{{ hintText }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    import BaseInput from '@/components/BaseInput.vue'
        import SearchIcon from '@/docs/IconCollection/SearchIcon.vue'
    import IconComponent from '@/components/Icon.vue'
  
  
    defineProps({
      placeholder: {
        type: String,
        required: false,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
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
      errorText: {
        type: String,
        required: false,
        default: '',
      },
      hintText: {
        type: String,
        required: false,
        default: '',
      },
      isIcon : {
        type: Boolean,
        required: false,
        default: true,
      },
    })
  
    const emits = defineEmits(['onChange'])
  
  
  </script>
  
  <style scoped>
    .label {
      display: flex;
      flex-direction: row;
      gap: 2px;
    }
  
    .lable__text {
      margin: 0;
      padding: 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.25px;
    }
    .lable__text_required {
      color: var(--colors-text-disabled, #c3c8c2);
    }
    .label__mark {
      margin: 0;
      padding: 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: var(--secondary-brand);
      font-size: 1.2rem;
    }
  
    .hidden-span {
      display: none;
    }
    .alser-ui-library-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      height: 100%;
    }
  
    .input-wrapper {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      padding: var(--spacing-md, 8px) var(--spacing-lg, 12px);
      border-radius: 16px;
      gap: 0.5rem;
      border: 1px solid var(--Tertiary-LightMode-Border, rgba(35, 54, 45, 0.12));
      background: #fff;
    }
  
    .input-wrapper:not(:has(input:disabled)):hover {
      border-radius: var(--radius-2xl, 16px);
      border: 1px solid var(--border-secondary, #d8dcd8);
      background: var(--colors-palette-basic-white, #fff);
      box-shadow: 0px 0px 0px 4px rgba(70, 167, 88, 0.24);
    }
  
    /* Стили для состояния focus */
    .input-wrapper:focus-within {
      border-radius: var(--radius-2xl, 16px);
      border: 1px solid var(--border-secondary, #d8dcd8);
      background: var(--colors-palette-basic-white, #fff);
      /* focus-rings/ring-brand */
      box-shadow: 0px 0px 0px 4px rgba(70, 167, 88, 0.24);
    }
  
    /* Стили для состояния active */
    .input-wrapper:not(:has(input:disabled)):active {
      border-radius: var(--radius-2xl, 16px);
      border: 1px solid var(--border-secondary, #d8dcd8);
      background: var(--colors-palette-basic-white, #fff);
      /* focus-rings/ring-brand */
      box-shadow: 0px 0px 0px 4px rgba(70, 167, 88, 0.24);
    }
  
    .alser-ui-library-field.secondary-brand > .input-wrapper {
      border: 1px solid var(--secondary-brand);
    }
  
    .error-text {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 124%;
      letter-spacing: 0.4px;
      color: var(--error);
    }
  
    .hint-text {
      color: var(--colors-text-warning-primary, #ffa01c);
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 15.6px */
      letter-spacing: 0.4px;
    }
  
    .label__mark_error {
      color: var(--error);
    }
  
    /* TODO  сделать через скоуп */
    .input-wrapper_error {
      border-radius: var(--radius-2xl, 16px) !important;
      border: 1px solid var(--colors-border-error, #f3b0a2) !important;
      background: var(--colors-bg-primary, #fff) !important;
      box-shadow: 0px 1px 2px 0px rgba(16, 40, 33, 0.05) !important;
    }
  
    .input-wrapper_error:hover {
      border-radius: var(--radius-2xl, 16px) !important;
      border: 1px solid var(--colors-border-secondary, #d8dcd8) !important;
      background: var(--colors-palette-basic-white, #fff) !important;
      box-shadow: 0px 0px 0px 4px rgba(229, 77, 46, 0.24) !important;
    }
  
    /* Стили для состояния focus */
    .input-wrapper_error:focus-within {
      border-radius: var(--radius-2xl, 16px) !important;
      border: 1px solid var(--colors-border-secondary, #d8dcd8) !important;
      background: var(--colors-palette-basic-white, #fff) !important;
      box-shadow: 0px 0px 0px 4px rgba(229, 77, 46, 0.24) !important;
    }
  
    /* Стили для состояния active */
    .input-wrapper_error:active {
      border-radius: var(--radius-2xl, 16px) !important;
      border: 1px solid var(--colors-border-secondary, #d8dcd8) !important;
      background: var(--colors-palette-basic-white, #fff) !important;
      box-shadow: 0px 0px 0px 4px rgba(229, 77, 46, 0.24) !important;
    }
    .input-wrapper_disabled {
      border: 1px solid var(--disabled-element) !important;
      background: var(--colors-bg-disabled, #f1f3f5) !important;
      border: 1px solid var(--colors-border-disabled, #e0e4e0) !important;
      outline: none;
      cursor: not-allowed;
    }
  </style>
  
