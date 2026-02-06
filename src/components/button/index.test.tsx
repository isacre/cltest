import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonComponent from './index'

describe('ButtonComponent', () => {
  it('renders children correctly', () => {
    render(<ButtonComponent>Click me</ButtonComponent>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<ButtonComponent onClick={handleClick}>Click me</ButtonComponent>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not trigger click when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    
    render(
      <ButtonComponent disabled onClick={handleClick}>
        Disabled
      </ButtonComponent>
    )
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders with custom backgroundColor prop and applies correct styles when provided', () => {
    render(<ButtonComponent backgroundColor="#ff0000" >Red Button</ButtonComponent>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({ backgroundColor: '#ff0000' })
  })

  it('renders with custom color prop and applies correct styles when provided', () => {
    render(<ButtonComponent color="#ffffff">White Text</ButtonComponent>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({ color: '#ffffff' })
  })

  it('renders with custom borderColor prop and applies correct styles when provided', () => {
    render(<ButtonComponent borderColor="#000000">Bordered</ButtonComponent>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle('border-color: #000000')
    expect(button).toHaveStyle('border-width: 1px')
    expect(button).toHaveStyle('border-style: solid')
  })

  it('renders with all custom style props', () => {
    render(
      <ButtonComponent 
        backgroundColor="#ff0000" 
        color="#ffffff" 
        borderColor="#000000"
      >
        Fully Styled
      </ButtonComponent>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

