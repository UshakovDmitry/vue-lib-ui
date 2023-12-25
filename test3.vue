<style scoped>
  .snippet-sourse {
    background-color: var(--gray-light);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    width: 50%;
  }

  .snippet-source-title {
    background-color: #1e1e1e; /* Тёмный фон, как в VS Code */
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
    background-color: #1e1e1e; /* Тёмный фон для кода */
    border-radius: 6px;
    border-top-left-radius: 0;
    color: #d4d4d4; /* Светлый текст */
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
    font-family: 'Consolas', 'Monaco', monospace; /* Шрифт, как в VS Code */
  }

  /* Стили для синтаксической подсветки */
  .language-html .tag { color: #569cd6; } /* Синий цвет для тегов */
  .language-html .attribute { color: #9cdcfe; } /* Светло-голубой для атрибутов */
  .language-html .string { color: #ce9178; } /* Оранжевый для строк */
  /* Добавьте больше стилей для других элементов кода */

  @media screen and (max-width: 1279px) {
    .snippet-sourse {
      width: 100%;
    }
  }
</style>

