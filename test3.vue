import { mount } from '@vue/test-utils';
import PasswordField from '@/components/PasswordField.vue';
import { describe, expect, test, afterEach, beforeEach } from "vitest";

describe('PasswordField', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(PasswordField, {
            props: {
                label: 'Password',
                placeholder: 'Enter password',
                errorText: '',
                hintText: 'Password should be strong',
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
        expect(wrapper.props('label')).toBe('Password');
        expect(wrapper.props('placeholder')).toBe('Enter password');
        expect(wrapper.props('errorText')).toBe('');
        expect(wrapper.props('hintText')).toBe('Password should be strong');
    });

    test('Клик по иконке видимости меняет тип поля ввода', async () => {
        const visibilityIcon = wrapper.find('icon-component'); // Уточните селектор, если нужно
        await visibilityIcon.trigger('click');
        expect(wrapper.find('input').element.type).toBe('text');
        await visibilityIcon.trigger('click');
        expect(wrapper.find('input').element.type).toBe('password');
    });

    test('Проверка отображения иконок видимости и скрытия видимости', async () => {
        const visibilityIcon = wrapper.find('icon-component'); // Уточните селектор, если нужно
        expect(wrapper.findComponent({ name: 'VisibilityIcon' }).exists()).toBe(true);
        await visibilityIcon.trigger('click');
        expect(wrapper.findComponent({ name: 'VisibilityOffIcon' }).exists()).toBe(true);
    });

    // Добавьте другие тесты по необходимости
});

