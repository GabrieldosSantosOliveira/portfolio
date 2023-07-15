import { Header } from '@/components/Header';
import { Social } from '@/components/Social';
import Image from 'next/image';
import { contacts } from '../../contacts';
export default function Home() {
  return (
    <div className="bg-[#f1faee] h-screen">
      <Header />
      <div className="flex pt-20 flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-center text-black text-4xl font-bold font-[Poppins] italic">
            Olá, eu sou o Gabriel
          </div>
          <div className="text-center text-black text-4xl font-bold font-[Poppins] italic">
            Desenvolvedor Full-Stack
          </div>
          <div className='flex flex-1 justify-center gap-6'>
          {contacts.map((contact, index) => {
          return <Social {...contact} key={index} />;
        })}
        </div>
        </div>
        <Image
          className="rounded-full"
          src="/assets/me.jpg"
          alt="me"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
