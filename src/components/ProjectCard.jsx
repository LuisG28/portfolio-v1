import { useState } from 'react';

const ProjectCard = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-[400px] h-96 bg-transparent cursor-pointer group perspective" key={index} onClick={handleFlip}>
      <div className={`relative preserve-3d w-full h-full duration-1000 rounded-lg border-tertiary border-2 lg:hover:my-rotate-y-180 ${isFlipped ? 'my-rotate-y-180' : ''}`}>
        <div className="absolute backface-hidden w-full h-full p-6">
          <h5 className="text-white text-lg font-bold">{item.name}</h5>
          <p className="text-white font-thin mt-2 h-20">{item.description}</p>
          <div className="w-full flex justify-center">
            <img src={item.image} className="mt-9 h-32" />
          </div>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
          <div className="flex flex-col h-full text-gray-800 pb-24 p-6">
            <h5 className="text-white text-lg font-bold">Técnologías</h5>
            <ul className="flex flex-row mb-2 gap-x-2">
              {item.technologies.map((technology, key) => (
                <li key={key}>
                  <span
                    className={`flex gap-x-2 rounded-full text-xs ${technology.style} py-1 px-2 items-center justify-center`}
                  >
                    <img src={technology.icon} alt="" className='w-10 h-5' />
                    {technology.name}
                  </span>
                </li>
              ))}
            </ul>
            <a href={item.repo} target='_blank' className='self-center border-primary hover:bg-primary border-2 w-64 h-16 py-1 rounded-lg cursor-pointer flex flex-row items-center justify-center mt-10'>
              <span className="text-white hover:text-white text-lg font-thin"> <i className="fab fa-github mr-3" /> Ver repositorio </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;