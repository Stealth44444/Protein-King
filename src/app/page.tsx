import { redirect } from 'next/navigation'

// The middleware handles locale detection and redirection for all traffic.
// This fallback ensures direct root-path access also redirects correctly.
export default function RootPage() {
  redirect('/en')
}
