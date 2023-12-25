import { mount, VueWrapper } from '@vue/test-utils'
import { describe, expect, test, afterEach, beforeEach, vi } from 'vitest'
import TelField from '@/components/TelField.vue'

describe('TelField', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(TelField, {
      props: {
        label: 'Phone',
        placeholder: 'Enter phone',
        errorText: '',
        hintText: 'Phone should be strong',
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test('Компонент существует', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('Компонент отображает правильные пропсы', () => {
    expect(wrapper.props('label')).toBe('Phone')
    expect(wrapper.props('placeholder')).toBe('Enter phone')
    expect(wrapper.props('errorText')).toBe('')
    expect(wrapper.props('hintText')).toBe('Phone should be strong')
  })
})


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
      <icon-component
        v-if="isIcon"
        :width="24"
        :height="24"
        :color="'gray-blue'"
        :view-box="'0 0 24 24'"
      >
        <CallIcon></CallIcon>
      </icon-component>
      <BaseInput
        :type="'tel'"
        :placeholder="placeholder"
        :required="required"
        :minLength="minLength"
        :maxLength="maxLength"
        :disabled="disabled"
        :readonly="readonly"
        @onChange="emits('onChange', $event)"
      ></BaseInput>

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
    import CallIcon from '@/docs/IconCollection/CallIcon.vue'
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
    isIcon: {
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
