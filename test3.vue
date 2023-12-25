import { mount, VueWrapper } from '@vue/test-utils';
import { describe, expect, test, afterEach, beforeEach, vi } from "vitest";
import TextField from '@/components/TextField.vue';

describe('TextField', () => {
    let wrapper: VueWrapper<any>;
    let TEXTFIELD: VueWrapper<any>;
    
    beforeEach(() => {
        wrapper = mount(TextField, {
        props: {
            copyText: 'test',
        }
        });
    
        TEXTFIELD = wrapper.findComponent(TextField);
    });
    
    afterEach(() => {
        wrapper.unmount();
    });
    
    test('Компонент существует', () => {
        expect(wrapper.exists()).toBe(true);
    });
    
    
    test('Компонент имеет событие onClick', () => {
        TEXTFIELD.trigger('click');
    
        expect(wrapper.emitted()).toHaveProperty('click');
    });

    test('Компонент имеет событие onCopy', () => {
        TEXTFIELD.trigger('copy');
    
        expect(wrapper.emitted()).toHaveProperty('copy');
    });

    test('Компонент имеет событие onCut', () => {
        TEXTFIELD.trigger('cut');
    
        expect(wrapper.emitted()).toHaveProperty('cut');
    });

    test('Компонент имеет событие onPaste', () => {
        TEXTFIELD.trigger('paste');
    
        expect(wrapper.emitted()).toHaveProperty('paste');
    });


    test('Компонент имеет событие onFocus', () => {
        TEXTFIELD.trigger('focus');
    
        expect(wrapper.emitted()).toHaveProperty('focus');
    });

    test('Компонент имеет событие onBlur', () => {
        TEXTFIELD.trigger('blur');
    
        expect(wrapper.emitted()).toHaveProperty('blur');
    });

    test('Компонент имеет событие onInput', () => {
        TEXTFIELD.trigger('input');
    
        expect(wrapper.emitted()).toHaveProperty('input');
    });

    test('Компонент имеет событие onKeydown', () => {
        TEXTFIELD.trigger('keydown');
    
        expect(wrapper.emitted()).toHaveProperty('keydown');
    });

    test('Компонент имеет событие onKeypress', () => {
        TEXTFIELD.trigger('keypress');
    
        expect(wrapper.emitted()).toHaveProperty('keypress');
    });

    test('Компонент имеет событие onKeyup', () => {
        TEXTFIELD.trigger('keyup');
    
        expect(wrapper.emitted()).toHaveProperty('keyup');
    });

    test('Компонент имеет событие onMousedown', () => {
        TEXTFIELD.trigger('mousedown');
    
        expect(wrapper.emitted()).toHaveProperty('mousedown');
    });

    test('Компонент имеет событие onMouseenter', () => {
        TEXTFIELD.trigger('mouseenter');
    
        expect(wrapper.emitted()).toHaveProperty('mouseenter');
    });

    test('Компонент имеет событие onMouseleave', () => {
        TEXTFIELD.trigger('mouseleave');
    
        expect(wrapper.emitted()).toHaveProperty('mouseleave');
    });

    test('Компонент имеет событие onMousemove', () => {
        TEXTFIELD.trigger('mousemove');
    
        expect(wrapper.emitted()).toHaveProperty('mousemove');
    });

    test('Компонент имеет событие onMouseout', () => {
        TEXTFIELD.trigger('mouseout');
    
        expect(wrapper.emitted()).toHaveProperty('mouseout');
    });

    test('Компонент имеет событие onMouseover', () => {
        TEXTFIELD.trigger('mouseover');
    
        expect(wrapper.emitted()).toHaveProperty('mouseover');
    });

    test('Компонент имеет событие onMouseup', () => {
        TEXTFIELD.trigger('mouseup');
    
        expect(wrapper.emitted()).toHaveProperty('mouseup');
    });

    test('Компонент имеет событие onWheel', () => {
        TEXTFIELD.trigger('wheel');
    
        expect(wrapper.emitted()).toHaveProperty('wheel');
    });

    test('Компонент имеет событие onCompositionend', () => {
        TEXTFIELD.trigger('compositionend');
    
        expect(wrapper.emitted()).toHaveProperty('compositionend');
    });

    test('Компонент имеет событие onCompositionstart', () => {
        TEXTFIELD.trigger('compositionstart');
    
        expect(wrapper.emitted()).toHaveProperty('compositionstart');
    });

    test('Компонент имеет событие onCompositionupdate', () => {
        TEXTFIELD.trigger('compositionupdate');
    
        expect(wrapper.emitted()).toHaveProperty('compositionupdate');
    });

    test('Компонент имеет событие onInput', () => {
        TEXTFIELD.trigger('input');
    
        expect(wrapper.emitted()).toHaveProperty('input');
    });

    test('Компонент имеет событие onInvalid', () => {
        TEXTFIELD.trigger('invalid');
    
        expect(wrapper.emitted()).toHaveProperty('invalid');
    });

    test('Компонент имеет событие onReset', () => {
        TEXTFIELD.trigger('reset');
    
        expect(wrapper.emitted()).toHaveProperty('reset');
    });

    test('Компонент имеет событие onSearch', () => {
        TEXTFIELD.trigger('search');
    
        expect(wrapper.emitted()).toHaveProperty('search');
    });

    test('Компонент имеет событие onSelect', () => {
        TEXTFIELD.trigger('select');
    
        expect(wrapper.emitted()).toHaveProperty('select');
    });

    test('Компонент имеет событие onChange', () => {
        TEXTFIELD.trigger('change');
    
        expect(wrapper.emitted()).toHaveProperty('change');
    });

    test('Компонент имеет событие onCopy', () => {
        TEXTFIELD.trigger('copy');
    
        expect(wrapper.emitted()).toHaveProperty('copy');
    });

    test('Компонент имеет событие onCut', () => {
        TEXTFIELD.trigger('cut');
    
        expect(wrapper.emitted()).toHaveProperty('cut');
    });


});
