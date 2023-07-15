import { Project } from '@/components/Project';
import { projects } from '../../projects';
import { Header } from '@/components/Header';

export default function Projects() {
  return (
    <div className="bg-[#f1faee] min-h-screen">
      <Header />
      <div className="flex flex-col flex-1 px-5 gap-4 pt-20 pb-10">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </div>
  );
}
