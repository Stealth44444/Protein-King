'use server'

import { Resend } from 'resend'

type ActionState = { success: boolean; error?: string }

export async function applyAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name    = formData.get('name')?.toString().trim()    ?? ''
  const phone   = formData.get('phone')?.toString().trim()   ?? ''
  const email   = formData.get('email')?.toString().trim()   ?? ''
  const gym     = formData.get('gym')?.toString().trim()     ?? ''
  const details = formData.get('details')?.toString().trim() ?? ''

  if (!name)  return { success: false, error: '이름을 입력해주세요.' }
  if (!phone) return { success: false, error: '전화번호를 입력해주세요.' }
  if (!email) return { success: false, error: '이메일을 입력해주세요.' }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Protein King <onboarding@resend.dev>',
    to: process.env.APPLY_EMAIL_TO!,
    subject: `[파트너 신청] ${gym || '시설 미기재'} — ${name}`,
    html: `
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>전화번호:</strong> ${phone}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>시설명:</strong> ${gym || '—'}</p>
      <p><strong>시설 정보:</strong> ${details || '—'}</p>
    `,
  })

  if (error) return { success: false, error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }
  return { success: true }
}
