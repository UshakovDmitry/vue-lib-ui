<script setup lang="ts">
import { computed } from 'vue';

defineProps({
  source: {
    type: String,
    default: 'HTML',
    required: false,
  },
});

const propsToHighlight = ['type', 'placeholder', 'required', 'minLength', 'maxLength', 'disabled', 'readonly', 'label', 'icon', 'errorText', 'hintText'];

const highlightedCode = computed(() => {
  let code = props.textFieldProps;
  propsToHighlight.forEach(prop => {
    const regex = new RegExp(`(${prop})`, 'g');
    code = code.replace(regex, '<span class="highlight-prop">$1</span>');
  });
  return code;
});
</script>



<template>
  <div class="snippet-sourse">
    <p class="snippet-source-title">{{ source }}</p>
    <figure class="hightlight">
      <pre>
        <code class="language-html" v-html="highlightedCode">
          <!-- Слот убран, так как мы используем v-html -->
        </code>
      </pre>
    </figure>
  </div>
</template>


<style scoped>
  /* ... предыдущие стили ... */

  .highlight-prop {
    color: #ff8c00; /* Оранжевый цвет для выделения */
    font-weight: bold; /* Делаем текст жирным */
  }

  /* ... остальные стили ... */
</style>
