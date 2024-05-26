import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

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
      <h1 className="text-6xl mt-5 text-white font-bold">Técnologias y habilidades</h1>
      <span className="text-white opacity-50 mt-20 text-2xl">Técnologías que uso día a día</span>
      <div className="mt-10 w-full h-auto flex flex-row items-center justify-center">
        <i className="fa-brands fa-react text-secondarytext-6xl mr-8 cursor-pointer"/>
        <i className="fa-brands fa-js text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-node-js text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-github text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-git-alt text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-html5 text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-css3-alt text-secondary text-6xl mr-8 cursor-pointer" />
      </div>
      <span className="text-white opacity-50 mt-20 text-2xl">Otras técnologias con las que he trabajado</span>
      <div className="mt-10 w-full h-auto flex flex-row items-center justify-center">
        <i className="fa-brands fa-docker text-secondary text-6xl mr-8 cursor-pointer"/>
        <i className="fa-brands fa-aws text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-solid fa-database text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-solid fa-feather-pointed text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-linux text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-android text-secondary text-6xl mr-8 cursor-pointer" />
        <i className="fa-brands fa-apple text-secondary text-6xl mr-8 cursor-pointer" />
      </div>
    </motion.article>
  )
}

export default Skills
