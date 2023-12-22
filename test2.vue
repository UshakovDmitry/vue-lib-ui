  .input-wrapper_error {
    border-radius: var(--radius-2xl, 16px) !important;
    border: 1px solid var(--colors-border-error, #f3b0a2) !important;
    background: var(--colors-bg-primary, #fff) !important;
    box-shadow: 0px 1px 2px 0px rgba(16, 40, 33, 0.05) !important;
  }
  .input-wrapper_error:focus,
  .input-wrapper_error:hover,
  .input-wrapper_error:active {
    border-radius: var(--radius-2xl, 16px) !important;
    border: 1px solid var(--colors-border-secondary, #d8dcd8) !important;
    background: var(--colors-palette-basic-white, #fff) !important;
    box-shadow: 0px 0px 0px 4px rgba(229, 77, 46, 0.24) !important;
  }

  тут я применяю стили для инпута при hover focus и active
но работает корректно только hover 

почему?
