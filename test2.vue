// Импорт компонента BaseInput и инструментов тестирования
import BaseInput from '@/components/BaseInput.vue';
import { describe, expect, test, afterEach, beforeEach, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { nextTick } from 'vue';

// Описание тестов для компонента BaseInput
describe('BaseInput', () => {
  let wrapper: VueWrapper<any>;
  let BaseInputElement: VueWrapper<any>;

  // Перед каждым тестом монтируем компонент и находим элемент input
  beforeEach(() => {
    wrapper = mount(BaseInput, {
      props: {
        placeholder: 'Введите текст',
        required: true,
        minLength: 5,
        maxLength: 10,
        disabled: false,
        readonly: false,
        label: 'Тестовое поле',
        icon: '',
        classes: '',
      }
    });
    BaseInputElement = wrapper.find('input');
  });

  // После каждого теста размонтируем компонент
  afterEach(() => {
    wrapper.unmount();
  });

  // Проверяем, что компонент корректно монтируется
  test('Компонент корректно монтируется', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Проверяем, что событие onChange срабатывает при вводе данных в поле
  test('Событие onChange срабатывает при вводе данных', async () => {
    await BaseInputElement.setValue('Тест');
    expect(wrapper.emitted()).toHaveProperty('onChange');
  });

  // Проверяем, что событие onChange не срабатывает, если поле отключено
  test('onChange не срабатывает, когда поле отключено', async () => {
    await wrapper.setProps({ disabled: true });
    await BaseInputElement.setValue('Тест');
    expect(wrapper.emitted()).not.toHaveProperty('onChange');
  });

  // Проверяем, что в поле отображается правильный placeholder
  test('Поле имеет корректный placeholder', () => {
    expect(BaseInputElement.attributes('placeholder')).toBe('Введите текст');
  });

  // Проверяем, что поле устанавливается как обязательное, если установлен соответствующий prop
  test('Поле устанавливается как обязательное при соответствующем prop', () => {
    expect(BaseInputElement.attributes('required')).toBeDefined();
  });
});

Type 'DOMWrapper<HTMLInputElement>' is missing the following properties from type 'VueWrapper<any, any>': componentVM, rootVM, __app, __setProps, and 10 more.ts(2740)
Translation
Type 'DOMWrapper<HTMLInputElement>' is missing the following properties from type 'VueWrapper<any, any>': componentVM, rootVM, __app, __setProps, and 10 more.
Request a translation for #2740

let BaseInputElement: VueWrapper<any, any>

