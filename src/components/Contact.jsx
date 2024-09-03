import React from 'react'
import TagTittle from './TagTittle'

const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col items-center justify-center mb-20">
      <TagTittle  tittle="☎️ Contactame"/>
      <h1 className="lg:text-6xl text-2xl mt-5 text-white font-bold">¡Vamos a conversar!</h1>
      <div className="flex flex-row w-full items-center justify-center mt-10 space-x-3">
        <a href="mailto:luis.gus2869@gmail.com?subject=Consulta&body=Hola,%20quiero%20más%20información" target="_blank" className="text-white border-tertiary w-64 h-16 rounded-lg p-1 text-lg hover:text-lg border-2 px-6 py-3 my-2 flex hover:text-base justify-center items-center hover:bg-tertiary hover:border-tertiary">
          <i className="fa-regular fa-envelope mr-3" /> 
          Correo
        </a>
      </div>
      <a href="#header" className="text-secondary hidden lg:flex h-16 rounded-lg text-lg hover:text-tertiary hover:text-lg px-6 py-3 my-2 items-center self-center">
        Volver al inicio
        <i className="fa-solid fa-arrow-up ml-3" /> 
      </a>
    </div>
  )
}

export default Contact;
