import { IContact } from '../../contacts';
import Image from 'next/image';
export const Social: React.FC<IContact> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
        <Image
          src={icon}
          alt="rede social"
          width={30}
          quality={100}
          height={30}
        />
    </a>
  );
};
