import { mount } from '@vue/test-utils';
import TextField from '@/components/TextField.vue';
import { describe, expect, test, afterEach, beforeEach } from "vitest";

describe('TextField', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TextField, {
            props: {
                label: 'Test Label',
                placeholder: 'Enter text',
                errorText: 'Error message',
                hintText: 'Hint message',
                type: 'text'
            }
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('Компонент существует', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Компонент отображает правильные пропсы', () => {
        expect(wrapper.find('.label').text()).toContain('Test Label');
        expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text');
        expect(wrapper.find('.error-text').text()).toBe('Error message');
        expect(wrapper.find('.hint-text').text()).toBe('Hint message');
    });

    test('Проверка реакции компонента на ввод', async () => {
        const input = wrapper.find('input');
        await input.setValue('test input');
        expect(input.element.value).toBe('test input');
    });

    test('Компонент правильно обрабатывает состояние disabled', async () => {
        await wrapper.setProps({ disabled: true });
        expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    });

    test('Компонент правильно обрабатывает состояние readonly', async () => {
        await wrapper.setProps({ readonly: true });
        expect(wrapper.find('input').attributes('readonly')).toBeDefined();
    });

    // Добавьте другие тесты по необходимости
});
