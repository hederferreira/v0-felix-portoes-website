import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  Wrench,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Settings,
  Zap,
  PenTool,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Segurança e Tecnologia para o seu Lar
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Instalação e manutenção de portões automáticos com a qualidade e confiança que você merece.
                    Especialistas em soluções residenciais e comerciais.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contato">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold text-white">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#servicos">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary"
                    >
                      Conheça Nossos Serviços
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Atendimento Rápido</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Garantia de Serviço</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl shadow-2xl sm:w-full lg:order-last border-4 border-white/10">
                <Image
                  src="/hero-wide-facade.jpg"
                  alt="Portão Automático Moderno em Fachada"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-white/5 skew-x-12 translate-x-20" />
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg md:w-4/5 mx-auto border-4 border-muted group">
                <Image
                  src="/fernando-felix-portrait.jpg"
                  alt="Fernando Felix - Especialista em Portões"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <p className="text-white font-bold text-xl">Fernando Felix</p>
                  <p className="text-white/80 text-sm">Fundador e Especialista Técnico</p>
                </div>
                {/* Small overlay image */}
                <div className="absolute -bottom-6 -right-6 w-1/3 aspect-square rounded-lg border-4 border-white shadow-xl overflow-hidden hidden md:block">
                  <Image
                    src="/technician-hands-detail.jpg"
                    alt="Detalhe técnico"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground font-medium text-primary">
                  Sobre o Profissional
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Experiência e Dedicação em Cada Detalhe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Olá, sou Fernando Felix. Fundei a Félix Portões com um objetivo claro: oferecer um serviço que combine
                  excelência técnica com um atendimento verdadeiramente humano.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Com anos de experiência no mercado de automação, entendo que um portão automático não é apenas uma
                  conveniência, mas um item essencial para a segurança da sua família. Minha motivação é garantir que
                  cada cliente se sinta seguro e satisfeito com o funcionamento perfeito de seus equipamentos.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg border border-border">
                    <Wrench className="h-6 w-6 text-secondary" />
                    <span className="font-semibold text-primary">Manutenção Especializada</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg border border-border">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                    <span className="font-semibold text-primary">Segurança Garantida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-primary font-medium border border-primary/10">
                Nossos Serviços
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Soluções Completas para seu Portão
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Do reparo rápido à instalação completa, cuidamos de tudo para você.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden">
                <div className="aspect-video w-full relative">
                  <Image
                    src="/tilting-gate-installation.jpg"
                    alt="Instalação de Portão Basculante"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <Settings className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle className="text-primary">Instalação de Portões</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Instalação profissional de portões basculantes e deslizantes, garantindo o alinhamento perfeito e
                    funcionamento suave desde o primeiro dia.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden">
                <div className="aspect-video w-full relative">
                  <Image src="/preventive-maintenance.jpg" alt="Manutenção Preventiva" fill className="object-cover" />
                </div>
                <CardHeader>
                  <Wrench className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle className="text-primary">Manutenção Preventiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Evite problemas futuros com nossa revisão completa. Lubrificação, ajustes e testes de segurança para
                    aumentar a vida útil do seu equipamento.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden">
                <div className="aspect-video w-full relative">
                  <Image src="/motor-replacement.jpg" alt="Troca de Motor" fill className="object-cover" />
                </div>
                <CardHeader>
                  <Zap className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle className="text-primary">Troca de Peças e Motor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Substituição de motores queimados, placas eletrônicas, controles e peças desgastadas por componentes
                    originais e de alta qualidade.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden">
                <div className="aspect-video w-full relative">
                  <Image src="/sliding-gate-detail.jpg" alt="Ajustes e Reparos" fill className="object-cover" />
                </div>
                <CardHeader>
                  <PenTool className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle className="text-primary">Ajustes e Reparos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Seu portão está fazendo barulho ou travando? Realizamos diagnósticos precisos e reparos rápidos para
                    restaurar o funcionamento ideal.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden">
                <div className="aspect-video w-full relative bg-muted flex items-center justify-center">
                  <ShieldCheck className="h-16 w-16 text-secondary/50" />
                </div>
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle className="text-primary">Configuração de Controles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Codificação de novos controles remotos e configuração de sistemas de segurança para garantir que
                    apenas você tenha acesso.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground border-none shadow-md overflow-hidden flex flex-col justify-center">
                <CardHeader>
                  <Phone className="h-10 w-10 mb-2 text-secondary" />
                  <CardTitle className="text-white">Precisa de Ajuda?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90 text-base mb-4">
                    Não sabe qual é o problema? Entre em contato e faremos uma avaliação.
                  </CardDescription>
                  <Button variant="secondary" className="w-full font-semibold text-white">
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="projetos" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Galeria de Projetos</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Confira alguns dos nossos trabalhos recentes e transformações realizadas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] border border-muted">
                <Image
                  src="/hero-modern-gate.jpg"
                  alt="Residência Modernista"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium border border-secondary px-4 py-2 rounded-md">Ver Detalhes</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] border border-muted">
                <Image
                  src="/gate-in-motion.jpg"
                  alt="Portão em Movimento"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium border border-secondary px-4 py-2 rounded-md">Ver Detalhes</p>
                </div>
              </div>
              {[3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg aspect-[4/3] border border-muted">
                  <Image
                    src={`/automatic-gate-installation-project-.jpg?key=r6cv0&height=400&width=600&query=automatic gate installation project ${item}`}
                    alt={`Projeto ${item}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-medium border border-secondary px-4 py-2 rounded-md">Ver Detalhes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">
              O que nossos clientes dizem
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-foreground border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "O Fernando foi super atencioso e resolveu o problema do meu portão que estava travando há meses.
                    Serviço rápido e preço justo!"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                      MC
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Maria Clara</p>
                      <p className="text-xs text-muted-foreground">Residencial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white text-foreground border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Instalação impecável do motor novo. Explicou tudo sobre o funcionamento e manutenção. Recomendo
                    muito a Félix Portões."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                      RS
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Roberto Silva</p>
                      <p className="text-xs text-muted-foreground">Condomínio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white text-foreground border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Profissionalismo nota 10. Chegou no horário combinado e deixou tudo limpo após o serviço. Confiança
                    total."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                      AL
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">Ana Lúcia</p>
                      <p className="text-xs text-muted-foreground">Comercial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog/Tips Section */}
        <section id="dicas" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Dicas do Especialista</h2>
                <p className="text-muted-foreground">Informações úteis para aumentar a vida útil do seu equipamento.</p>
              </div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Ver todas as dicas
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group cursor-pointer space-y-3">
                <div className="overflow-hidden rounded-lg aspect-video border border-muted">
                  <Image
                    src="/gate-maintenance-lubrication.jpg"
                    alt="Manutenção"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-secondary transition-colors text-primary">
                    Cuidados preventivos que aumentam a vida útil
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Aprenda a identificar os sinais de que seu portão precisa de lubrificação ou ajustes antes que o
                    motor quebre.
                  </p>
                  <span className="text-secondary text-sm font-medium flex items-center">
                    Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="group cursor-pointer space-y-3">
                <div className="overflow-hidden rounded-lg aspect-video border border-muted">
                  <Image
                    src="/gate-motor-problem.jpg"
                    alt="Problemas no Motor"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-secondary transition-colors text-primary">
                    Como identificar problemas no motor
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Barulhos estranhos? Lentidão? Saiba diferenciar um problema simples de algo que exige um técnico.
                  </p>
                  <span className="text-secondary text-sm font-medium flex items-center">
                    Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="group cursor-pointer space-y-3">
                <div className="overflow-hidden rounded-lg aspect-video border border-muted">
                  <Image
                    src="/sliding-vs-swinging-gate.jpg"
                    alt="Modelos de Portões"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-secondary transition-colors text-primary">
                    Diferenças entre modelos de portões
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Basculante ou deslizante? Descubra qual é o melhor modelo para a sua garagem e necessidade.
                  </p>
                  <span className="text-secondary text-sm font-medium flex items-center">
                    Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Entre em Contato</h2>
                  <p className="text-muted-foreground text-lg">
                    Pronto para melhorar a segurança da sua casa? Preencha o formulário ou chame no WhatsApp para um
                    orçamento sem compromisso.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Telefone / WhatsApp</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">E-mail</p>
                      <p className="text-muted-foreground">contato@felixportoes.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Área de Atendimento</p>
                      <p className="text-muted-foreground">São Paulo e Região Metropolitana</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none font-bold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 text-foreground shadow-xl border border-border">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-primary">
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome" className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-primary">
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(00) 00000-0000" className="bg-muted/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary">
                      E-mail
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-primary">
                      Serviço Desejado
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="instalacao">Instalação de Portão</option>
                      <option value="manutencao">Manutenção Preventiva</option>
                      <option value="reparo">Reparo / Conserto</option>
                      <option value="motor">Troca de Motor</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva brevemente o que você precisa..."
                      className="min-h-[100px] bg-muted/50"
                    />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full text-lg font-bold text-white">
                    Enviar Solicitação
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="bg-secondary text-secondary-foreground p-1.5 rounded-md">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Félix Portões</span>
              </div>
              <p className="text-sm text-white/80">
                Especialistas em automação residencial e comercial. Segurança e qualidade para o seu patrimônio.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Serviços</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors">
                    Instalação de Portões
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors">
                    Manutenção Preventiva
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors">
                    Troca de Motores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors">
                    Assistência Técnica
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Empresa</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="#sobre" className="hover:text-secondary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#projetos" className="hover:text-secondary transition-colors">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="#dicas" className="hover:text-secondary transition-colors">
                    Blog e Dicas
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-secondary transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Atendimento</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" /> (11) 99999-9999
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" /> contato@felixportoes.com.br
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" /> São Paulo, SP
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Félix Portões. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
