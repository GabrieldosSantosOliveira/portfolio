import { FC } from 'react';
import { Tech as ITech } from '../../techs';
import Image from 'next/image';
export const Tech: FC<ITech> = ({ image, title }) => {
  return (
    <div className="  w-11/12 h-40 rounded-2xl bg-neutral-200 p-5  flex justify-between items-center flex-col">
      <Image src={image} width={80} height={80} alt={title} />
      <h1 className="font-[Lexend] text-black font-semibold text-xl text-center">
        {title}
      </h1>
    </div>
  );
};
