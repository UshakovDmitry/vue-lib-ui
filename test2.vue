import BaseInput from '@/components/BaseInput.vue';
import { describe, expect, test, afterEach, beforeEach } from "vitest";
import { mount, VueWrapper, DOMWrapper } from "@vue/test-utils";
import { nextTick } from 'vue';

describe('BaseInput', () => {
  let wrapper: VueWrapper<any>;
  let BaseInputElement: DOMWrapper<HTMLInputElement>; // Используем DOMWrapper

  beforeEach(() => {
    wrapper = mount(BaseInput, {
      props: {
        // Ваши пропсы
      }
    });
    BaseInputElement = wrapper.find('input'); // Находит HTML элемент input
  });

  afterEach(() => {
    wrapper.unmount();
  });
