import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

export default function AboutMe () {
    return (
        <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true, amount: 0.5}}
            transition={{ delay : 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 }, 
                visible: { opacity: 1, y: 0 },
            }}
            className="w-full flex flex-col items-center justify-center"
            id="about"
        >
            <TagTittle tittle="🧐 Sobre mi"/>
            <h1 className="lg:text-6xl text-2xl text-white font-bold w-auto pt-5">Luis Gustavo Cruz Rosales.</h1>
            <section className="h-auto flex flex-col lg:justify-center lg:items-center lg:space-y-2 w-full lg:p-0 space-y-5 mt-10 lg:mt-5">
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">👋</span> Me llamo Luis Gustavo Cruz Rosalez, pero puedes llamarme simplemente Gustavo, un placer!</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">🧑‍💻</span> Llevo más de 3 años trabajando como desarrollador full stack.</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">👨‍🎓</span> Graduado en tecnologías de la información y comunicación por la universidad técnologica de Xicotepec de Jurarez.</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">💡</span> Interesado en el desarrolo de aplicaciones web y moviles.</p>
            </section>
        </motion.section>
    )
}

