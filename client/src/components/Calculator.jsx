import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import calculate from '../utils/calculate'

export default function Calculator({ totalAmountA, totalAmountB }) {
  const [result, setResult] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ formula: '' })

  return (
    <div className="calculator">
      <form
        onSubmit={handleSubmit((data) =>
          setResult(calculate(data.formula, totalAmountA, totalAmountB)),
        )}
      >
        <h3>${result.toFixed(2)}</h3>
        <input
          {...register('formula', {
            required: 'Formula is required.',
            maxLength: { value: 3, message: 'Formula is too long!' },
            pattern: {
              value: /^[AB]{1}$|^[AB]{1}[+|\-|*|/]?[AB]+$/,
              message: 'Invalid entry! Please try again.',
            },
          })}
          aria-invalid={errors.formula ? 'true' : 'false'}
          type="text"
          placeholder="Example: A+B"
          maxLength="3"
          autoComplete="off"
          data-testid='formula-input'
        />
        <p>{errors.formula?.message}</p>
        <button type="submit">Calculate</button>
      </form>
    </div>
  )
}
