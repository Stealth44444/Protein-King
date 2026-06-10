'use server'

import { Resend } from 'resend'

type ActionState = { success: boolean; errorCode?: string }

export async function applyAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name    = formData.get('name')?.toString().trim()    ?? ''
  const phone   = formData.get('phone')?.toString().trim()   ?? ''
  const email   = formData.get('email')?.toString().trim()   ?? ''
  const gym     = formData.get('gym')?.toString().trim()     ?? ''
  const details = formData.get('details')?.toString().trim() ?? ''

  if (!name)  return { success: false, errorCode: 'errorName' }
  if (!phone) return { success: false, errorCode: 'errorPhone' }
  if (!email) return { success: false, errorCode: 'errorEmail' }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Protein King <onboarding@resend.dev>',
    to: process.env.APPLY_EMAIL_TO!,
    subject: `[Partner Enquiry] ${gym || 'Facility not specified'} — ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Facility:</strong> ${gym || '—'}</p>
      <p><strong>Details:</strong> ${details || '—'}</p>
    `,
  })

  if (error) return { success: false, errorCode: 'errorSend' }
  return { success: true }
}
