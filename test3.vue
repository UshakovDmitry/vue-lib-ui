import { mount } from '@vue/test-utils';
import SearchField from '@/components/SearchField.vue';
import { describe, expect, test, afterEach, beforeEach } from 'vitest';

describe('SearchField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SearchField, {
      props: {
        label: 'Search',
        placeholder: 'Enter search term',
        errorText: '',
        hintText: '',
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('Компонент существует', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Компонент отображает правильные пропсы', () => {
    expect(wrapper.props('label')).toBe('Search');
    expect(wrapper.props('placeholder')).toBe('Enter search term');
    expect(wrapper.props('errorText')).toBe('');
    expect(wrapper.props('hintText')).toBe('');
  });

  test('Компонент правильно обрабатывает ввод данных', async () => {
    const input = wrapper.find('input[type="search"]');
    await input.setValue('test');
    expect(input.element.value).toBe('test');
  });

  test('Компонент правильно обрабатывает состояние disabled', async () => {
    await wrapper.setProps({ disabled: true });
    const input = wrapper.find('input[type="search"]');
    expect(input.attributes('disabled')).toBeDefined();
  });

  test('Компонент правильно обрабатывает состояние readonly', async () => {
    await wrapper.setProps({ readonly: true });
    const input = wrapper.find('input[type="search"]');
    expect(input.attributes('readonly')).toBeDefined();
  });

  // Добавьте дополнительные тесты по необходимости
});

