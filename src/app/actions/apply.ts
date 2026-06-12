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
    from: 'Protein King <hello@proteinking.ltd>',
    to: process.env.APPLY_EMAIL_TO!,
    subject: `[Partner Enquiry] ${businessName}${branchName ? ` – ${branchName}` : ''} · ${contactName}`,
    text: [
      `New partner enquiry from ${businessName}${branchName ? ` (${branchName})` : ''}.`,
      ``,
      `Contact: ${contactName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Address: ${address || '—'}`,
      `Members: ${memberCount || '—'}`,
      inquiry ? `\nInquiry:\n${inquiry}` : '',
    ].join('\n'),
  })

  if (error) return { success: false, errorCode: 'errorSend' }
  return { success: true }
}
