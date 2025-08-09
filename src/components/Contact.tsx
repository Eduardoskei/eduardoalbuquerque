'use client'

import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contactSection" className="py-12 bg-black">
      <div className="container mx-auto text-white text-center px-4">
        <h1 className="text-[#6A0DAD] border-b border-[#6A0DAD] inline-block pb-2 mb-10 text-5xl">
          Entre em contato
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://www.linkedin.com/in/eduardo-albuquerque-263610379/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              width={40}
              height={40}
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
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.instagram.com/_edualbuq_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width={42}
              height={42}
            />
          </a>
        </div>

        {/* Formulário */}
        <form className="mx-auto max-w-md text-left">
          <input
            type="text"
            placeholder="Digite o seu nome"
            className="w-full bg-gray-800 text-white p-3 mb-4 rounded outline-none border-none shadow-none focus:outline-none focus:border-none focus:ring-0"
          />

          <input
            type="email"
            placeholder="Digite o seu e-mail"
            className="w-full bg-gray-800 text-white p-3 mb-4 rounded outline-none border-none shadow-none focus:outline-none focus:border-none focus:ring-0"
          />

          <textarea
            rows={4}
            placeholder="Como posso lhe ajudar?"
            className="w-full bg-gray-800 text-white p-3 mb-4 rounded outline-none border-none shadow-none focus:outline-none focus:border-none focus:ring-0"
          />
          <div className="text-center bg-black">
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 transition text-white px-6 py-2 rounded cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
