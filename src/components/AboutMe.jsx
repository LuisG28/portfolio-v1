import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

export default function AboutMe () {
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
            className="w-full flex flex-col-reverse lg:flex-row justify-center lg:space-x-64 items-center"
            id="about"
        >
            <img 
                src={'../../avatar.jpeg'}
                alt="avatar image" 
                className='rounded-full w-40 h-40 lg:h-auto lg:w-96 mt-5 lg:mt-0' 
                loading="lazy"
                
            />
            <section className="h-auto flex flex-col justify-center items-center lg:items-stretch lg:w-4/6 lg:space-y-2 w-full lg:p-0 px-10 space-y-5">
                <div className="w-44">
                    <TagTittle tittle="🧐 Sobre mi"/>
                </div>
                <label className="lg:text-6xl text-2xl text-white font-bold w-auto">Luis Gustavo Cruz Rosales.</label>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">👋</span> Me llamo Luis Gustavo Cruz Rosalez, pero puedes llamarme simplemente Gustavo, un placer!</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">🧑‍💻</span> Llevo más de 3 años trabajando como desarrollador full stack.</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">👨‍🎓</span> Graduado en tecnologías de la información y comunicación por la universidad técnologica de Xicotepec de Jurarez.</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">💡</span> Interesado en el desarrolo de aplicaciones web y moviles.</p>
            </section>
        </motion.article>
    )
}

