import { FC } from 'react';
import { IProject } from '../../projects';
import Image from 'next/image';
export const Project: FC<IProject> = ({
  image,
  title,
  link,
  description,
  deploy,
  techs,
}) => {
  return (
    <div className="w-full min-h-80 gap-5 px-5 py-2 justify-center items-center rounded  bg-neutral-200 flex flex-col lg:flex-row  ">
      <div className="flex flex-1 flex-col h-full w-full justify-between py-5 gap-3">
        <h1 className="font-[Lexend] font-semibold text-black text-xl">
          {title}
        </h1>
        {description.map((value) => (
          <p key={value}>{value}</p>
        ))}
        <a href={link} target="_blank" className="flex underline">
          Link para o repositório{' '}
          <Image
            src="/assets/github.svg"
            alt="Link para o repositório"
            width={24}
            height={24}
          />
        </a>
        <div className="flex gap-2">
          {techs.map((tech) => (
            <Image key={tech} src={tech} alt="Tecnologia" width={50} height={50} />
          ))}
        </div>
      </div>
      <Image
        src={image}
        alt={`Projeto ${title}`}
        width={200}
        height={200}
        className="object-contain    max-h-[100%]   rounded-lg"
      />
    </div>
  );
};
