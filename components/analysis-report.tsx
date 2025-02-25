import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";
import { CheckCircle } from "lucide-react"; // Importa o ícone de checkcircle

interface AnalysisReportProps {
  analysis: string;
}

export function AnalysisReport({ analysis }: AnalysisReportProps) {
  // Extract title from analysis
  const title = "Relatório Detalhado";

  // Extract score from analysis text
  const scoreMatch = analysis.match(/nota de (\\d+)/);
  const score = scoreMatch ? Number.parseInt(scoreMatch[1]) : null;

  // Determine security level based on score
  const getSecurityLevel = (score: number | null) => {
    if (score === null) return { color: "gray", text: "Indefinido", icon: Shield };
    if (score >= 70) return { color: "green", text: "Seguro", icon: ShieldCheck };
    if (score >= 40) return { color: "yellow", text: "Moderado", icon: Shield };
    return { color: "red", text: "Risco", icon: ShieldAlert };
  };

  const security = getSecurityLevel(score);

  const formatParagraph = (paragraph: string) => {
    let formattedParagraph = paragraph.replace(/\*/g, ""); // Remove asteriscos

    if (/^Reclamações Públicas/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (/^Fonte:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Número de Reclamações:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Tempo de Atividade do Site/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (/^Data de Registro do Domínio:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Tempo de Funcionamento:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Segurança do Site/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (/^Certificado SSL:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Protocolo HTTPS:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Google Safe Browsing:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Presença Online e Credibilidade/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (/^Perfis Oficiais em Redes Sociais:/.test(formattedParagraph)) {
      return (
        <>
          <h4 className="text-lg font-medium">{formattedParagraph}</h4>
          <ul className="list-disc list-inside ml-4">
            {(() => {
              // Extract links from the paragraph text
              const links = formattedParagraph.match(/\[(.*?)\]\((.*?)\)/g);
              return links
                ? links.map((link, index) => {
                    const [text, url] = link.replace(/[\[\]()]/g, "").split(/\((.*?)\)/)[0];
                    return (
                      <li key={index}>
                        <a href={url} target="_blank" className="text-blue-500">{text}</a>
                      </li>
                    );
                  })
                : null;
            })()}
          </ul>
        </>
      );
    }
    if (/^Sinais de Atividade Legítima:/.test(formattedParagraph)) {
      return (
        <>
          <h4 className="text-lg font-medium">{formattedParagraph}</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Postagens regulares nas redes sociais</li>
            <li>Interação com usuários e seguidores</li>
            <li>Seguidores reais e engajados</li>
          </ul>
        </>
      );
    }
    if (/^Atribuição de Score de Segurança/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (/^Justificativa:/.test(formattedParagraph)) {
      return <h4 className="text-lg font-medium">{formattedParagraph}</h4>;
    }
    if (/^Padrões de Insatisfação e Problemas Recorrentes/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (/^Conteúdo do Site/.test(formattedParagraph)) {
      return <h3 className="text-xl font-semibold mb-2">{formattedParagraph}</h3>;
    }
    if (formattedParagraph.includes("importante")) {
      return <strong className="text-red-500">{formattedParagraph}</strong>;
    }

    // Convert paragraph to bullet points if it contains multiple sentences
    if (formattedParagraph.split(".").length > 2) {
      const sentences = formattedParagraph.split(".").filter((sentence) => sentence.trim() !== "");
      return (
        <ul className="list-disc list-inside ml-4">
          {sentences.map((sentence, index) => (
            <li key={index}>{sentence.trim()}</li>
          ))}
        </ul>
      );
    }

    return <p className="text-base leading-7">{formattedParagraph}</p>;
  };

  const paragraphs = analysis.split("\n\n");

  return (
    <div className="space-y-6">
      <Card className="mt-4 shadow-md rounded-lg border border-gray-200">
        <CardHeader className="py-4 bg-gray-100 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold tracking-tight flex items-center text-[#363F4D]">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" /> {/* Adiciona o ícone */}
              {title}
            </CardTitle>
            {score !== null && (
              <Badge
                variant={
                  security.color === "green" ? "default" : security.color === "yellow" ? "secondary" : "destructive"
                }
                className="text-lg px-3 py-1 text-white ml-auto md:ml-4"
              >
                <security.icon className="w-5 h-5 mr-1" />
                {security.text} - {score}/100
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="py-8 px-10 pb-12 bg-white">
          <div className="prose prose-lg max-w-none dark:prose-invert leading-8">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="mb-6 last:mb-0">
                {formatParagraph(paragraph.trim())}
              </div>
            ))}
            <p className="text-base leading-7 mt-6">
              <strong>Observação:</strong> Esta análise foi realizada utilizando apenas fontes públicas e pesquisa de forma ética, respeitando as políticas de privacidade e os Termos de Serviço das fontes consultadas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
