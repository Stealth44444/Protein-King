import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock Resend before any imports
const mockSend = vi.fn()
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(function () {
    return { emails: { send: mockSend } }
  }),
}))

process.env.RESEND_API_KEY = 'test-key'
process.env.APPLY_EMAIL_TO = 'test@proteinking.com'

describe('applyAction', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSend.mockResolvedValue({ data: { id: 'test-id' }, error: null })
  })

  it('이름이 없으면 errorCode 반환', async () => {
    const { applyAction } = await import('../src/app/actions/apply')
    const fd = new FormData()
    fd.set('name', '')
    fd.set('gym', '강남 헬스장')
    fd.set('phone', '010-1234-5678')
    fd.set('email', 'test@example.com')
    const result = await applyAction({ success: false }, fd)
    expect(result.success).toBe(false)
    expect(result.errorCode).toBe('errorName')
  })

  it('전화번호가 없으면 errorCode 반환', async () => {
    const { applyAction } = await import('../src/app/actions/apply')
    const fd = new FormData()
    fd.set('name', '홍길동')
    fd.set('gym', '강남 헬스장')
    fd.set('phone', '')
    fd.set('email', 'test@example.com')
    const result = await applyAction({ success: false }, fd)
    expect(result.success).toBe(false)
    expect(result.errorCode).toBe('errorPhone')
  })

  it('이메일이 없으면 errorCode 반환', async () => {
    const { applyAction } = await import('../src/app/actions/apply')
    const fd = new FormData()
    fd.set('name', '홍길동')
    fd.set('gym', '강남 헬스장')
    fd.set('phone', '010-1234-5678')
    fd.set('email', '')
    const result = await applyAction({ success: false }, fd)
    expect(result.success).toBe(false)
    expect(result.errorCode).toBe('errorEmail')
  })

  it('모든 필드가 유효하면 success 반환', async () => {
    const { applyAction } = await import('../src/app/actions/apply')
    const fd = new FormData()
    fd.set('name', '홍길동')
    fd.set('gym', '강남 헬스장')
    fd.set('phone', '010-1234-5678')
    fd.set('email', 'test@example.com')
    const result = await applyAction({ success: false }, fd)
    expect(result.success).toBe(true)
    expect(mockSend).toHaveBeenCalledOnce()
  })

  it('Resend 오류 시 errorCode 반환', async () => {
    mockSend.mockResolvedValue({ data: null, error: { message: 'API error' } })
    const { applyAction } = await import('../src/app/actions/apply')
    const fd = new FormData()
    fd.set('name', '홍길동')
    fd.set('gym', '강남 헬스장')
    fd.set('phone', '010-1234-5678')
    fd.set('email', 'test@example.com')
    const result = await applyAction({ success: false }, fd)
    expect(result.success).toBe(false)
    expect(result.errorCode).toBe('errorSend')
  })
})
