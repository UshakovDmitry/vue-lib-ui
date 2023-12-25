// Тестирование ввода данных
test('Компонент правильно обрабатывает ввод данных', async () => {
  const input = wrapper.find('input[type="tel"]')
  await input.setValue('1234567890')
  expect(input.element.value).toBe('1234567890')
})

// Тестирование события onChange
test('Компонент генерирует событие onChange при изменении данных', async () => {
  const input = wrapper.find('input[type="tel"]')
  await input.setValue('1234567890')
  expect(wrapper.emitted()).toHaveProperty('onChange')
})

// Тестирование валидации (если применимо)
// ...

// Тестирование состояний disabled и readonly
test('Компонент правильно обрабатывает состояние disabled', async () => {
  await wrapper.setProps({ disabled: true })
  const input = wrapper.find('input[type="tel"]')
  expect(input.attributes('disabled')).toBeDefined()
})

test('Компонент правильно обрабатывает состояние readonly', async () => {
  await wrapper.setProps({ readonly: true })
  const input = wrapper.find('input[type="tel"]')
  expect(input.attributes('readonly')).toBeDefined()
})

// Тестирование отображения ошибок
test('Компонент отображает сообщения об ошибках', async () => {
  await wrapper.setProps({ errorText: 'Invalid phone number' })
  expect(wrapper.text()).toContain('Invalid phone number')
})
