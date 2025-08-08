export default function About() {
  return (
    <section id="aboutMeSection">
      <div
        className="container mx-auto text-center text-white spacing"
        style={{ maxHeight: '600px' }}
      >
        <h1 className="text-2xl">Olá, me chamo</h1>
        <h1 className="text-6xl font-bold text-[#6A0DAD]">Luiz Eduardo</h1>
        <p className="text-2xl mt-2">E sou um Dev. Front-End</p>
      </div>

      <div className="container mx-auto text-white text-center mt-10 py-10 px-4">
        <h1 className="text-[#6A0DAD] border-b border-[#6A0DAD] inline-block pb-2 mb-6 text-3xl">
          Sobre mim
        </h1>
        <div className="max-w-2xl mx-auto space-y-4 text-lg">
          <p>
            Tenho 16 anos e estudo na EEEP Luiz Gonzaga Fonseca Mota, no curso técnico de Informática.
            Também faço parte do Curso de Front-End no Amontada Valley, onde venho me aprofundando no
            universo do desenvolvimento web.
          </p>
          <p>
            Sou apaixonado por tecnologia e tudo o que ela pode transformar. Gosto de criar soluções
            digitais, explorar novas ideias e aprender constantemente.
          </p>
          <p>
            A cada projeto, busco evoluir como desenvolvedor e entender mais sobre como a tecnologia
            pode impactar o dia a dia das pessoas. Esse portfólio é um reflexo da minha jornada até aqui.
            Fique à vontade para explorar!
          </p>
        </div>
      </div>
    </section>
  );
}
