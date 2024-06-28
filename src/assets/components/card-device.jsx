import Button from "./button";
import { motion } from "framer-motion"


export default function CardDevices({logo, icon, img, title, titleBtn, desc}){
    return(
        <>
            <motion.div className="w-[50%] bg-white rounded-[24px] pl-5 pt-[60px] h-screen xl:h-auto" whileInView={{y: [100, 0], opacity: [0, 1] }} drag dragSnapToOrigin transition={{ delay:0.9, duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>
                <div className="flex gap-6 relative">
                    <div className="flex flex-col gap-[28px] w-[55%] pb-[88px] bg-white">
                        <figure>
                            <img src={logo} alt="" />
                        </figure>
                        <h2 className='text-[#111111] font-bold text-[18px] 2xl:text-[22px]'>{title}</h2>
                        <p className='text-[#8c8c8c] text-[14px] 2xl:text-[18px]'>{desc}</p>
                        <Button name={titleBtn} icon={icon} style="btn-hero relative inline-block px-[24px] py-[16px] text-center text-[14px] 2xl:text-[18px] text-white bg-[#111111] cursor-pointer transition-all ease-in-out duration-700 rounded-[100px] w-fit flex items-center justify-center gap-[10px]"/>
                    </div>
                    <div className='w-[45%] h-full invisible'>
                        <figure className='w-full h-full'>
                            <img src={img} alt="" className='w-full h-full object-cover'/>
                        </figure>
                    </div>
                    <div className='w-[45%] h-full absolute bottom-0 right-0'>
                        <figure className='w-full h-full'>
                            <img src={img} alt="" className='w-full h-full object-cover'/>
                        </figure>
                    </div>
                </div>
            </motion.div>
        </>
    )
}