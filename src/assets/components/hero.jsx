import Button from "./button"
import Star from "../img/iconStar.png"
import HeroImg from '../img/hero.png'
import Mangcoding from '../img/mangcoding.png'
import Percentage from '../img/heroPercentage.png'
import BorderHero from '../img/border-hero.png'
import { motion } from "framer-motion"



export default function Hero() {
    return(
        <>
            <section className="hero bg-primary px-3">
                <div className="hero-box bg-white h-screen rounded-tl-[24px] rounded-tr-[24px] 2xl:pl-[83px] pl-[50px] pb-[50px] 2xl:pb-[79px]">
                    <div className="flex w-full h-full">
                        {/* box kiri */}
                        <div className="w-[50%] h-full bg-[#fefdfe] relative flex items-center justify-center px-[88px] z-20 overflow-hidden">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-3">
                                    <motion.p whileInView={{y: [100, 0], opacity: [0, 0.5, 1] }} transition={{delay:0.6, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="text-black text-[14px] 2xl:text-[18px] rounded-[100px] bg-[#CBFBD0] py-1 px-5 w-fit">Mangkasir</motion.p>
                                    <motion.h2 whileInView={{y: [100, 0], opacity: [0, 0.5, 1] }} transition={{delay:0.7, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="text-black text-[44px] 2xl:text-[48px] leading-normal font-bold 2xl:leading-[77px]">Buat Keuangan Tokomu Rapi dan Terstruktur</motion.h2>
                                </div>
                                <div>
                                    <motion.p whileInView={{y: [100, 0], opacity: [0, 0.5, 1] }} transition={{delay:0.8, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="text-black text-[14px] 2xl:text-[18px] leading-[24px]">Keuangan yang terstruktur dan rapi bisa membuat kita menjadi lebih fokus dalam menjalankan bisnis, mengelola pengeluaran dengan baik</motion.p>
                                </div>
                                <motion.div whileInView={{y: [100, 0], opacity: [0, 0.5, 1] }} transition={{delay:0.9, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}>
                                    <Button name={"Download Aplikasi"} icon={Star} style="btn-hero relative inline-block px-[24px] py-[16px] text-center text-[14px] 2xl:text-[18px] text-white bg-[#39a739] cursor-pointer transition-all ease-in-out duration-700 rounded-[100px] w-fit flex items-center justify-center gap-[10px]"/>
                                </motion.div>
                            </div>
                            <motion.figure whileInView={{y: [100, 0], opacity: [0, 0.2, 1] }} transition={{delay:0.9, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="2xl:p-[26px] w-[150px] h-[100px] rounded-[24px] bg-white shadow-sm shadow-slate-400 absolute -bottom-[2px] left-0 z-10 transform -rotate-6">
                                <img src={Percentage} alt="" className="w-full h-full object-fit"/>
                            </motion.figure>
                            <motion.div whileInView={{y: [100, 0], opacity: [0, 0.2, 1] }} transition={{delay:1, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="flex flex-col gap-2 bg-white shadow-sm shadow-slate-400 rounded-[24px] w-[445px] h-[100px] absolute -bottom-4 z-20 ml-20 pt-[8px] 2xl:pt-[25px] pb-[100px] pl-[20px] pr-2">
                                <div className="flex items-center gap-[15px]">
                                    <figure className="w-[50px] h-[50px] 2xl:w-[58px] 2xl:h-[58px]">
                                        <img src={Mangcoding} alt="" className="w-full h-full object-cover"/>
                                    </figure>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-[16px] text-[#111111] font-bold">User</h2>
                                        <p className="text-[#ababab] text-[14px]">Nama Toko</p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-2">
                                    <div className="bg-[#0d5cd3] h-[4px] w-[30%]"></div>
                                    <div className="bg-[#9fc3f9] h-[20px] w-[20px] rounded-[50%]"></div>
                                    <div className="bg-[#e7f0fd] h-[4px] w-[36%]"></div>
                                    <div className="bg-[#9fc3f9] h-[20px] w-[20px] rounded-[50%]"></div>
                                    <div className="bg-[#e7f0fd] h-[4px] w-[33%]"></div>
                                </div>
                            </motion.div>
                        </div>
                        {/* box kanan */}
                        <motion.div whileInView={{y: [100, 0], opacity: [0, 0.2, 1] }} transition={{delay:0.7, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="w-[50%] h-full relative flex flex-col items-center justify-center bg-[#fefdfe] border-l border-l-[#e3e3e3] overflow-hidden rounded-tr-[24px] rounded-br-[24px]">
                            <figure className="w-full absolute -top-20 rotate-180 scale-x-[-1]">
                                <img src={BorderHero} alt="" className="w-full h-full object-fill"/>
                            </figure>
                            <figure className="w-full h-[60%] mb-[70px] pl-2">
                                <img src={HeroImg} alt="" className="w-full h-full object-cover"/>
                            </figure>
                            <figure className="w-full absolute bottom-0">
                                <img src={BorderHero} alt="" className="w-full h-full object-fill"/>
                            </figure>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
    }