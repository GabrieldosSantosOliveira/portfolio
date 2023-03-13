import { FC } from 'react';
import { IProject } from '../../projects';
import Image from 'next/image';
export const Project: FC<IProject> = ({ image, title, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="hover:shadow-2xl transition-all w-11/12 h-80 gap-5 px-5 py-2 justify-center items-center rounded-3xl  bg-[#023047] flex  flex-col ">
        <Image
          src={image}
          alt={`Projeto ${title}`}
          width={200}
          height={200}
          className="object-contain    max-h-[70%]   rounded-lg"
        />

        <div className="h-1/2  flex flex-col justify-center items-center  ">
          <h1 className="font-[Lexend] font-semibold text-white text-xl">
            {title}
          </h1>
        </div>
      </div>
    </a>
  );
};
