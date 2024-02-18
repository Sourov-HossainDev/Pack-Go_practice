import React from 'react'

const Subcribe = () => {
    return (
        <>
            <div className='bg-subcribe mt-[237.21px] '>
                <div className='max-w-container mx-auto font-poppins'>
                    <h1 className='font-semibold text-[40px] text-[#FFF] w-[659px] m-auto text-center pt-[150px]  '>Subscribe To Get The Latest News About Us</h1>
                    <p className='w-[565px] text-center text-[#FFFFFFB2] m-auto  mt-[20px] '>We Recommended you to subscribe to our newspaperm, enter your email below to get daily update about us.</p>
                    <div className='pb-[150px] mt-[52px] flex justify-center     '>
                        <div className='bg-[white] rounded-[18px] outline-none py-[40px] pl-[25px] pr-[300px] relative'>
                            <input type="text" placeholder='Enter your email address' className='  w-[490px]  outline-none ' />
                            <p className='py-[29px] px-[38px] bg-[#007F5F] rounded-[17px] absolute top-[11px] right-[18px] text-[#FFFFFF] font-semibold  '>Subscribe</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Subcribe