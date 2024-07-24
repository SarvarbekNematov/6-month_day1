import React from 'react'
import Logo from "../../img/logo.svg"

export const Header = () => {
  return (
    <header>
        <div className='container flex justify-between py-[35px]'>
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <ul className='flex gap-[82px]'>
                <li>
                    <a className='text-[#222222] text-[22px] ' href="/">Home</a>
                </li>
                <li>
                    <a className='text-[#222222] text-[22px] ' href="/">About Me</a>
                </li>
                <li>
                    <a className='text-[#222222] text-[22px] ' href="/">Pages</a>
                </li>
                <li>
                    <a className='text-[#222222] text-[22px] ' href="/">Contact Us</a>
                </li>
            </ul>
        </div>
    </header>
  )
}
