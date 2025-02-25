import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logotipo-verificar-site-seguro-Cpj8FWwaIWxOSXwe9drA8ZpWCWRuuK.png"
            alt="Verificar Site Seguro"
            width={48}
            height={48}
            className="h-12 w-auto"
          />

          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="#features" className="text-gray-400 hover:text-primary transition-colors">
              Recursos
            </Link>
            <Link href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">
              Como Funciona
            </Link>
            <Link href="#faq" className="text-gray-400 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/privacidade" className="text-gray-400 hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-gray-400 hover:text-primary transition-colors">
              Termos
            </Link>
          </nav>

          <div className="pt-8 border-t border-gray-800 w-full">
            <p className="text-sm text-gray-400 text-center">
              © 2024 Verificador de Sites. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
