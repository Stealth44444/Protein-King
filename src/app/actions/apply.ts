'use server'

import { Resend } from 'resend'

type ActionState = { success: boolean; error?: string }

export async function applyAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name  = formData.get('name')?.toString().trim()  ?? ''
  const gym   = formData.get('gym')?.toString().trim()   ?? ''
  const phone = formData.get('phone')?.toString().trim() ?? ''

  if (!name)  return { success: false, error: '이름을 입력해주세요.' }
  if (!gym)   return { success: false, error: '헬스장 이름을 입력해주세요.' }
  if (!phone) return { success: false, error: '연락처를 입력해주세요.' }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Protein King <onboarding@resend.dev>',
    to: process.env.APPLY_EMAIL_TO!,
    subject: `[파트너 신청] ${gym} — ${name}`,
    html: `
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>헬스장:</strong> ${gym}</p>
      <p><strong>연락처:</strong> ${phone}</p>
    `,
  })

  if (error) return { success: false, error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' }
  return { success: true }
}
