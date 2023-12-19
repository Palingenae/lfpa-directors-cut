import type { Metadata } from 'next'
import '../assets/styles/styles.scss';

export const metadata: Metadata = {
  title: 'Les Films de Plein air',
  description: "Festival de cinéma d'auteur à Bruxelles, à La Cambre",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
