import React from 'react'
import { render, screen } from '@testing-library/react'
import PriceTables from './PriceTables'

describe('PriceTables component', () => {
  test('renders PriceTable html', () => {
    const html =
      '<h2>Table A</h2><table><thead><tr><th>Item</th><th>Price</th></tr></thead>  <tbody><tr><td>1</td><td>10.20</td></tr></tbody></table>'
    render(<PriceTables html={html} />)
    expect(screen.getByText('Table A')).toBeInTheDocument()
    expect(screen.getByText('Item')).toBeInTheDocument()
    expect(screen.getByText('Price')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('10.20')).toBeInTheDocument()
  })
})
