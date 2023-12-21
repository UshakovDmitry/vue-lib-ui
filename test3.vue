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

  const onChange = () => {
    emits('onChange', { value })
  }
</script>
<template>

<div class="input-container">
    <input
      :class="['alser-ui-library-input', classes]"
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
    <div v-if="icon" class="input-icon"></div>
  </div>

  <!-- <input
    class="alser-ui-library-input"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    autofocus
    :required="required"
    :minLength="minLength"
    :maxlength="maxLength"
    :disabled="disabled"
    :readonly="readonly"
    @input="onChange"
  /> -->
</template>

<style scoped>


  .input-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .alser-ui-library-input {
    flex-grow: 1;
    padding-right: 30px;
  }

  .input-icon {
    position: absolute;
    right: 10px; 
  }

  .alser-ui-library-input {
    --input-padding: 0.5rem 1rem;
    --input-border-width: 1px;
    --input-border-radius: var(--radius-small);
    --input-border-color: var(--dark-100);
    --input-padding: 0.5rem 1rem;
    --width: auto;
    --height: auto;

    --outline-color: 0, 0, 0;
    --outline-primary-color: 0, 255, 0;

    padding: var(--input-padding);
    color: var(--input-color);
    cursor: text;
    transition: all 0.2s ease-in-out;
    font-size: inherit;
    width: 100%;
    border-radius: var(--input-border-radius);
  }

  .alser-ui-library-input.outlined {
    border: none;
    outline: none;
  }

  .alser-ui-library-input.outlined:disabled {
    border: var(--input-border-width) solid var(--disabled-element);
    border-radius: var(--input-border-radius);
    background-color: var(--disabled-element);
    outline: none;
    cursor: not-allowed;
  }

  /* ------  Simple --------- */
  .alser-ui-library-input.outlined.simple {
    border: var(--input-border-width) solid var(--input-border-color);
    background-color: var(--input-background-color);
    outline: none;
  }
  .alser-ui-library-input.outlined.simple:focus,
  .alser-ui-library-input.outlined.simple inpt:active {
    box-shadow: 0 0 0 0.05em var(--disabled-content);
  }

  /* ------  White --------- */
  .alser-ui-library-input.outlined.white {
    border: var(--input-border-width) solid var(--white);
  }
  .alser-ui-library-input.outlined.white:focus,
  .alser-ui-library-input.outlined.white:active {
    box-shadow: 0 0 0 0.05em var(--white);
  }

  /* ------  Dark --------- */
  .alser-ui-library-input.outlined.dark {
    border: var(--input-border-width) solid var(--dark);
  }
  .alser-ui-library-input.outlined.dark:focus,
  .alser-ui-library-input.outlined.dark:active {
    box-shadow: 0 0 0 0.05em var(--dark);
  }






  .alser-ui-library-input {
    --input-padding: 0.5rem 1rem;
    --input-border-width: 1px;
    --input-border-radius: var(--radius-small);
    --input-border-color: var(--dark-100);
    --input-padding: 0.5rem 1rem;
    --width: auto;
    --height: auto;

    --outline-color: 0, 0, 0;
    --outline-primary-color: 0, 255, 0;

    padding: var(--input-padding);
    color: var(--input-color);
    cursor: text;
    transition: all 0.2s ease-in-out;
    font-size: inherit;
    width: 100%;
    border-radius: var(--input-border-radius);
  }

  .alser-ui-library-input.outlined {
    border: none;
    outline: none;
  }

  .alser-ui-library-input.outlined:disabled {
    border: var(--input-border-width) solid var(--disabled-element);
    border-radius: var(--input-border-radius);
    background-color: var(--disabled-element);
    outline: none;
    cursor: not-allowed;
  }

  /* ------  Simple --------- */
  .alser-ui-library-input.outlined.simple {
    border: var(--input-border-width) solid var(--input-border-color);
    background-color: var(--input-background-color);
    outline: none;
  }
  .alser-ui-library-input.outlined.simple:focus,
  .alser-ui-library-input.outlined.simple inpt:active {
    box-shadow: 0 0 0 0.05em var(--disabled-content);
  }

  /* ------  White --------- */
  .alser-ui-library-input.outlined.white {
    border: var(--input-border-width) solid var(--white);
  }
  .alser-ui-library-input.outlined.white:focus,
  .alser-ui-library-input.outlined.white:active {
    box-shadow: 0 0 0 0.05em var(--white);
  }

  /* ------  Dark --------- */
  .alser-ui-library-input.outlined.dark {
    border: var(--input-border-width) solid var(--dark);
  }
  .alser-ui-library-input.outlined.dark:focus,
  .alser-ui-library-input.outlined.dark:active {
    box-shadow: 0 0 0 0.05em var(--dark);
  }

  /* ------  Gray --------- */
  .alser-ui-library-input.outlined.gray {
    border: var(--input-border-width) solid var(--gray);
  }
  .alser-ui-library-input.outlined.gray:focus,
  .alser-ui-library-input.outlined.gray:active {
    box-shadow: 0 0 0 0.05em var(--gray);
  }

  /* ------  Gray-blue --------- */
  .alser-ui-library-input.outlined.gray-blue {
    border: var(--input-border-width) solid var(--gray-blue);
  }
  .alser-ui-library-input.outlined.gray-blue:focus,
  .alser-ui-library-input.outlined.gray-blue:active {
    box-shadow: 0 0 0 0.05em var(--gray-blue);
  }

  /* ------  Primary --------- */
  .alser-ui-library-input.outlined.primary-brand {
    border: var(--input-border-width) solid var(--primary-main);
  }
  .alser-ui-library-input.outlined.primary-brand:focus,
  .alser-ui-library-input.outlined.primary-brand:active {
    box-shadow: 0 0 0 0.05em var(--primary-light);
  }

  /* ------  Blue --------- */
  .alser-ui-library-input.outlined.blue {
    border: var(--input-border-width) solid var(--blue);
  }
  .alser-ui-library-input.outlined.blue:focus,
  .alser-ui-library-input.outlined.blue:active {
    box-shadow: 0 0 0 0.05em var(--blue);
  }

  /* ------  Gray-brand --------- */
  .alser-ui-library-input.outlined.gray-brand {
    border: var(--input-border-width) solid var(--gray-brand);
  }
  .alser-ui-library-input.outlined.gray-brand:focus,
  .alser-ui-library-input.outlined.gray-brand:active {
    box-shadow: 0 0 0 0.05em var(--gray-brand);
  }

  /* ------  Warning --------- */
  .alser-ui-library-input.outlined.warning {
    border: var(--input-border-width) solid var(--warning-main);
  }
  .alser-ui-library-input.outlined.warning:focus,
  .alser-ui-library-input.outlined.warning:active {
    box-shadow: 0 0 0 0.05em var(--warning-middle);
  }

  /* ------  Success --------- */
  .alser-ui-library-input.outlined.success {
    border: var(--input-border-width) solid var(--success-main);
  }
  .alser-ui-library-input.outlined.success:focus,
  .alser-ui-library-input.outlined.success:active {
    box-shadow: 0 0 0 0.05em var(--success-middle);
  }

  /* ------  Pink --------- */
  .alser-ui-library-input.outlined.pink {
    border: var(--input-border-width) solid var(--pink);
  }
  .alser-ui-library-input.outlined.pink:focus,
  .alser-ui-library-input.outlined.pink:active {
    box-shadow: 0 0 0 0.05em var(--pink);
  }

  /* ---------- purple ------------ */
  .alser-ui-library-input.outlined.purple {
    border: var(--input-border-width) solid var(--purple);
  }
  .alser-ui-library-input.outlined.purple:focus,
  .alser-ui-library-input.outlined.purple:active {
    box-shadow: 0 0 0 0.05em var(--purple);
  }

  /* ------  Violet --------- */
  .alser-ui-library-input.outlined.violet {
    border: var(--input-border-width) solid var(--violet);
  }
  .alser-ui-library-input.outlined.violet:focus,
  .alser-ui-library-input.outlined.violet:active {
    box-shadow: 0 0 0 0.05em var(--violet);
  }

  /* ------  Indigo --------- */
  .alser-ui-library-input.outlined.indigo {
    border: var(--input-border-width) solid var(--indigo);
  }
  .alser-ui-library-input.outlined.indigo:focus,
  .alser-ui-library-input.outlined.indigo:active {
    box-shadow: 0 0 0 0.05em var(--indigo);
  }

  /* ------  Cyan --------- */
  .alser-ui-library-input.outlined.cyan {
    border: var(--input-border-width) solid var(--cyan);
  }
  .alser-ui-library-input.outlined.cyan:focus,
  .alser-ui-library-input.outlined.cyan:active {
    box-shadow: 0 0 0 0.05em var(--cyan);
  }

  /* ------  Secondary-brand --------- */
  .alser-ui-library-input.outlined.secondary-brand {
    border: var(--input-border-width) solid var(--secondary-brand);
  }
  .alser-ui-library-input.outlined.secondary-brand:focus,
  .alser-ui-library-input.outlined.secondary-brand:active {
    box-shadow: 0 0 0 0.05em var(--secondary-brand);
  }

  /* ------  Mint --------- */
  .alser-ui-library-input.outlined.mint {
    border: var(--input-border-width) solid var(--mint);
  }
  .alser-ui-library-input.outlined.mint:focus,
  .alser-ui-library-input.outlined.mint:active {
    box-shadow: 0 0 0 0.05em var(--mint);
  }

  /* ------  Amber --------- */
  .alser-ui-library-input.outlined.amber {
    border: var(--input-border-width) solid var(--amber);
  }
  .alser-ui-library-input.outlined.amber:focus,
  .alser-ui-library-input.outlined.amber:active {
    box-shadow: 0 0 0 0.05em var(--amber);
  }

  /* ------  Error --------- */
  .alser-ui-library-input.outlined.error {
    border: var(--input-border-width) solid var(--error-main);
  }
  .alser-ui-library-input.outlined.error:focus,
  .alser-ui-library-input.outlined.error:active {
    box-shadow: 0 0 0 0.05em var(--error-middle);
  }

  .alser-ui-library-input.outlined.simple:disabled,
  .alser-ui-library-input.outlined.primary:disabled,
  .alser-ui-library-input.outlined.info:disabled,
  .alser-ui-library-input.outlined.warning:disabled,
  .alser-ui-library-input.outlined.error:disabled,
  .alser-ui-library-input.outlined.success:disabled,
  .alser-ui-library-input.outlined.pink:disabled,
  .alser-ui-library-input.outlined.purple:disabled,
  .alser-ui-library-input.outlined.violet:disabled,
  .alser-ui-library-input.outlined.indigo:disabled,
  .alser-ui-library-input.outlined.blue:disabled,
  .alser-ui-library-input.outlined.cyan:disabled,
  .alser-ui-library-input.outlined.secondary-brand:disabled,
  .alser-ui-library-input.outlined.mint:disabled,
  .alser-ui-library-input.outlined.amber:disabled,
  .alser-ui-library-input.outlined.gray:disabled,
  .alser-ui-library-input.outlined.dark:disabled,
  .alser-ui-library-input.outlined.gray-blue:disabled,
  .alser-ui-library-input.outlined.gray-brand:disabled,
  .alser-ui-library-input.outlined.white:disabled {
    border: var(--input-border-width) solid var(--disabled-element);
    background-color: var(--disabled-element);
    outline: none;
    cursor: not-allowed;
  }
</style>


