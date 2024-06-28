import { motion } from "framer-motion"
import TagTittle from "./TagTittle"
import ProjectCard from "./ProjectCard"

export default function Portfolio () {
    const projects = [
        {
            name : 'Portafolio',
            description : 'Proyecto realizado con el fin de mostrar mi experiencia en el mundo del desarrollo usando diferentes técnologías para realizar aplicaciones web y moviles',
            tecnologies : [
                'Astro',
            ],
            type : 'web',
            image : '/portfolio-v1/portfolio.png',
        },
        {
            name : 'Nu clon',
            description : 'Clon de la pantalla de inicio de la aplicación Nu',
            tecnologies : [
                'Flutter',
            ],
            type : 'mobile',
            image : '/portfolio-v1//portfolio.png',
        },
    ]
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
            className="w-full h-auto flex flex-col items-center lg:items-stretch"
            id="projects"
        >
            <div className="w-48">
                <TagTittle tittle="📎  Portafolio"/>
            </div>
            <h1 className="lg:text-6xl text-2xl text-white font-bold mt-5">Trabajos y proyectos</h1>
            <section className="w-full mt-5 flex flex-row space-x-9 overflow-x-auto overscroll-x-contain scrollbar-hide overflow-y-hidden">
                { 
                    projects.map((item, index) => (
                        <ProjectCard key={index} item={item} />
                    ))
                }
            </section>
        </motion.article>
    )
}