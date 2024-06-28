import Laptop from "../img/laptop.png"
import Button from "./button"
import Star from "../img/iconStar.png"
import { motion } from "framer-motion"

export default function Special(){
    return(
        <>
            <section className="Special  bg-primary px-3">
                    <div className="Special-box bg-[#ecf3fe] relative z-20 px-[88px] py-[105px] flex gap-[140px] rounded-b-[24px]">
                        {/* box kiri */}
                        <div className="flex flex-col items-start justify-center gap-6 w-[50%]">
                            <motion.h2 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[48px] 2xl:text-[52px] text-[#111111] font-bold">Menjadi salah satu dari Pelanggan Special Kami</motion.h2>
                            <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.2,duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[#8c8c8c] text-[14px] 2xl:text-[18px]">Gunakan Secara Tratur untuk mengatur uang masuk dan uang keluar kamu, dan dapatkan Reward dari Tim Mangkasir!!!</motion.p>
                            <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.3,duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>
                                <Button name={"Registrasi Sekarang"} icon={Star} style="btn-hero relative inline-block px-[24px] py-[16px] text-center text-[14px] 2xl:text-[18px] text-white bg-[#39a739] cursor-pointer transition-all ease-in-out duration-700 rounded-[100px] w-fit flex items-center justify-center gap-[10px]"/>
                            </motion.div>
                        </div>
                        {/* box kanan */}
                        <div className="w-[50%] flex flex-col gap-0">
                            <motion.figure whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.2,duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>
                                <img src={Laptop} alt="" />
                            </motion.figure>
                        </div>
                    </div>
            </section>
        </>
    )
}