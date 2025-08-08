export default function Skills() {
  return (
    <section id="skillSection" className="py-16">
      <div className="container mx-auto text-white text-center px-4">
        <h1 className="text-[#6A0DAD] border-b border-[#6A0DAD] inline-block pb-2 mb-10 text-3xl">
          Habilidades
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {/* HTML */}
          <div className="w-40 p-4 border rounded-2xl bg-black-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5"
              className="mx-auto"
              width={80}
            />
            <h5 className="mt-2 text-lg font-medium">HTML5</h5>
            <p className="text-sm mt-1">
              Define a estrutura da página, organizando títulos, textos, imagens e outros elementos.
            </p>
          </div>

          {/* CSS */}
          <div className="w-40 p-4 border rounded-2xl bg-black-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
              className="mx-auto"
              width={80}
            />
            <h5 className="mt-2 text-lg font-medium">CSS3</h5>
            <p className="text-sm mt-1">
              Controla o visual do site, incluindo cores, espaçamentos, fontes, animações e layouts.
            </p>
          </div>

          {/* JavaScript */}
          <div className="w-40 p-4 border rounded-2xl bg-black-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="mx-auto"
              width={80}
            />
            <h5 className="mt-2 text-lg font-medium">JavaScript</h5>
            <p className="text-sm mt-1">
              Permite interatividade e dinamismo nas páginas, como menus, formulários e efeitos.
            </p>
          </div>

          {/* Bootstrap */}
          <div className="w-40 p-4 border rounded-2xl bg-black-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="mx-auto"
              width={80}
            />
            <h5 className="mt-2 text-lg font-medium">Bootstrap</h5>
            <p className="text-sm mt-1">
              Facilita o desenvolvimento com estilos prontos e design responsivo para diversos dispositivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
