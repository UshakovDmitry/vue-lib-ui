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

      <slot name="iconPrefix" ></slot>
      <BaseInput
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :minLength="minLength"
        :maxLength="maxLength"
        :disabled="disabled"
        :readonly="readonly"
        :icon="icon"
        @onChange="emits('onChange', $event)"
      ></BaseInput>
        <slot name="iconSufix" ></slot>
    </div>
    <span :class="errorText ? 'error-text' : 'hidden-span'">{{
      errorText
    }}</span>
    <span :class="hintText ? 'hint-text' : 'hidden-span'">{{ hintText }}</span>
  </div>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue'


  defineSlots<{
  iconPrefix?: (props) => any
  iconSufix?: (props) => any
}>()

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
    icon: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
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

  /* .alser-ui-library-field.error > .input-wrapper {
    border: 1px solid var(--error-main);
  }
  .alser-ui-library-field.error > .input-wrapper:focus,
  .alser-ui-library-field.error > .input-wrapper:hover,
  .alser-ui-library-field.error > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--error-middle);
  } */
  /* 
  .alser-ui-library-field.success > .input-wrapper {
    border: 1px solid var(--success-main);
  }
  .alser-ui-library-field.success > .input-wrapper:focus,
  .alser-ui-library-field.success > .input-wrapper:hover,
  .alser-ui-library-field.success > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--success-middle);
  } */
  /* TODO  Дореализовать
  .alser-ui-library-field.disabled > .input-wrapper {
    border: 1px solid var(--disabled-element);
    border-radius: var(--input-border-radius);
    background-color: var(--disabled-element);
    outline: none;
    cursor: not-allowed;
  }

  .alser-ui-library-field.disabled > .input-wrapper:focus,
  .alser-ui-library-field.disabled > .input-wrapper:hover,
  .alser-ui-library-field.disabled > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--disabled-content);
  } */

  /* .alser-ui-library-field.disabled > .input-wrapper > input {
    border: none;
    outline: none;
  } */

  /* .alser-ui-library-field.white > .input-wrapper {
    border: 1px solid var(--white);
  }

  .alser-ui-library-field.white > .input-wrapper:focus,
  .alser-ui-library-field.white > .input-wrapper:hover,
  .alser-ui-library-field.white > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--white);
  } */

  /* .alser-ui-library-field.dark > .input-wrapper {
    border: 1px solid var(--dark);
  }

  .alser-ui-library-field.dark > .input-wrapper:focus,
  .alser-ui-library-field.dark > .input-wrapper:hover,
  .alser-ui-library-field.dark > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--dark);
  } */

  /* .alser-ui-library-field.gray > .input-wrapper {
    border: 1px solid var(--gray);
  }

  .alser-ui-library-field.gray > .input-wrapper:focus,
  .alser-ui-library-field.gray > .input-wrapper:hover,
  .alser-ui-library-field.gray > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--gray);
  } */

  /* .alser-ui-library-field.gray-blue > .input-wrapper {
    border: 1px solid var(--gray-blue);
  }

  .alser-ui-library-field.gray-blue > .input-wrapper:focus,
  .alser-ui-library-field.gray-blue > .input-wrapper:hover,
  .alser-ui-library-field.gray-blue > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--gray-blue);
  } */
  /* 
  .alser-ui-library-field.primary-brand > .input-wrapper {
    border: 1px solid var(--primary-main);
  }

  .alser-ui-library-field.primary-brand > .input-wrapper:focus,
  .alser-ui-library-field.primary-brand > .input-wrapper:hover,
  .alser-ui-library-field.primary-brand > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--primary-light);
  } */

  /* .alser-ui-library-field.blue > .input-wrapper {
    border: 1px solid var(--blue);
  }

  .alser-ui-library-field.blue > .input-wrapper:focus,
  .alser-ui-library-field.blue > .input-wrapper:hover,
  .alser-ui-library-field.blue > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--blue);
  } */

  /* .alser-ui-library-field.gray-brand > .input-wrapper {
    border: 1px solid var(--gray-brand);
  }

  .alser-ui-library-field.gray-brand > .input-wrapper:focus,
  .alser-ui-library-field.gray-brand > .input-wrapper:hover,
  .alser-ui-library-field.gray-brand > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--gray-brand);
  } */

  /* .alser-ui-library-field.warning > .input-wrapper {
    border: 1px solid var(--warning-main);
  }

  .alser-ui-library-field.warning > .input-wrapper:focus,
  .alser-ui-library-field.warning > .input-wrapper:hover,
  .alser-ui-library-field.warning > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--warning-middle);
  } */

  /* .alser-ui-library-field.success > .input-wrapper {
    border: 1px solid var(--success-main);
  }

  .alser-ui-library-field.success > .input-wrapper:focus,
  .alser-ui-library-field.success > .input-wrapper:hover,
  .alser-ui-library-field.success > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--success-middle);
  } */
  /* 
  .alser-ui-library-field.pink > .input-wrapper {
    border: 1px solid var(--pink);
  }

  .alser-ui-library-field.pink > .input-wrapper:focus,
  .alser-ui-library-field.pink > .input-wrapper:hover,
  .alser-ui-library-field.pink > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--pink);
  }

  .alser-ui-library-field.purple > .input-wrapper {
    border: 1px solid var(--purple);
  }

  .alser-ui-library-field.purple > .input-wrapper:focus,
  .alser-ui-library-field.purple > .input-wrapper:hover,
  .alser-ui-library-field.purple > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--purple);
  } */

  /* .alser-ui-library-field.violet > .input-wrapper {
    border: 1px solid var(--violet);
  }

  .alser-ui-library-field.violet > .input-wrapper:focus,
  .alser-ui-library-field.violet > .input-wrapper:hover,
  .alser-ui-library-field.violet > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--violet);
  } */

  /* .alser-ui-library-field.indigo > .input-wrapper {
    border: 1px solid var(--indigo);
  }

  .alser-ui-library-field.indigo > .input-wrapper:focus,
  .alser-ui-library-field.indigo > .input-wrapper:hover,
  .alser-ui-library-field.indigo > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--indigo);
  } */

  /* .alser-ui-library-field.cyan > .input-wrapper {
    border: 1px solid var(--cyan);
  }

  .alser-ui-library-field.cyan > .input-wrapper:focus,
  .alser-ui-library-field.cyan > .input-wrapper:hover,
  .alser-ui-library-field.cyan > .input-wrapper:active {
    cursor: text;

    box-shadow: 0 0 0 0.05em var(--cyan);
  } */

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

  /* Стили для состояния hover */
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

