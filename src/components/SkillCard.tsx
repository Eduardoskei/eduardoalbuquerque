interface SkillCardProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

export default function SkillCard({ imgSrc, alt, title, description }: SkillCardProps) {
  return (
    <div className="w-60 p-4 borde dark:border-white transform cursor-pointer hover:scale-110 transition rounded-2xl shadow-lg">
      <img
        src={imgSrc}
        alt={alt}
        className="mx-auto"
        width={80}
      />
      <h5 className="mt-2 text-lg font-medium">{title}</h5>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}
