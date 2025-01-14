//import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    const headline = screen.getByText('Sample System')
    expect(headline).toBeInTheDocument()
  })
})
