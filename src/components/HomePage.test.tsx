import React from 'react'
import { render, screen } from '@testing-library/react'

import HomePage from './HomePage'

test('the application loads', () => {
  render(<HomePage />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
