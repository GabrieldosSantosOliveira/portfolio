import { techs } from '../../techs';
import { Tech } from '@/components/Tech';
import { Header } from '@/components/Header';

export default function Techs() {
  return (
    <div className="bg-[#f1faee]">
      <Header />
      <div className="pt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 p-10">
        {techs.map((tech, index) => {
          return <Tech {...tech} key={index} />;
        })}
      </div>
    </div>
  );
}
