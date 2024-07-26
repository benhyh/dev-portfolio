import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const Projects = ({}) => {
  return (
    <div className="flex flex-wrap justify-center text-4xl py-20">
      <h1 className="text-white font-bold">
        My <span className="text-blue-400">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, link }) => (
          <div
            key={id}
            className="text-white lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] lg:h-[30vh] mb-10"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
