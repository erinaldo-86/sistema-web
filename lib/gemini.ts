import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function analyzeSite(url: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `Realize uma análise detalhada do site (${url}) utilizando apenas fontes públicas e pesquisa de forma ética.

    Para isso, colete e verifique as seguintes informações:

    Reclamações públicas:

    Pesquise por reclamações sobre esse site em fontes acessíveis via Google, como Reclame Aqui, redes sociais.
    Verifique se o site responde às reclamações e qual a taxa de resolução dos problemas.

    Quantas reclamações foram encontradas mencionando esse site?

    Quais são os padrões de insatisfação e problemas recorrentes mencionados pelos usuários?

    Conteúdo do site

    Examine o conteúdo em busca de erros gramaticais, ortográficos ou de formatação.

    Segurança do site:

    O site possui certificado SSL e utiliza HTTPS para conexões seguras?

    O site está listado como seguro ou suspeito no Google Safe Browsing?

    Tempo de atividade do site:

    Verifique a data de registro do domínio e o tempo de funcionamento.

    Presença online e credibilidade:

    O site possui perfis oficiais em redes sociais? Se sim, liste quais encontrou.

    Há sinais de atividade legítima, como postagens recentes, interação com usuários e seguidores reais?

    Pontuação de segurança:

    Com base nas informações pesquisadas acima, atribua uma pontuação (score) de segurança de 0 a 100 para indicar a confiabilidade e segurança deste site, justificando a pontuação com os critérios avaliados.

    Regras para a análise:

    Utilize apenas dados acessíveis por meio de pesquisa pública no Google, respeitando políticas de privacidade e os Termos de Serviço das fontes consultadas.

    Não colete informações protegidas por login ou qualquer dado sensível não autorizado.`;

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error("Error analyzing site:", error)
    throw new Error("Falha ao analisar o site. Por favor, tente novamente.")
  }
}
