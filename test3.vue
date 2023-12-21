<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  // ... остальные пропсы ...
  icon: {
    type: String,
    required: false,
  }
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
      class="alser-ui-library-input"
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
    <span v-if="icon" class="input-icon" :class="icon"></span>
  </div>
</template>

<style scoped>
  .input-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .alser-ui-library-input {
    flex-grow: 1;
    padding-right: 30px; /* Предполагается наличие места для иконки */
    /* ... остальные стили ... */
  }

  .input-icon {
    position: absolute;
    right: 10px; /* Отступ иконки от правого края input */
    /* Вы можете добавить дополнительные стили для иконки здесь */
  }
</style>


