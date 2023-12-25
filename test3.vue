<template>
  <div class="snippet-sourse">
    <p class="snippet-source-title">{{ source }}</p>
    <figure class="hightlight">
      <pre>
        <code class="language-html" >
          <slot ></slot>
        </code>
      </pre>
    </figure>
  </div>
</template>

<script setup lang="ts">

  defineProps({
    source: {
      type: String,
      default: 'HTML',
      required: false,
    },
  })
</script>

<style scoped>
  .snippet-sourse {
    background-color: var(--gray-light);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    width: 50%;
  }

  .snippet-source-title {
    background-color: var(--dark);
    color: var(--secondary-brand);
    padding: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    width: 70px;
    justify-content: center;
  }

  .hightlight {
    font-size: 1em;
    background-color: var(--dark);
    border-radius: 6px;
    border-top-left-radius: 0;
    color: var(--white);
    width: 100%;
  }

  .highlight pre {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    line-height: 1.375;
    margin: 0 !important;
    padding: 1.25em 1.5em;
    white-space: pre;
    word-break: break-word;
    font-family: monospace;
  }

  @media screen and (max-width: 1279px) {
    .snippet-sourse {
      width: 100%;
    }
  }
</style>
