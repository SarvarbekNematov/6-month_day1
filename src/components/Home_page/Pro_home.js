import React from 'react'
import First_img from "../../img/home_first.png"
import Second_img from "../../img/home_second.png"


export const Pro_home = () => {
  return (
    <>
        <div className='container text-center pt-[120px]'>
            <h3 className='text-[#242F65] text-[40px]'>Professional Home Pages</h3>
            <p className='text-[#525665] text-[20px] pt-[10px] pb-[60px]'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
            <div className='flex gap-[30px]'>
                <div className=''>
                    <img src={First_img} alt='img'/>
                    <h3 className='text-[#242F65] text-[25px] pt-[39px]'>Home UX Designer</h3>
                </div>
                <div className=''>
                    <img src={Second_img} alt='img'/>
                    <h3 className='text-[#242F65] text-[25px] pt-[39px]'>Home UI Designer</h3>
                </div>
            </div>
        </div>
    </>
)
}
