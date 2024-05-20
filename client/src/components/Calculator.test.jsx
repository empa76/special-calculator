import React from 'react'
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react'
import Calculator from './Calculator'
import calculate from '../utils/calculate'

// mock calculate from calculateService due jest issues with transformation fparser by babel while running tests
jest.mock('../utils/calculate', () => {
  return {
    __esModule: true,
    default: jest.fn()
  }
})

describe('Calculator', () => {
  test('Displays calculated result based on entered formula A+B', async () => {
    calculate.mockImplementation(() => 3)
    act(() => render(<Calculator totalAmountA={1} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'A+B' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$3.00')).toBeInTheDocument() })
    expect(screen.getByText('$3.00')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula B+A', async () => {
    calculate.mockImplementation(() => 5.15)
    act(() => render(<Calculator totalAmountA={1.40} totalAmountB={3.75} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'B+A' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$5.15')).toBeInTheDocument() })
    expect(screen.getByText('$5.15')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula A-B', async () => {
    calculate.mockImplementation(() => 1)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'A+B' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$1.00')).toBeInTheDocument() })
    expect(screen.getByText('$1.00')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula B-A', async () => {
    calculate.mockImplementation(() => 1.75)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={1.25} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'B-A' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$1.75')).toBeInTheDocument() })
    expect(screen.getByText('$1.75')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula A*B', async () => {
    calculate.mockImplementation(() => 6)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'A*B' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$6.00')).toBeInTheDocument() })
    expect(screen.getByText('$6.00')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula B*A', async () => {
    calculate.mockImplementation(() => 4.50)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={1.50} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'B*A' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$4.50')).toBeInTheDocument() })
    expect(screen.getByText('$4.50')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula A/B', async () => {
    calculate.mockImplementation(() => 1.5)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'A/B' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$1.50')).toBeInTheDocument() })
    expect(screen.getByText('$1.50')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula B/A', async () => {
    calculate.mockImplementation(() => 2)
    act(() => render(<Calculator totalAmountA={5} totalAmountB={10} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'B/A' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$2.00')).toBeInTheDocument() })
    expect(screen.getByText('$2.00')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula A', async () => {
    calculate.mockImplementation(() => 3)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'A' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$3.00')).toBeInTheDocument() })
    expect(screen.getByText('$3.00')).toBeInTheDocument()
  })

  test('Displays calculated result based on entered formula B', async () => {
    calculate.mockImplementation(() => 2)
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'B' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('$2.00')).toBeInTheDocument() })
    expect(screen.getByText('$2.00')).toBeInTheDocument()
  })

  it ('Displays error message when formula is too long', async () => {
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'A+B+C' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('Formula is too long!')).toBeInTheDocument() })
    expect(screen.getByText('Formula is too long!')).toBeInTheDocument()
  })

  it ('Displays error message when formula is invalid', async () => {
    act(() => render(<Calculator totalAmountA={3} totalAmountB={2} />))
    const input = screen.getByTestId('formula-input')
    const button = screen.getByText('Calculate')

    fireEvent.change(input, { target: { value: 'XYZ' } })
    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => { expect(screen.getByText('Invalid entry! Please try again.')).toBeInTheDocument() })
    expect(screen.getByText('Invalid entry! Please try again.')).toBeInTheDocument()
  })
})
