import Logo3 from '../img/logo3.png'
import Iconprofile from '../img/iconprofile.png'
import Iconmessage from '../img/iconmessage.png'
import Iconphone from '../img/iconphone.png'
import Star from "../img/iconStar.png"
import Button from "./button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useRef } from "react"
import React from "react"



export default function Contact(){
    const delay = 0.2
    const inputs =[
        {
            id: 1,
            name: 'Nama Lengkap*',
            img : Iconprofile,
        },
        {
            id: 2,
            name: 'Email*',
            img : Iconmessage,
        },
        {
            id: 3,
            name: 'Number Telephone',
            img : Iconphone,
        },
    ]
    const handleInputFocus = (event) => {
        event.target.value = ''; 
    };
    const ribbon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(227, 227, 227, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 0)"
        }
    }
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
        controls.start('visible');
        } else {
        controls.start('hidden');
        }
    }, [inView, controls]);
    return(
        <>
            <section className="contact relative bg-primary flex flex-col items-center justify-center">
                <div className="contact-box flex flex-col py-[72px] gap-0">
                    {/* box atas */}
                    <div className='flex flex-col items-center justify-center gap-6 px-[52px] mb-20'>
                        <motion.figure whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className='mx-auto'>
                            <img src={Logo3} alt="" />
                        </motion.figure>
                        <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.2, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className='text-white font-bold text-[48px] 2xl:text-[52px] leding-[64px]'>Hubungi Kami</motion.div>
                        <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.3, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className='text-[#bdbdbd] 2xl:text-[18px]'>Kami ada untuk melayani pelanggan kami</motion.p>
                    </div>
                    {/* form */}
                    <form className='flex flex-col gap-12'>
                        {inputs.map((input, index) => (
                            <motion.div key={input.id} whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay: delay + index * 0.1, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className='box-input relative flex items-center  w-full group'>
                                <input required onFocus={handleInputFocus} autoComplete='off' type="text" className='w-full text-[14px] 2xl:text-[18px] text-[#bdbdbd] px-4 py-3 border-b-2 border-[#083578] bg-transparent outline-none relative z-10 transition-all duration-500 ease-in-out'/>
                                <span className='placeholderForm text-[#bdbdbd] absolute left-0 top-0 px-4 py-3 transition-all duration-500 ease-in-out text-[14px] 2xl:text-[18px]'>{input.name}</span>
                                <img src={input.img} alt="" className='icon-form absolute right-0 top-0 px-4 py-3 transition-all duration-500 ease-in-out'/>
                            </motion.div>                               
                        ))}
                        <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.5, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className='box-input relative flex items-center  w-full group'>
                            <textarea name="" id="" required className='w-full text-[14px] 2xl:text-[18px] text-[#bdbdbd] px-4 py-3 bg-transparent outline-none relative z-10 transition-all duration-500 ease-in-out border-b-2 border-[#083578]'></textarea>
                            <span className='placeholderForm text-[#bdbdbd] absolute left-0 top-0 px-4 py-3 transition-all duration-500 ease-in-out text-[14px] 2xl:text-[18px]'>Description</span>
                        </motion.div>
                    </form>
                    <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay: 0.6, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} href="" target="_blank" className='flex items-end justify-end mt-6'>
                        <Button type="submit" name="Kirim Pesan" icon={Star} style="btn-contact relative inline-block px-[24px] py-[16px] text-center text-[14px] 2xl:text-[18px] text-white bg-[#39a739] cursor-pointer transition-all ease-in-out duration-700 rounded-[100px] w-fit flex items-center justify-center gap-[10px]"/>
                    </motion.div>
                </div>
                {/* ribon */}
                <motion.svg width="294" height="574" className='absolute -top-60 left-0 z-10' viewBox="0 0 294 574" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}>
                    <motion.path d="M-22 481.5H181C218.003 481.5 248 451.503 248 414.5V414.5C248 377.497 218.003 347.5 181 347.5H151.5C113.945 347.5 83.5 317.055 83.5 279.5V274C83.5 236.445 113.945 206 151.5 206H213.5C251.055 206 281.5 175.555 281.5 138V81C281.5 43.4446 251.055 13 213.5 13H-33" stroke="#39A739" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" variants={ribbon}
                    initial="hidden"
                    animate={controls}
                    transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                    }}/>
                    <motion.path d="M0 391.5H87.5C125.055 391.5 155.5 421.945 155.5 459.5V509.25C155.5 538.107 178.893 561.5 207.75 561.5V561.5C236.607 561.5 260 538.107 260 509.25V243C260 205.445 229.555 175 192 175H0" stroke="#0D5CD3" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" variants={ribbon}
                    initial="hidden"
                    animate={controls}
                    transition={{
                        default: { duration: 3.5, ease: "easeInOut" },
                        fill: { duration: 3.5, ease: [1, 0, 0.8, 1] }
                    }}/>
                </motion.svg>               
                <motion.svg width="294" height="574" className='absolute -top-60 right-0 z-10 scale-x-[-1]' viewBox="0 0 294 574" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}>
                    <motion.path d="M-22 481.5H181C218.003 481.5 248 451.503 248 414.5V414.5C248 377.497 218.003 347.5 181 347.5H151.5C113.945 347.5 83.5 317.055 83.5 279.5V274C83.5 236.445 113.945 206 151.5 206H213.5C251.055 206 281.5 175.555 281.5 138V81C281.5 43.4446 251.055 13 213.5 13H-33" stroke="#39A739" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" variants={ribbon}
                    initial="hidden"
                    animate={controls}
                    transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                    }}/>
                    <motion.path d="M0 391.5H87.5C125.055 391.5 155.5 421.945 155.5 459.5V509.25C155.5 538.107 178.893 561.5 207.75 561.5V561.5C236.607 561.5 260 538.107 260 509.25V243C260 205.445 229.555 175 192 175H0" stroke="#0D5CD3" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" variants={ribbon}
                    initial="hidden"
                    animate={controls}
                    transition={{
                        default: { duration: 3.5, ease: "easeInOut" },
                        fill: { duration: 3.5, ease: [1, 0, 0.8, 1] }
                    }}/>
                </motion.svg>
            </section>
        </>
    )
}