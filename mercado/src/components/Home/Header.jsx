import React from 'react'
import Log from "../../assets/D_NQ_NP_965695-MLA78817220419_082024-F.jpg";

const Header = () => {
  return (
    <>
        <header className='header'>
            <div>
              <img src={Log} alt="log" loading='lazy' className='log'/>
            </div>

            <div className='search-container'>
              
              <input type="text" placeholder='Busque seu produto...' className='search-input'/>

              <button className='search-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
        </header>
    </>
  )
}

export default Header