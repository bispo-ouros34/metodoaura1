"use client" // 1. Adicionado para habilitar hooks do React

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React, { useEffect, useRef } from 'react'; // 2. Hooks importados

// Importando a fonte Rethink Sans
import { Rethink_Sans } from 'next/font/google';

// Instanciando a fonte com o peso 400
const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400'], // Peso 400 conforme solicitado
});

export default function Home() {
  // Lógica e dados para o slider
  const sliderRef = useRef(null);
  const imageFiles = [
    "IMG_2277-11_1x.webp",
    "IMG_2277-25_1x.webp",
    "IMG_2278-1.webp",
    "IMG_2277-1_x.webp",
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

  // Lógica do slider (useEffect)
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
      if (slider) {
        slider.removeEventListener('mouseenter', stopAutoPlay);
        slider.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, [imageFiles.length]);


  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section - CORREÇÃO DO GRADIENTE E QUEBRAS */}
      <section className="relative min-h-screen flex items-start justify-center px-4 pt-16 pb-20 bg-black text-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-3 md:space-y-6">

              <h1 className="text-xl md:text-3xl lg:text-4xl font-normal leading-snug text-balance font-serif italic underline">
                ¡FINALMENTE! La respuesta para los que no aguantan un día más en su trabajo.
              </h1>

              {/* CORREÇÃO: "Productos" movido para dentro da span. Quebras ajustadas */}
              <p className="text-lg md:text-4xl text-white leading-tight md:leading-snug">
                Presentación revela cómo generar<br className="md:hidden" /> {/* Mobile */}
                {" "}entre 100 a<br className="hidden md:inline" /> {/* Desktop */}
                {" "}500 dólares al día con la<br className="md:hidden" /> {/* Mobile */}
                {" "}metodología de<br /> {/* Quebra Universal */}
                <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  “Productos<br className="md:hidden"/> {/* Quebra Mobile dentro da Span */}
                  {" "}extranjeros virales”
                </span>
              </p>

              <p className="text-base md:text-2xl text-gray-300">
                (Cualquier persona puede ganar dinero<br className="md:hidden" />
                {" "}en menos de 7 días... te pruebo cómo)
              </p>

              <div className="pt-4 md:pt-8">
                <p className="text-sm font-bold tracking-wider uppercase">
                  ¡DALE CLICK ABAJO!
                </p>
                <p className="text-base text-gray-400">
                  (El video inicia en un momento)
                </p>
              </div>
            </div>
          </div>

          {/* --- ESPAÇO PARA O VÍDEO VTURB --- */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="w-full aspect-video bg-muted/20 rounded-lg border border-gray-700 flex items-center justify-center">
              <p className="text-gray-400">Espaço reservado para o vídeo (Vturb)</p>
            </div>
          </div>
          {/* Cole o script Vturb aqui */}

        </div>
      </section>
      {/* FIM DA SEÇÃO HERO */}


      {/* PINTA, dibuja online Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl leading-tight md:text-[48px] md:leading-snug font-bold text-center mb-12">
            PDTA: ¿Si un niño de 13{/* Quebra Mobile */}
            <br className="md:hidden" /> años{/* Quebra Desktop */}
            <br className="hidden md:inline" /> pudo,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              por qué tú no?
            </span>
          </h2>

          <div className="slider-container">
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

      {/* --- SEÇÃO "DOS OPCIONES" --- */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">

          <h2 className="text-[28px] leading-tight md:text-[56px] md:leading-[63px] text-center mb-16">
            <span className="font-normal">Ahora tienes</span>{" "}
            <span className="font-serif italic font-normal underline">dos opciones...</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto relative items-stretch">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <span className="text-blue-600 font-bold text-2xl">?</span>
              </div>
            </div>

            {/* Coluna 1: Opção #1 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 text-center z-10 h-full">
              <h3 className={`text-[28px] leading-[34px] mb-6 ${rethinkSans.className}`}>
                <span className="font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">Opción #1:</span>
                {" "}Continuar con una vida sin Activos extranjeros virales....
              </h3>
              
              <img
                src="/image/Celularsinventas.webp"
                alt="Opção 1 - Celular sem vendas"
                className="w-full max-w-xs mx-auto rounded-2xl"
              />
            </div>

            {/* Coluna 2: Opção #2 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 text-center z-10 h-full">
              <h3 className={`text-[28px] leading-[34px] mb-6 ${rethinkSans.className}`}>
                <span className="font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">Opción #2:</span>
                {" "}Vivir de los Activos extranjeros virales
              </h3>
              
              <img
                src="/image/ahorasi.webp"
                alt="Opção 2 - Celular com vendas"
                className="w-full max-w-xs mx-auto rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>
      {/* --- FIM DA SEÇÃO DOS OPCIONES --- */}

      {/* --- SEÇÃO BACKGROUD IMAGE --- */}
      <section
        className="py-20 px-4 bg-black text-white bg-cover bg-center relative min-h-[70vh] flex items-center"
        style={{ backgroundImage: "url('/image/Slice-3-3.avif')" }}
      >
        {/* Overlay removido */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div></div> {/* Coluna Esquerda Vazia */}

            {/* Coluna Direita (Conteúdo) */}
            <div className="space-y-8">
              <h2 className="font-bold text-2xl md:text-3xl leading-tight">
                ¿Cómo se va a ver tu vida luego de tener tu propio <strong className="text-white">ACTIVO EXTRANJERO VIRAL?</strong>
              </h2>

              {/* Bullet Point 1 */}
              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl mt-1">💲</span>
                <p className="text-base text-gray-200">
                  El primer día que saques tu ACTIVO extranjero es altamente{' '}
                  <strong className="text-white">PROBABLE QUE VENDA EN MENOS DE 5 HORAS</strong> - Recuerda: "{/* Aspas fora */}
                  <strong className="text-white">SON PRODUCTOS VIRALES</strong>{/* Aspas fora */} "
                </p>
              </div>

              {/* Bullet Point 2 */}
              <div className="flex items-start gap-4">
                <span className="text-purple-400 text-2xl mt-1">💸</span>
                <p className="text-base text-gray-200">
                  Nunca te va a faltar el dinero en tu mesa ya que aprenderás la habilidad de{' '}
                  <strong className="text-white">tener tu propio activo viral con AURA</strong>
                </p>
              </div>

              {/* Bullet Point 3 */}
              <div className="flex items-start gap-4">
                 <span className="text-purple-400 text-2xl mt-1">🌍</span>
                <p className="text-base text-gray-200">
                  Podrás vender <strong className="text-white">a todo el mundo incluso sin saber otros idiomas</strong>. Lo que significa que podrás ganar lo mismo o más que empresarios de Estados Unidos, Europa y otras partes del mundo. (<strong className="text-white">Y lo mejor… sin visa.</strong>)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIM DA NOVA SEÇÃO --- */}


      {/* NOVA SEÇÃO: +140 Países */}
      <section
        className="py-20 px-4 bg-black text-white bg-cover bg-center relative flex items-center min-h-[70vh]"
        style={{ backgroundImage: "url('/image/Slice-4-1.avif')" }}
      >
        <div className="container mx-auto max-w-6xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              +140 Países
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Hemos vendido ACTIVOS <br className="md:hidden"/>
              EXTRANJEROS en más de 140 <br className="md:hidden"/>
              países y en más de 20 idiomas y <br className="md:hidden"/>
              sabemos cómo enseñarte a hacerlo.
            </p>

            {/* Cards de Vendas */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <Card className="p-4 bg-gray-900/50 border border-gray-700 w-full sm:w-auto flex-shrink-0">
                <p className="font-bold text-gray-300 mb-2">Ventas por País</p>
                <p className="text-sm text-gray-400">Total: 149 registros</p>
              </Card>
              <Card className="p-4 bg-gray-900/50 border border-gray-700 w-full sm:w-auto">
                <p className="font-bold text-gray-300 mb-2">Países con más Ventas <span className="text-red-500">🔥</span></p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>1. Estados Unidos</li>
                  <li>2. Canadá</li>
                  <li>3. Reino Unido</li>
                  <li>4. Alemania</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* O "mapa" é a imagem de fundo, não um elemento separado aqui */}
          <div>
            {/* Este div está vazio porque a imagem do mapa é o background da seção */}
          </div>
        </div>
      </section>
      {/* FIM DA NOVA SEÇÃO: +140 Países */}


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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué más de 12 anos...</h2>
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
