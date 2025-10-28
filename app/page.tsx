"use client" // 1. Adicionado para habilitar hooks do React

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React, { useEffect, useRef } from 'react'; // 2. Hooks importados

export default function Home() {
  // Lógica e dados para o slider
  const sliderRef = useRef(null);
  const imageFiles = [
    "IMG_2277-11_1x.webp",
    "IMG_2277-25_1x.webp",
    "IMG_2278-1.webp",
    "IMG_2277-1_1x.webp",
    "IMG_2277-2_1x.webp",
    "IMG_2277-3_1x-1.webp",
    "IMG_2277-4_1x.webp",
    "IMG_2277-5_1x.webp",
    "IMG_2277-6_1x.webp",
    "IMG_2277-7_1x.webp",
    "IMG_2277-8_1x.webp",
    "IMG_2277-9_1x.webp",
    "IMG_2277-10_1x.webp",
    "IMG_2277-12_1x.webp",
  ];

  // 3. Lógica do slider (useEffect) integrada ao componente Home
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || imageFiles.length === 0) return;

    let intervalId;

    const startAutoPlay = () => {
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        const firstSlide = slider.querySelector('.slide-item');
        if (!firstSlide) {
          clearInterval(intervalId);
          return;
        }

        const slideWidth = firstSlide.offsetWidth;
        const style = window.getComputedStyle(firstSlide);
        const margin = parseFloat(style.marginRight);
        const scrollStep = slideWidth + margin;

        const isNearEnd = (slider.scrollLeft + slider.clientWidth + 1) >= slider.scrollWidth;

        if (isNearEnd) {
          slider.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          slider.scrollBy({
            left: scrollStep,
            behavior: 'smooth'
          });
        }
      }, 3000);
    };

    const stopAutoPlay = () => {
      clearInterval(intervalId);
    };

    startAutoPlay();
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    return () => {
      stopAutoPlay();
      if (slider) { // Adiciona verificação se slider existe no cleanup
        slider.removeEventListener('mouseenter', stopAutoPlay);
        slider.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, [imageFiles.length]);


  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - MODIFICADA CONFORME A IMAGEM */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance font-serif italic underline">
                ¡FINALMENTE! La respuesta para los que no aguantan un día más en su trabajo.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Presentación revela cómo generar entre 100 a 500 dólares al día con la metodología de
                <span className="block font-bold text-2xl md:text-3xl mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                  “Productos extranjeros virales”
                </span>
              </p>
              <p className="text-lg text-gray-300">
                (Cualquier persona puede ganar dinero en menos de 7 días... te pruebo cómo)
              </p>

              <div className="pt-8 space-y-2">
                <p className="text-sm font-bold tracking-wider uppercase">
                  ¡DALE CLICK ABAJO!
                </p>
                <p className="text-xs text-gray-400">
                  (El video inicia en un momento)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FIM DA SEÇÃO MODIFICADA */}


      {/* PINTA, dibuja online Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">PDTA: ¿Si un niño de 13 años pudo, por qué tú no?</h2>

          <div className="slider-container">
            {/* 4. A referência (ref) foi adicionada aqui */}
            <div className="image-slider" ref={sliderRef}>
              {imageFiles.map((fileName, index) => (
                <div
                  key={index}
                  className="slide-item"
                >
                  <img
                    src={`/image/${fileName}`}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para todos los géneros Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Para todos los géneros...</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Funcionalidades Avançadas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ferramenta profissional de desenho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Interface intuitiva e fácil de usar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Compartilhe suas criações</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted/20 rounded-lg border border-primary/20 flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground">Imagem {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">+ 540 Planos</h2>
            <p className="text-muted-foreground text-lg">Escolha o plano perfeito para você</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Básico</h3>
                <div className="text-4xl font-bold">Grátis</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Acesso básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Ferramentas essenciais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Suporte por email</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Começar Grátis
                </Button>
              </div>
            </Card>

            {/* Plano Premium */}
            <Card className="p-6 bg-primary/10 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="text-4xl font-bold">
                  R$7 <span className="text-lg font-normal text-muted-foreground">USD</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Tudo do Básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Ferramentas avançadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Suporte prioritário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Sem anúncios</span>
                  </li>
                </ul>
                <Button className="w-full">Assinar Agora</Button>
              </div>
            </Card>

            {/* Plano Pro */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="text-4xl font-bold">
                  R$15 <span className="text-lg font-normal text-muted-foreground">USD</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Tudo do Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Recursos ilimitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">Suporte 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">API access</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Falar com Vendas
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl space-y-20">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-muted/20 rounded-lg border border-primary/20 flex items-center justify-center">
              <p className="text-muted-foreground">Imagem Feature 1</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Crie sem limites</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <Button>Explorar Recursos</Button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold">Compartilhe suas criações</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <Button>Ver Galeria</Button>
            </div>
            <div className="aspect-video bg-muted/20 rounded-lg border border-primary/20 flex items-center justify-center order-1 md:order-2">
              <p className="text-muted-foreground">Imagem Feature 2</p>
            </div>
          </div>

          {/* Feature 3 -- BLOCO CORRIGIDO */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-muted/20 rounded-lg border border-primary/20 flex items-center justify-center">
              <p className="text-muted-foreground">Imagem Feature 3</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Ferramentas profissionais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p> 
              {/* AQUI ESTAVA O ERRO </Capa>, AGORA ESTÁ CORRETO COM </p> */}
              <Button>Conhecer Ferramentas</Button>
            </div>
          </div>
          {/* FIM DO BLOCO CORRIGIDO */}

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Aja como 50 anos e além...</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Veja o que nossos usuários dizem</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="p-4 bg-card border-border">
                <div className="space-y-3">
                  <div className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Foto {i}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Nome {i}</p>
                    <p className="text-sm text-muted-foreground">Profissão</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl space-y-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`space-y-4 ${i % 2 === 0 ? "order-2 md:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold">Recurso Especial {i}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Benefício importante 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Benefício importante 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Benefício importante 3</span>
                  </li>
                </ul>
              </div>
              <div
                className={`aspect-video bg-muted/20 rounded-lg border border-primary/20 flex items-center justify-center ${i % 2 === 0 ? "order-1 md:order-2" : ""}`}
              >
                <p className="text-muted-foreground">Imagem Recurso {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Você está a 10 anos, comece hoje o programa...
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Não perca mais tempo. Transforme sua vida agora mesmo.
          </p>
          <Button size="lg" className="text-lg px-12">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Final Image Grid */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué más de 12 años...</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted/20 rounded-lg border border-primary/20 flex items-center justify-center"
              >
                <p className="text-xs text-muted-foreground">Imagem {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              "Como funciona o método?",
              "Quanto tempo leva para ver resultados?",
              "Posso cancelar a qualquer momento?",
              "Há garantia de devolução do dinheiro?",
              "Preciso de experiência prévia?",
              "O conteúdo é atualizado regularmente?",
            ].map((question, i) => (
              <Card key={i} className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{question}</h3>
                  <span className="text-muted-foreground">+</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Método AURA</h4>
              <p className="text-sm text-muted-foreground">
                Transformando vidas através da educação e desenvolvimento pessoal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Recursos</li>
                <li>Preços</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sobre</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            © 2025 Método AURA. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}
