import React from 'react'
import TagTittle from './TagTittle'

const Contact = ({ dataLanguage }) => {
  console.log(dataLanguage)
  return (
    <div id="contact" className="w-full flex flex-col items-center justify-center mb-20">
      <TagTittle  tittle={`☎️ ${dataLanguage.contactMe}`}/>
      <h1 className="lg:text-6xl text-2xl mt-5 text-white font-bold">{dataLanguage.letsChat}</h1>
      <div className="flex flex-row w-full items-center justify-center mt-10 space-x-3">
        <a 
          href={`mailto:luis.gustavo.contact@gmail.com?subject=${dataLanguage.language === 'en' ? 'Consulta' : 'Looking for Information'}&body=${dataLanguage.language === 'en' ? 'Hola,%20quiero%20más%20información' : '&body=Hello,%20I%20would%20like%20more%20information.'}`} 
          target="_blank" 
          className="text-white border-tertiary w-64 h-16 rounded-lg p-1 text-lg hover:text-lg border-2 px-6 py-3 my-2 flex hover:text-base justify-center items-center hover:bg-tertiary hover:border-tertiary">
          <i className="fa-regular fa-envelope mr-3" /> 
          {dataLanguage.email}
        </a>
      </div>
      <a href="#header" className="text-secondary hidden lg:flex h-16 rounded-lg text-lg hover:text-tertiary hover:text-lg px-6 py-3 my-2 items-center self-center">
        {dataLanguage.back}
        <i className="fa-solid fa-arrow-up ml-3" /> 
      </a>
    </div>
  )
}

export default Contact;
