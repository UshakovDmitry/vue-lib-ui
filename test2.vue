<template>
  <div class="alser-ui-library-field">
    <label v-if="label" class="label">
      <p class="lable__text">
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

    </div>
    <span class="error-text">{{ errorText }}</span>
  </div>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue'
  import SearchIcon from '@/docs/IconCollection/SearchIcon.vue'
  import PersonOutline from '@/docs/IconCollection/PersonOutline.vue'
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
  })

  const emits = defineEmits(['onChange'])
</script>

BaseInput это и есть мой input
