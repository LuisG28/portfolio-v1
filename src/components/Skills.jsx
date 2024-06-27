import { motion } from "framer-motion"
import TagTittle from "./TagTittle"
import { mainTechnologies, secondaryTechnologies } from '../utils/contanst';

const Skills = () => {
  return (
    <motion.article 
      initial="hidden" 
      whileInView="visible" 
      viewport={{once: true, amount: 0.5}}
      transition={{ delay : 0.2, duration: 0.5 }}
      variants={{
         hidden: { opacity: 0, y: 50 }, 
         visible: { opacity: 1, y: 0 },
      }}
      className="w-full h-auto flex flex-col items-center"
      id="skills"
    >
      <TagTittle  tittle="👨‍💻 Habilidades"/>
      <h1 className="lg:text-6xl text-2xl text-white font-bold pt-5 lg:mt-0">Técnologias y habilidades</h1>
      <span className="text-white opacity-50 lg:mt-10 mt-5 text-2xl">Técnologías que uso día a día</span>
      <div className="mt-10 w-full h-auto flex flex-row items-center justify-center overflow-x-auto overscroll-x-contain scrollbar-hide overflow-y-hidden">
        <i className="fa-brands fa-react text-secondarytext-6xl mr-8 cursor-pointer"/>
        {
          mainTechnologies.map((item, index)=> (
            <i className={`${item} text-secondary text-6xl mr-8 cursor-pointer`} key={index} />
          ))
        }
      </div>
      <span className="text-white opacity-50 lg:mt-20 mt-10 text-2xl ">Otras técnologias con las que he trabajado</span>
      <div className="mt-10 w-full h-auto flex flex-row items-center justify-center overflow-x-auto overscroll-x-contain scrollbar-hide overflow-y-hidden pl-80 lg:pl-0">
        {
          secondaryTechnologies.map((item, index) => (
            <i className={` ${item} text-secondary text-6xl mr-8 cursor-pointer`} key={index}/>
          ))
        }
      </div>
    </motion.article>
  )
}

export default Skills
