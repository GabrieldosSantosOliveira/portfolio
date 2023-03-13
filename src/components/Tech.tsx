import { FC } from 'react';
import { Tech as ITech } from '../../techs';
import Image from 'next/image';
export const Tech: FC<ITech> = ({ image, title }) => {
  return (
    <div className="hover:shadow-black transition-all shadow-xl w-11/12 h-40 max-w-xs rounded-2xl bg-[#023047] p-5  flex justify-between items-center flex-col">
      <Image src={image} width={80} height={80} alt={title} />
      <h1 className="font-[Lexend] text-white font-semibold text-xl text-center">
        {title}
      </h1>
    </div>
  );
};
