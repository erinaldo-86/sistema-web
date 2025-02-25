import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Como saber se o site é seguro? Acesse agora! Ferramenta gratuita.",
  description: "Verifique se um site é seguro! Veja a reputação + relatório Detalhado. Tudo o que você precisa saber para identificar se um sites é falsos.",
    generator: 'v0.dev',
  verification: {
    /* google: 'codigo_de_verificacao_do_google', */
  },
  icons: ['/img/favicon.png'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx" 
        crossOrigin="anonymous"></script> */}
        {children}
      </body>
    </html>
  )
}



import './globals.css'
