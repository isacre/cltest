import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CreatePostForm from './index'
import userEvent from '@testing-library/user-event'

describe('CreatePostForm', () => {
  it('renders correctly', () => {
    render(<CreatePostForm submitFn={vi.fn()} />)
    expect(screen.getByText('What\'s on your mind?')).toBeInTheDocument()
  })

  it('submits form when valid', async () => {
    const submitFn = vi.fn()
    render(<CreatePostForm submitFn={submitFn} />)
    const titleInput = screen.getByPlaceholderText('Hello world')
    const contentInput = screen.getByPlaceholderText('Content here')
    await userEvent.type(titleInput, 'Test Title')
    await userEvent.type(contentInput, 'Test Content')
    await userEvent.click(screen.getByText('Create'))
    expect(submitFn).toHaveBeenCalledTimes(1)
  })

  it('does not submit form when invalid', async () => {
    const submitFn = vi.fn()
    render(<CreatePostForm submitFn={submitFn} />)
    const contentInput = screen.getByPlaceholderText('Content here')
    await userEvent.type(contentInput, 'Test Content')
    await userEvent.click(screen.getByText('Create'))
    expect(submitFn).not.toHaveBeenCalled()
  })

  it('does not submit form when provided with whitespaces', async () => {
    const submitFn = vi.fn()
    render(<CreatePostForm submitFn={submitFn} />)
    const contentInput = screen.getByPlaceholderText('Content here')
    const titleInput = screen.getByPlaceholderText('Hello world')
    await userEvent.type(contentInput, '   ')
    await userEvent.type(titleInput, '   ')
    await userEvent.click(screen.getByText('Create'))
    expect(submitFn).not.toHaveBeenCalled()
  })
})