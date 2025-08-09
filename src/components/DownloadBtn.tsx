import { LucideFileDown } from "lucide-react";

export default function DownloadBtn() {
  return (
    <a
      href="/download/CV-EduardoAlbuquerque.pdf"
      download
      className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 transition transform hover:scale-110 text-white px-4 py-2 rounded"
    >
      <LucideFileDown size={22}/>   
      <span className="text-lg">Baixar Currículo</span>
    </a>
  )
}
