<template>
  <!-- ... ваш текущий шаблон ... -->
  <icon-component
    :width="24"
    :height="24"
    :color="'gray-blue'"
    :view-box="'0 0 24 24'"
    @click="togglePasswordVisibility"
  >
    <VisibilityIcon></VisibilityIcon>
  </icon-component>
  <!-- ... остальная часть вашего шаблона ... -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
// ... остальной импорт ...

const isPasswordVisible = ref(false)

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

// ... остальная часть вашего скрипта ...
</script>

<style scoped>
  /* ... ваш стиль ... */
</style>



<BaseInput
  :type="isPasswordVisible ? 'text' : 'password'"
  <!-- ... остальные пропсы ... -->
></BaseInput>

  
