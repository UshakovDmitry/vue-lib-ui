<script setup lang="ts">
  import { ref } from 'vue'
  defineProps({
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
    lable: {
      type: String,
      required: false,
    },
  })
  const emits = defineEmits(['onChange'])

  const value = ref('')

  const onChange = () => {
    emits('onChange', { value })
  }
</script>
<template>

// если добавляю этот label то стиль не применяется к инпуту
  <label class="alser-ui-library-label" v-if="lable">{{ lable }}</label>
  <input
    class="alser-ui-library-input"
    v-model="value"
    type="text"
    :placeholder="placeholder"
    autofocus
    :required="required"
    :minLength="minLength"
    :maxlength="maxLength"
    :disabled="disabled"
    :readonly="readonly"
    @input="onChange"
  />

</template>

<style scoped>

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
