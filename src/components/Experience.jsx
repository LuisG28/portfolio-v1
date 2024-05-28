import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

const Skills = () => {
  const jobs = [
    {
      name : "Desarollador Full Stack en TRIPLEI",
      description : "Desarrollo de funcionalidades en aplicaciones web usando React js, Js y Boostrap, ademas de la ayuda de otras técnologias como Postman y Styled Components",
      duration : "1 año y 8 meses",
      dates : "Octubre / 2022 - Actualmente",
      isActual : true,
    },
    {
      name : "Desarrollador Web y aplicaciones moviles en Hybrido Studio",
      description : "Desarrollo de aplicaciones web y moviles para la administración de clientes, reportes usando técnologías como React js, React Native, Feather Js y Postgres sql. ",
      duration : "2 año y 8 meses",
      dates : "Septiembre / 2020 - Abril 2023",
      isActual : false,
    },
    {
      name : "Desarollador Web en SW Plus",
      description : "Desarrollo de funcinalidades como adminisración de usuarios y clientes, creación de reportes y correción de incidencias. Usando ASP.NET, JS, Ajax y Angular Js.",
      duration : "8 meses",
      dates : "Mayo / 2019 - Diciembre / 2019",
      isActual : false,
    }
  ];

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
      id="experience"
    >
      <TagTittle  tittle="💼 Carrera"/>
      <h1 className="lg:text-6xl text-2xl mt-5 text-white font-bold">Experiencia laboral</h1>
      <ol className="mt-10">
        {
          jobs.map((item, index)=> (
            <li key={index} className={`border-l-2 lg:mt-0 mt-[-35px] ${item.isActual ?  'border-[#2BB8E4]' : 'border-tertiary'}`}>
              <div className="md:flex flex-start">
                <div className={`${item.isActual ?  'border-[#2BB8E4]' : 'border-purple-600'} w-6 h-6 flex items-center justify-center rounded-full -ml-3.5`}>
                  🗓️
                </div>
                <div className="block p-6 rounded-lg shadow-lg max-w-md ml-6 mb-10 border-2 border-[#2BB8E4]">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium text-white hover:text-tertiary focus:text-tertiary duration-300 transition ease-in-out text-sm">{item.name}</span>
                  </div>
                  <p className="text-white mb-6">{item.description}</p>
                  <div className="flex flex-row justify-between">
                    <span className="text-[#2BB8E4] font-bold">{item.duration}</span>
                    <span className="text-[#2BB8E4] font-thin">{item.dates}</span>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ol>
    </motion.article>
  )
}

export default Skills
