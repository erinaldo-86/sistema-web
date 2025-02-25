import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-3xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <p className="mb-4 text-lg leading-relaxed">
        A sua privacidade é importante para nós. É política do Verificar site seguro respeitar a sua privacidade em relação a
        qualquer informação sua que possamos coletar no site Verificar site seguro.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
        Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos
        coletando e como será usado.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando
        armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como
        acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por
        lei.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos
        controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas
        políticas de privacidade.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos
        fornecer alguns dos serviços desejados.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e
        informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações
        pessoais, entre em contato conosco.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  )
}
