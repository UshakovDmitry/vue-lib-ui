<template>
  <div class="alser-ui-library-field">
    <!-- ... ваш код ... -->

    <div class="input-wrapper" :class="{ 'input-wrapper_error': errorText, 'input-wrapper_disabled': disabled }">
      <BaseInput
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :minLength="minLength"
        :maxLength="maxLength"
        :disabled="disabled"
        :readonly="readonly"
        :icon="icon"
        @onChange="onChange"
      ></BaseInput>
      
      <!-- Иконка крестика, отображается, когда в inputValue есть текст -->
      <IconComponent v-if="inputValue" class="clear-icon" @click="clearInput" />
    </div>

    <!-- ... ваш код ... -->
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import BaseInput from '@/components/BaseInput.vue'
  import IconComponent from '@/components/Icon.vue'

  // Определение пропсов ...
  
  const emits = defineEmits(['onChange'])
  const inputValue = ref('') // Реактивное свойство для значения инпута

  // Обработчик события изменения
  const onChange = (event) => {
    emits('onChange', event)
  }

  // Функция для очистки инпута
  const clearInput = () => {
    inputValue.value = ''
  }
</script>

<!-- Добавьте стили для .clear-icon по вашему усмотрению -->
