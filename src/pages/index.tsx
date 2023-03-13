import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { NavBar } from '@/components/NavBar';
import { Project } from '@/components/Project';
import { Tech } from '@/components/Tech';
import { projects } from '../../projects';
import { techs } from '../../techs';
export default function Home() {
  return (
    <div className="bg-[#0A192F] to-blue-900">
      <About />

      <div id="techs" className="flex justify-center px-4 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5">
          {techs.map((tech, index) => {
            return <Tech {...tech} key={index} />;
          })}
        </div>
      </div>
      <div id="projects" className="flex justify-center mt-5">
        <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => {
            return <Project {...project} key={index} />;
          })}
        </div>
      </div>
      <Contact />
      <NavBar />
    </div>
  );
}
