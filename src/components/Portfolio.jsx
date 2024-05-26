import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

export default function Portfolio () {
    const projects = [
        {
            name : 'Portafolio',
            description : 'Proyecto realizado con el fin de mostrar mi experiencia en el mundo del desarrollo usando diferentes técnologías para realizar aplicaciones web y moviles',
            tecnologies : [
                'Astro',
                'React JS',
                'Tailwind css',
            ],
            type : 'web',
            image : '../../portfolio.png',
        },
        {
            name : 'Nu clon',
            description : 'Clon de la pantalla de inicio de la aplicación Nu',
            tecnologies : [
                'Flutter',
            ],
            type : 'mobile',
            image : '../../portfolio.png',
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
            className="w-full h-auto"
        >
            <div className="w-48">
                <TagTittle tittle="📎  Portafolio"/>
            </div>
            <section className="w-full pt-5 flex flex-row justify-between">
                <h1 className="text-6xl text-white font-bold">Trabajos y proyectos</h1>
                <div className="space-x-5 flex flex-row">
                    <div  className="border-primary hover:bg-primary border-2 w-64 h-16 px-2 py-1 rounded-lg cursor-pointer flex flex-row items-center justify-center">
                        <span className="text-white hover:text-white text-lg font-thin"> <i className="fa-regular fa-window-maximize mr-3" /> Aplicaciones web</span>
                    </div>
                    <div  className="border-primary hover:bg-primary border-2 w-64 h-16 px-2 py-1 rounded-lg cursor-pointer flex flex-row items-center justify-center">
                        <span className="text-white hover:text-white text-lg font-thin"> <i className="fa-solid fa-mobile-button mr-3" /> Aplicaciones moviles</span>
                    </div>
                </div>
            </section>
            <section className="w-full mt-16 flex flex-row space-x-9">
                {
                    projects.map((item, index) => (
                        <div key={index} className="w-[400px] h-96 rounded-lg border-2 border-tertiary p-6 overflow-hidden">
                            <label className="text-white text-lg font-bold"> {item.name} </label>
                            <p className="text-white font-thin mt-2">
                                {item.description}
                            </p>
                            <div className="mt-5 space-x-5 max-w-40">
                                {
                                    item.tecnologies.map(oTecnology => (
                                        <TagTittle key={index} tittle={oTecnology}/>
                                    ))
                                }
                               
                            </div>
                            <img 
                                src={item.image}
                                className="mt-9"
                            />
                        </div>
                    ))
                }
            </section>
        </motion.article>
    )
}