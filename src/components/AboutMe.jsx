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
            className="w-full flex flex-row justify-center space-x-64"
        >
            <img 
                src={'../../avatar.jpeg'}
                alt="avatar image" 
                className='rounded-full w-96' 
                loading="lazy"
                
            />
            <section className="h-auto flex flex-col justify-center w-4/6 space-y-2">
                <div className="w-44">
                    <TagTittle tittle="🧐 Sobre mi"/>
                </div>
                <label className="text-6xl text-white font-bold w-auto">Luis Gustavo Cruz Rosales.</label>
                <p className="text-white text-lg"><span className="text-2xl">👋</span> Me llamo Luis Gustavo Cruz Rosalez, pero puedes llamarme simplemente Gustavo, un placer!</p>
                <p className="text-white text-lg"><span className="text-2xl">🧑‍💻</span> Llevo más de 3 años trabajando como desarrollador full stack.</p>
                <p className="text-white text-lg"><span className="text-2xl">👨‍🎓</span> Graduado en tecnologías de la información y comunicación por la universidad técnologica de Xicotepec de Jurarez.</p>
                <p className="text-white text-lg"><span className="text-2xl">💡</span> Interesado en el desarrolo de aplicaciones web y moviles.</p>
            </section>
        </motion.article>
    )
}

