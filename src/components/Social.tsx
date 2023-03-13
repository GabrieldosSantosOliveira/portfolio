import { IContact } from '../../contacts';
import Image from 'next/image';
export const Social: React.FC<IContact> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="w-10 h-10 bg-gray-700 hover:bg-purple-500 transition-all rounded-sm flex items-center justify-center">
        <Image
          src={icon}
          alt="rede social"
          width={30}
          quality={100}
          height={30}
        />
      </div>
    </a>
  );
};
