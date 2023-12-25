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



 FAIL  src/components/PasswordField.test.ts > PasswordField > Клик по иконке видимости меняет тип поля ввода
Error: Cannot call trigger on an empty DOMWrapper.
 ❯ Object.get node_modules/@vue/test-utils/dist/vue-test-utils.esm-bundler.mjs:1525:27
 ❯ src/components/PasswordField.test.ts:36:30
     34|     test('Клик по иконке видимости меняет тип поля ввода', async () => {
     35|         const visibilityIcon = wrapper.find('icon-component'); // Уточните селектор, если нужно
     36|         await visibilityIcon.trigger('click');
       |                              ^
     37|         expect(wrapper.find('input').element.type).toBe('text');
     38|         await visibilityIcon.trigger('click');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/3]⎯
 FAIL  src/components/PasswordField.test.ts > PasswordField > Проверка отображения иконок видимости и скрытия видимости
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ src/components/PasswordField.test.ts:44:76
     42|     test('Проверка отображения иконок видимости и скрытия видимости', async () => {
     43|         const visibilityIcon = wrapper.find('icon-component'); // Уточните селектор, если нужно
     44|         expect(wrapper.findComponent({ name: 'VisibilityIcon' }).exists()).toBe(true);
       |                                                                            ^
     45|         await visibilityIcon.trigger('click');
     46|         expect(wrapper.findComponent({ name: 'VisibilityOffIcon' }).exists()).toBe(true);

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/3]⎯
 Test Files  2 failed | 18 passed (20)
      Tests  2 failed | 59 passed (61)
   Start at  12:02:09
   Duration  2.62s (transform 553ms, setup 2ms, collect 2.25s, tests 775ms, environment 5.20s, prepare 3.00s)


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit

