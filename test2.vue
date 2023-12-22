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
