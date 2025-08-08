import Image from "next/image";

export default function Works() {
  return (
    <section id="worksSection" className="mt-20">
      <div className="container mx-auto text-white text-center px-4">
        <h1 className="text-[#6A0DAD] border-b border-[#6A0DAD] inline-block pb-2 mb-10 text-3xl">
          Trabalhos
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Projeto 1 - ChatAI */}
          <div className="w-80 p-3">
            <div className="border rounded-lg bg-black-card">
              <Image
                src="/img/chatAi.svg"
                alt="ChatAI"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">ChatAi.help</h5>
                <p className="text-sm mb-4">
                  ChatAI.help é um app que usa inteligência artificial para ajudar vítimas de discriminação racial com orientações, informações úteis e apoio direto por meio de uma conversa acessível.
                </p>
                <a
                  href="https://github.com/Robotica-GM/chataihelp-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#6A0DAD] text-white px-4 py-2 rounded"
                >
                  Ver no Github
                </a>
              </div>
            </div>
          </div>

          {/* Projeto 2 - AmoTur */}
          <div className="w-80 p-3">
            <div className="border rounded-lg bg-black-card">
              <Image
                src="/img/amo-logo.svg"
                alt="AmoTur"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">Mapa AmoTur</h5>
                <p className="text-sm mb-4">
                  O mapa AmoTur é uma plataforma que usa tecnologia para promover o turismo local, conectando visitantes e moradores a pontos turísticos, culturais e históricos da região por meio de um mapa interativo e fácil de usar.
                </p>
                <a
                  href="https://github.com/Eduardoskei/amotur-front"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#6A0DAD] text-white px-4 py-2 rounded"
                >
                  Ver no Github
                </a>
              </div>
            </div>
          </div>

          {/* Projeto 3 - Portfólio */}
          <div className="w-80 p-3">
            <div className="border rounded-lg bg-black-card">
              <Image
                src="/img/portifolio.svg"
                alt="Portfólio"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">Meu portfólio</h5>
                <p className="text-sm mb-4">
                  Portfólio desenvolvido com Bootstrap para apresentar projetos de forma responsiva e moderna, destacando habilidades em front-end e proporcionando uma navegação clara e objetiva.
                </p>
                <a
                  href="https://github.com/Eduardoskei/Portifolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#6A0DAD] text-white px-4 py-2 rounded"
                >
                  Ver no Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
