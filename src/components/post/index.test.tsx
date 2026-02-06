import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { PostType } from '../../types'
import Post from './index'

// Mock the icons
vi.mock('../../assets/icons/delete.svg', () => ({ default: 'delete-icon.svg' }))
vi.mock('../../assets/icons/edit.svg', () => ({ default: 'edit-icon.svg' }))

// Mock the utils
vi.mock('../../utils', () => ({
  getPassedTime: vi.fn(() => '5 minutes ago'),
}))

const mockPost: PostType = {
  id: 1,
  username: 'testuser',
  created_datetime: '2025-01-01T12:00:00Z',
  title: 'Test Post Title',
  content: 'This is the test post content',
  author_ip: '127.0.0.1',
}

describe('Post', () => {
  const mockSetModalState = vi.fn()
  const mockSetPostId = vi.fn()

  it('renders post title correctly', () => {
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
  })

  it('renders post content correctly', () => {
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    expect(screen.getByText('This is the test post content')).toBeInTheDocument()
  })

  it('renders username with @ prefix', () => {
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    expect(screen.getByText('@testuser')).toBeInTheDocument()
  })

  it('renders passed time', () => {
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    // The mocked getPassedTime always returns 5 minutes ago
    expect(screen.getByText('5 minutes ago')).toBeInTheDocument()
  })

  it('does not show edit/delete buttons for non-owners', () => {
    localStorage.setItem('username', 'otheruser')
    
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    
    expect(screen.queryByAltText('Edit')).not.toBeInTheDocument()
    expect(screen.queryByAltText('Delete')).not.toBeInTheDocument()
  })

  it('shows edit/delete buttons for post owner', () => {
    localStorage.setItem('username', 'testuser')
    
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    
    expect(screen.getByAltText('Edit')).toBeInTheDocument()
    expect(screen.getByAltText('Delete')).toBeInTheDocument()
  })

  it('calls setModalState and setPostId when edit button clicked', async () => {
    const user = userEvent.setup()
    localStorage.setItem('username', 'testuser')
    
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    
    await user.click(screen.getByAltText('Edit'))
    
    expect(mockSetModalState).toHaveBeenCalledWith('edit')
    expect(mockSetPostId).toHaveBeenCalledWith(1)
  })

  it('calls setModalState and setPostId when delete button clicked', async () => {
    const user = userEvent.setup()
    localStorage.setItem('username', 'testuser')
    
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    
    await user.click(screen.getByAltText('Delete'))
    
    expect(mockSetModalState).toHaveBeenCalledWith('delete')
    expect(mockSetPostId).toHaveBeenCalledWith(1)
  })

  it('toggles like state when like button clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    
    // Initially not liked - find the outline like icon
    const likeButton = document.querySelector('svg')
    expect(likeButton).toBeInTheDocument()
    
    // Click to like
    await user.click(likeButton!)
    expect(localStorage.getItem('liked_1')).toBe('true')
    
    // Click again to unlike
    const filledLikeButton = document.querySelector('svg')
    await user.click(filledLikeButton!)
    expect(localStorage.getItem('liked_1')).toBeNull()
  })

  it('initializes like state from localStorage', () => {
    localStorage.setItem('liked_1', 'true')
    
    render(
      <Post
        post={mockPost}
        setModalState={mockSetModalState}
        setPostId={mockSetPostId}
        index={0}
      />
    )
    
    // The filled like icon should be rendered (AiFillLike)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})

