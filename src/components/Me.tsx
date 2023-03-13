import Image from 'next/image';
export const Me = () => {
  return (
    <div className="flex flex-col md:flex-row  w-[200] items-center justify-center gap-8">
      <div className="text-center text-white text-4xl font-bold font-[Poppins] italic">
        Olá meu nome é Gabriel
      </div>
      <Image
        className="rounded-full hover:rotate-45 transition-all "
        src="/assets/me.jpg"
        alt="me"
        width={100}
        height={100}
      />
    </div>
  );
};
