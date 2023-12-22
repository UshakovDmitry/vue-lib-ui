<script setup lang="ts">
  import { ref } from 'vue'
  import BaseInput from '@/components/BaseInput.vue'
  import IconComponent from '@/components/Icon.vue' // Импорт иконки крестика

  // Определение пропсов ...

  const inputValue = ref('') // Хранение значения инпута

  // Метод для очистки инпута
  const clearInput = () => {
    inputValue.value = ''
  }
</script>

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
        @onChange="emits('onChange', $event)"
      ></BaseInput>
      
      <!-- Иконка крестика, отображается, если в inputValue есть текст -->
      <IconComponent v-if="inputValue" class="clear-icon" @click="clearInput" />
    </div>

    <!-- ... ваш код ... -->
  </div>
</template>




<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'

  defineProps({
    // ... определение пропсов ...
  })

  const emits = defineEmits(['onChange'])
  const value = ref('') // Используется для v-model

  // Функция onChange для эмита события с текущим значением
  const onChange = () => {
    emits('onChange', value.value)
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
