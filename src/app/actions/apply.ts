'use server'

import { Resend } from 'resend'

type ActionState = { success: boolean; errorCode?: string }

export async function applyAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const businessName = formData.get('businessName')?.toString().trim() ?? ''
  const branchName   = formData.get('branchName')?.toString().trim()   ?? ''
  const contactName  = formData.get('contactName')?.toString().trim()  ?? ''
  const phone        = formData.get('phone')?.toString().trim()        ?? ''
  const email        = formData.get('email')?.toString().trim()        ?? ''
  const address      = formData.get('address')?.toString().trim()      ?? ''
  const memberCount  = formData.get('memberCount')?.toString().trim()  ?? ''
  const inquiry      = formData.get('inquiry')?.toString().trim()      ?? ''

  if (!businessName) return { success: false, errorCode: 'errorBusinessName' }
  if (!contactName)  return { success: false, errorCode: 'errorContactName' }
  if (!phone)        return { success: false, errorCode: 'errorPhone' }
  if (!email)        return { success: false, errorCode: 'errorEmail' }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Protein King <onboarding@resend.dev>',
    to: process.env.APPLY_EMAIL_TO!,
    subject: `[Partner Enquiry] ${businessName}${branchName ? ` – ${branchName}` : ''} · ${contactName}`,
    html: `
      <h2 style="font-family:sans-serif">New Partner Enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;line-height:1.8;border-collapse:collapse" cellpadding="0">
        <tr><td style="color:#888;padding-right:24px">Business</td><td><strong>${businessName}</strong>${branchName ? ` (${branchName})` : ''}</td></tr>
        <tr><td style="color:#888">Contact</td><td>${contactName}</td></tr>
        <tr><td style="color:#888">Phone</td><td>${phone}</td></tr>
        <tr><td style="color:#888">Email</td><td>${email}</td></tr>
        <tr><td style="color:#888">Address</td><td>${address || '—'}</td></tr>
        <tr><td style="color:#888">Members</td><td>${memberCount || '—'}</td></tr>
      </table>
      ${inquiry ? `<p style="font-family:sans-serif;font-size:14px;margin-top:16px"><strong>Inquiry:</strong><br/>${inquiry}</p>` : ''}
    `,
  })

  if (error) return { success: false, errorCode: 'errorSend' }
  return { success: true }
}
