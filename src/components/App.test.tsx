import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('the application loads', () => {
  render(<App />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
