import React from 'react'

const Footer = () => {
  return (
    <>
         <footer className="footer">
                <section>
                    <h3 className='text-yellow-400'>Mercado Livre</h3>
                    <p>A melhor loja do mundo</p>
                </section>


                <section>
                    <h4 className='text-yellow-400'>Horário</h4>
                    <p>Domingo a Domingos</p>
                </section>

                <section>
                    <h4 className='text-yellow-400'>Contato</h4>
                    <p>📷 (11) 99999-9999</p>
                    <p>📍 Rua dos Developer, 007</p>
                </section>

                <section>
                    <h4 className='text-yellow-400'>Redes Sociais</h4>
                    <a href="http://instagram.com/mattechh.dev" target="_blank" rel="noopener noreferrer" className="btn mt-2">Instagram</a>
                </section>

                <p className="copy  mb-5"> 2026- Mercado Livre </p>
        
        </footer>
    </>
  )
}

export default Footer