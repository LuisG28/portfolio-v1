import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

export default function AboutMe ({ dataLanguage }) {
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
            <TagTittle tittle={`🧐  ${dataLanguage.aboutMe}`}/>
            <h1 className="lg:text-6xl text-2xl text-white font-bold w-auto pt-5">Luis Gustavo Cruz Rosales.</h1>
            <section className="h-auto flex flex-col lg:justify-center lg:items-center lg:space-y-2 w-full lg:p-0 space-y-5 mt-10 lg:mt-5">
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">👋</span> {dataLanguage.presentationName}</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">🧑‍💻</span> {dataLanguage.presentationJob}</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">👨‍🎓</span> {dataLanguage.presentationUniversity}</p>
                <p className="text-white lg:text-lg text-sm"><span className="lg:text-2xl text-sm">💡</span> {dataLanguage.presentationInterest}</p>
            </section>
        </motion.section>
    )
}

