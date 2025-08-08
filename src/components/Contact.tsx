'use client'

import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contactSection" className="mt-5">
      <div className="container mx-auto text-center text-white px-4">
        <h1 className="border-b-2 border-violet-500 text-violet-500 text-3xl font-bold mb-6">
          Entre em contato
        </h1>

        <div className="flex justify-center items-center gap-5 mb-6">
          <a
            href="https://br.linkedin.com/in/eduardo-albuquerque-91b1422a4?trk=people-guest_people_search-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://github.com/Eduardoskei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/github-white.svg"
              alt="GitHub"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://www.instagram.com/_edualbuq_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/instagram.svg"
              alt="Instagram"
              width={54}
              height={54}
            />
          </a>
        </div>

        <form className="mx-auto mb-10 max-w-md">
          <input
            type="text"
            placeholder="Digite o seu nome"
            className="form-control w-full bg-gray-800 text-white p-3 mb-4 rounded"
          />
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            className="form-control w-full bg-gray-800 text-white p-3 mb-4 rounded"
          />
          <textarea
            rows={4}
            placeholder="Como posso lhe ajudar?"
            className="form-control w-full bg-gray-800 text-white p-3 mb-4 rounded"
          />
          <button
            type="submit"
            className="btn w-1/3 bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
