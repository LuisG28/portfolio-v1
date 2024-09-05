import { motion } from "framer-motion"
import TagTittle from "./TagTittle"


export default function Home({ dataLanguage }) {
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
            className="w-full h-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-64"
        >
            <section className="h-auto w-96 flex flex-col justify-center items-center lg:items-baseline space-y-1 lg:space-x-0" id="home">
                <TagTittle tittle={dataLanguage.hi}/>
                <label className="lg:text-6xl text-2xl text-white font-bold w-auto pt-5">Luis Gustavo</label>
                <span className="text-white font-thin opacity-50">Full Stack Developer</span>
                <div className="space-x-1">
                    <a href="https://github.com/LuisG28" target="_blank" className="fab fa-github text-2xl text-gray-500 cursor-pointer hover:text-white"/>
                    <a href="https://www.linkedin.com/in/luis-gustavo-cruz-rosales-1383351a1/" target="_blank" className="fa-brands fa-linkedin text-2xl text-gray-500 cursor-pointer hover:text-white"/>
                </div>
                <a href={dataLanguage.language === "en" ? "/portfolio-v1/LuisGustavoCruzCV.pdf" : "/portfolio-v1/LuisGustavoCruzResume.pdf"} download={dataLanguage.language === "en" ? "LuisGustavoCruzCV.pdf" : "LuisGustavoCruzResume.pdf"} className="text-white border-tertiary w-auto group border-2 px-6 py-3 my-2 flex hover:text-base items-center hover:bg-tertiary hover:border-tertiary">
                    {dataLanguage.resume}
                    <span className="group-hover:rotate-90 duration-300">
                    <i className="fa-solid fa-arrow-right ml-5"/>
                    </span>
                </a>
            </section>
            <img 
                src={'/portfolio-v1/avatar.webp'}
                alt="avatar image" 
                className='rounded-full w-40 h-40 lg:h-72 lg:w-72 mt-5 lg:mt-0' 
                loading="lazy"
            />
        </motion.article>
    )
}

