<style scoped>
  .base-input {
    /* Ваши основные стили для input */
    /* ... */

    /* Удаление дефолтного крестика очистки в Chrome, Safari и других браузерах на основе WebKit */
    &::-webkit-search-cancel-button {
      -webkit-appearance: none; /* Убрать стандартный вид кнопки */
      appearance: none; /* Для всех браузеров поддерживающих стандарт */
      margin: 0; /* Удалить любые внешние отступы */
    }

    /* Удаление дополнительных элементов декорации в полях поиска в браузерах WebKit */
    &::-webkit-search-decoration,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none; /* Скрыть элементы */
    }

    /* Удаление кнопки очистки поля в Internet Explorer и Microsoft Edge */
    &::-ms-clear,
    &::-ms-reveal {
      display: none; /* Скрыть кнопку */
      width: 0; /* Обнулить ширину */
      height: 0; /* Обнулить высоту */
    }

    /* Удаление стандартной обводки при фокусе (для всех браузеров) */
    &:focus {
      outline: none; /* Убрать стандартную обводку при фокусе */
    }
  }
</style>

