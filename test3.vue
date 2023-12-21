<style scoped>
  .base-input {
    /* Общие стили для всех input элементов */
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;

    /* Стили для type="password" и type="email" */
    &[type="password"],
    &[type="email"] {
      /* Удаление вебкит-специфичных стилей для password и email типов */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button,
      &::-webkit-clear-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Фикс для Firefox */
      &::-moz-placeholder {
        opacity: 1; /* Убедитесь, что placeholder виден */
      }

      /* Стили для IE */
      &::-ms-clear,
      &::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
      }
    }

    /* Существующие стили для type="search" */
    /* ... */
  }
</style>

