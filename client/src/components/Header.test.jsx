import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  test('renders H1 title', () => {
    render(<Header />)
    expect(screen.getByText('Ledger Calculator')).toBeInTheDocument()
  })
})
