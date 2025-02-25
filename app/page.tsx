"use client"

import type React from "react"

import { useState, useRef } from "react" // Import useRef
import { Database, Zap, Search, AlertTriangle, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"
import { AnalysisReport } from "@/components/analysis-report"
import StepCard from "@/components/step-card";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const analysisSectionRef = useRef<HTMLElement>(null); // Create a ref for the analysis section
  const { toast } = useToast();

 const isValidUrl = (string: string) => {
    try {
      const newUrl = new URL(string);
      const hasValidProtocol =
        newUrl.protocol === "http:" || newUrl.protocol === "https:";
      const hasValidHostname = newUrl.hostname.includes("."); // Verifica se o hostname contém um ponto (ex: exemplo.com)

      return hasValidProtocol && hasValidHostname;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      toast({
        title: "Erro!",
        description: "Por favor, insira uma URL. ex: https://exemplo.com",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(url)) {
      toast({
        title: "Erro!",
        description: "Por favor, insira uma URL válida (ex: https://exemplo.com).",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      // Scroll to the analysis section
      setAnalysis(null)
      analysisSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao analisar o site");
      }

     const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      toast({
        title: "Erro!",
        description:
          error instanceof Error ? error.message : "Erro ao analisar o site",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
          <div className="container relative py-20 text-center md:py-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4" variant="secondary">
                Proteção Avançada
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-4">
                Como saber se o site é seguro?
              </h1>
              <p className="mx-auto mt-6 max-w-[700px] text-[#5F6368] md:text-xl">
                Verifique se um site é seguro apenas digitando a URL do site que você deseja acessar e nossa ferramenta detecta se o site é confiável para comprar ou não.
              </p>
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-[600px] flex-col space-y-2 px-4 sm:flex-row sm:space-y-0 sm:space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Digite a URL"
                    className="h-12 pl-10 pr-4 rounded-full w-full focus:outline-[#1E3F88]"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    type="url"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-12 w-full sm:w-auto px-8 bg-[#1E3F88] text-white shadow-lg hover:shadow-xl transition-all rounded-full hover:scale-105 relative"
                >
                  Verificar site
                  <span className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse"></span>
                  <span className="absolute inset-0 rounded-full border-2 border-[#1E3F88] animate-spin-slow"></span>
                </Button>
              </form>
              <p className="mt-4 text-sm text-[#5F6368]">
                Ao verificar o site, você concorda com nossos{" "}
                <Link href="/termos" className="text-primary hover:underline">
                  termos de serviço
                </Link>{" "}
                e{" "}
                <Link href="/privacidade" className="text-primary hover:underline">
                  política de privacidade
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>

        {/* Analysis Results Section */}
        {(isLoading || analysis) && (
          <section className="container py-12" ref={analysisSectionRef}>
            <div className="max-w-4xl mx-auto">
              {isLoading ? <LoadingAnimation /> : analysis ? <AnalysisReport analysis={analysis} /> : null}
            </div>
          </section>
        )}

        {/* What does it do section */}
        <section className="container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              O que o Verificador de sites faz?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              O Verificador de site é uma ferramenta gratuita projetada para ajudar você a se
              prevenir contra golpes na internet e saber se o site é confiável.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 border-none">
                <div className="rounded-full w-12 h-12 bg-green-100 flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Análise Rápida</h3>
                <p className="text-sm text-muted-foreground">Verificação instantânea de URLs suspeitas</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 border-none">
                <div className="rounded-full w-12 h-12 bg-red-100 flex items-center justify-center mb-4 mx-auto">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Detecção de Ameaças</h3>
                <p className="text-sm text-muted-foreground">Identificação de sites maliciosos e fraudulentos</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300 border-none">
                <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Relatório Detalhado</h3>
                <p className="text-sm text-muted-foreground">Informações completas sobre a segurança do site</p>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Stats Section with updated design */}
        <section className="border-y bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "10M+", label: "URLs verificadas", color: "from-blue-500 to-blue-600" },
                { number: "99.9%", label: "Precisão", color: "from-green-500 to-green-600" },
                { number: "24/7", label: "Monitoramento", color: "from-purple-500 to-purple-600" },
                { number: "100k+", label: "Usuários ativos", color: "from-orange-500 to-orange-600" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-20 md:py-32 scroll-mt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16">
              Por que escolher nosso{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Verificador de sites?
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group bg-gradient-to-br from-white to-gray-50 border-none">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Bancos de dados massivos</h3>
                      <p className="mt-2 text-muted-foreground">
                        Nossa base de dados é constantemente atualizada com informações sobre sites maliciosos e ameaças
                        em tempo real.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 transition-all hover:shadow-lg group bg-gradient-to-br from-white to-gray-50 border-none">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Machine Learning</h3>
                      <p className="mt-2 text-muted-foreground">
                        Algoritmos avançados de IA para detectar ameaças desconhecidas e padrões suspeitos em tempo
                        real.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 transition-all hover:shadow-lg group bg-gradient-to-br from-white to-gray-50 border-none">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Alertas em tempo real</h3>
                      <p className="mt-2 text-muted-foreground">
                        Receba notificações instantâneas sobre ameaças e mantenha-se protegido contra novos riscos.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-blue-600/20 blur-3xl opacity-70"></div>
                <div className="relative aspect-square rounded-2xl border bg-background p-2 shadow-2xl">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-site-WbdnVSBPQAWIbvplAjqLwnAcVstOll.svg"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-site-vermelho-GhH5wLxv18zk38NR1q5BVxdYKqTzil.svg"
                    />
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-site-WbdnVSBPQAWIbvplAjqLwnAcVstOll.svg"
                      alt="Verificação de site seguro"
                      className="w-full h-full object-contain"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Steps Section */}
        <section id="how-it-works" className="relative overflow-hidden bg-white dark:bg-gray-900 scroll-mt-16">
          <div className="container py-20 md:py-32">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16">
              Como funciona?
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <StepCard
                title="Insira o link"
                description="Digite a URL do site que você deseja verificar."
                icon={<Search className="h-6 w-6" />}
              />
              <StepCard
                title="Aguarde a análise"
                description="Nossa ferramenta irá analisar o site em busca de ameaças."
                icon={<Zap className="h-6 w-6" />}
              />
              <StepCard
                title="Veja os resultados"
                description="Receba um relatório detalhado sobre a segurança do site."
                icon={<CheckCircle className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

        {/* New URL Security Section */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Como posso saber se o site é confiavel?
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              O Verificador de site é uma ferramenta essencial para responder a essa pergunta. Ele analisa sites e URLs em
              busca de malwares, phishing, botnets e sites falsos, ajudando você a navegar na internet com mais
              segurança e assim evitar golpes.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12">
              <h3 className="text-center text-2xl font-bold mb-4">Quer verificar se um site é seguro?</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Um URL mal-intencionado é um link perigoso que pode te levar para sites falsos ou infectados. Ao clicar
                em um URL mal-intencionado, você pode ter seus dados roubados ou seu dispositivo infectado com malware.
                Por isso, é fundamental verificar se um site é seguro antes de clicar em qualquer link.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-20 md:py-32 scroll-mt-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Perguntas frequentes
            </h2>
            <div className="mx-auto mt-12 max-w-[800px] space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Como posso identificar um site suspeito?",
                    answer:
                      "Verifique se o URL possui erros de digitação, caracteres estranhos ou domínios suspeitos. Nossa ferramenta analisa automaticamente estes e outros fatores de risco.",
                  },
                  {
                    question: "O que acontece se eu clicar em um link mal-intencionado?",
                    answer:
                      "Você pode ser exposto a malware, phishing ou ter seus dados comprometidos. Por isso é importante verificar os links antes de acessá-los.",
                  },
                  {
                    question: "Um verificador de sites pode analisar um site inteiro de uma vez?",
                    answer:
                      "Sim, nossa ferramenta pode analisar sites completos, incluindo todos os seus subdomínios e páginas internas.",
                  },
                  {
                    question: "O serviço é gratuito?",
                    answer:
                      "Sim! Nosso serviço e completamente gratuito, para ajudar você a navegar com seguranca na internet.",
                  },
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border-t bg-gray-50 dark:bg-gray-900">
            <div className="container py-20 text-center md:py-32">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para navegar com segurança?
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Comece agora mesmo a verificar a segurança dos sites que você acessa.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="min-w-[200px] bg-[#3073F0] hover:bg-[#3073F0]/90 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Verificar site
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }
