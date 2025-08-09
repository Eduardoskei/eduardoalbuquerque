import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

export default function WorkCard({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
}: WorkCardProps) {
  return (
    <div className="w-96 p-5">
      <div className="border dark:border-white bg-background h-135 shadow-lg transform hover:scale-110 transition cursor-pointer">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={300}
          className="rounded-t-lg"
        />
        <div className="p-4">
          <h5 className="text-xl text-foreground font-semibold mb-2">{title}</h5>
          <p className="text-sm text-foreground mb-4">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-700 hover:bg-violet-800 transition text-white px-4 py-2 rounded"
          >
            Ver Mais
          </a>
        </div>
      </div>
    </div>
  );
}
