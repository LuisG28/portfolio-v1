import { motion } from "framer-motion"
import TagTittle from "./TagTittle"

export default function Header () {
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
                <div className="w-44">
                    <TagTittle tittle={'👋  Saludos!'}/>
                </div>
                <label className="lg:text-6xl text-2xl text-white font-bold w-auto">Luis Gustavo</label>
                <span className="text-white font-thin opacity-50">Full Stack Developer</span>
                <div className="space-x-1">
                    <a href="https://github.com/LuisG28" target="_blank" className="fab fa-github text-2xl text-gray-500 cursor-pointer hover:text-white"/>
                    <a href="https://www.linkedin.com/in/luis-gustavo-cruz-rosales-1383351a1/" target="_blank" className="fa-brands fa-linkedin text-2xl text-gray-500 cursor-pointer hover:text-white"/>
                </div>
                <button className="text-white border-tertiary w-48 group border-2 px-6 py-3 my-2 flex hover:text-base items-center hover:bg-tertiary hover:border-tertiary">
                    Descargar CV
                    <span className="group-hover:rotate-90 duration-300">
                    <i className="fa-solid fa-arrow-right ml-5"/>
                    </span>
                </button>
            </section>
            <img 
                src={'../../avatar.jpeg'}
                alt="avatar image" 
                className='rounded-full w-40 h-40 lg:h-auto lg:w-auto mt-5 lg:mt-0' 
                loading="lazy"
            />
        </motion.article>
    )
}

