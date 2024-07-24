import React from 'react'
import { Button } from '../Buttons/btn';
import Hero_rounded from "../../img/hero-rounded.png"
export const Hero = () => {
  return (
    <>
        <section>
            <div className="Hero__bg container pt-[163px] pl-[110px] pr-[136px] pb-[146px] text-center">
                <h2 className='text-[100px] w-[1074px] text-[#242F65]'>Tell your creativity to the world with <strong className='text-[#FF774C]'>UIUXer</strong></h2>
                <p className='text-[#242F65] text-[25px] w-[500px] mx-auto'>UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
                <div className='flex gap-[10px] justify-center items-center pt-[25px]'>
                    <Button className="px-[71px] py-[21px] bg-[#FF774C] rounded-[10px] text-white text-[18px]">Buy Template</Button>
                    <Button className="px-[71px] py-[21px] bg-[#7390F9] rounded-[10px] text-white text-[18px]">Explore Page</Button>
                </div>
                <div className='justify-center flex pt-[60px]'>
                    <img src={Hero_rounded} alt='img'/>
                </div>
            </div>
        </section>
    </>
)
}
