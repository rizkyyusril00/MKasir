import Phone from '../img/phone.png'
import Scan from '../img/Scan.png'
import Print from '../img/Print.png'
import Layer from '../img/Layer.png'
import Graph from '../img/Graph.png'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useRef } from "react"
import React from "react"


export default function WhyUs(){
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
            <section className="whyus relative z-20 bg-primary px-[100px] py-[140px] flex flex-col gap-10">
                <div className="whyus-box1 px-[210px]">
                    <div className="flex flex-col items-center gap-6">
                        <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="py-1 px-5 bg-[#062a60] flex items-center justify-center w-fit rounded-[100px]">
                            <p className="text-center text-white text-[14px] 2xl:text-[18px]">Fitur Mangkasir</p>
                        </motion.div>
                        <motion.h1 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.2, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-center text-[48px] 2xl:text-[52px] text-white font-bold leading-[64px]">Kenapa Harus Mangkasir</motion.h1>
                        <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.4, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-center text-white text-[14px] 2xl:text-[18px]">Mangkasir menyediakan berbagaimacam Fitur yang bisa digunakan untuk Toko kamu, mulai dari Fitur Scan Barcode, Struck, Catatan, Laporan akhir bulan dan lainnya</motion.p>
                    </div>
                </div>
                <div className="whyus-box2 flex">
                    {/* box kiri */}
                    <div className="w-[35%] h-full py-[125px] flex flex-col items-center justify-center gap-[50px] 2xl:gap-[124px]">
                        <div className="w-full h-[50%] flex flex-col gap-5">
                            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#ecfcfe] flex items-center justify-center relative">
                                <motion.img src={Scan} alt="" className='object-center' whileHover={{ scale: 1.1, rotate: 180 }}/>
                                <svg width="579" height="254" className="absolute top-1/2 left-1/2 transform -translate(-50%, -50%) -z-10" viewBox="0 0 579 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H271.5V3C305.189 3 332.5 30.3106 332.5 64V183.5C332.5 221.055 362.945 251.5 400.5 251.5H576.5" stroke="#083578" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <motion.h2 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.3, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[#ecfcfe] font-bold text-[14px] 2xl:text-[18px]">Scan Barcode</motion.h2>
                            <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.4, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="w-[70%] text-[#ecfcfe] text-[14px] 2xl:text-[18px]">Kami menyediakan Fitur Scan barcode untuk mempermudah dan mempercepat pembelian & Fitur Input Manual Untuk Membantu mencari barang dengan cepat</motion.p>
                        </div>
                        <div className="w-full h-[50%] flex flex-col gap-5">
                            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#ecfcfe] flex items-center justify-center relative">
                                <motion.img src={Graph} alt="" className='object-center' whileHover={{ scale: 1.1, rotate: 360 }}/>
                                <svg width="579" height="254" className='absolute bottom-1/2 left-1/2 transform -translate(-50%, -50%) -z-10' viewBox="0 0 579 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 251.5H271.5V251.5C305.189 251.5 332.5 224.189 332.5 190.5V71C332.5 33.4446 362.945 3 400.5 3H576.5" stroke="#0D5CD3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <motion.h2 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.4, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[#ecfcfe] font-bold text-[14px] 2xl:text-[18px]">Laporan Tiap Bulan/Hari</motion.h2>
                            <motion.p  whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.5, duration: 2, ease: "easeInOut" }} viewport={{ once: true }}className="w-[70%] text-[#ecfcfe] text-[14px] 2xl:text-[18px]">Dengan Fitur ini kita sebagai Penjual dapat mengetahui barang masuk, barang keluar, untung dan rugi.</motion.p>
                        </div>
                    </div>
                    {/* box mid */}
                    <motion.figure whileInView={{y: [100, 0], opacity: [0.8, 1]}} transition={{delay:0.6, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="w-[30%]">
                        <img src={Phone} alt="" className='w-full h-full object-fit'/>
                    </motion.figure>
                    {/* box kanan */}
                    <div className="w-[35%] h-full py-[125px] flex flex-col items-center justify-center gap-[50px] 2xl:gap-[124px]">
                        <div className="w-full h-[50%] flex flex-col items-end justify-end gap-5">
                            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#ecfcfe] flex items-center justify-center relative">
                                <motion.img src={Layer} alt="" className='object-center' whileHover={{ scale: 1.1, rotate: 360 }}/>
                                <svg width="579" height="254" className="absolute top-1/2 right-1/2 transform -translate(-50%, -50%) -z-10" viewBox="0 0 579 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M576.5 3H308V3C274.311 3 247 30.3106 247 64V183.5C247 221.055 216.555 251.5 179 251.5H3" stroke="#083578" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <motion.h2 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.3, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[#ecfcfe] font-bold text-end text-[14px] 2xl:text-[18px]">Berjalan Diberbagai Device</motion.h2>
                            <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.4, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="w-[70%] text-[#ecfcfe] text-end text-[14px] 2xl:text-[18px]">Mangkasir dapat digunakan diberbagai device kami menyediakan untuk Smartphone dan Browser</motion.p>
                        </div>
                        <div className="w-full h-[50%] flex flex-col items-end justify-end gap-5">
                            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#ecfcfe] flex items-center justify-center relative">
                                <motion.img src={Print} alt="" className='object-center' whileHover={{ scale: 1.1, rotate: 360 }}/>
                                <svg width="579" height="254" className='absolute bottom-1/2 right-1/2 transform -translate(-50%, -50%) -z-10' viewBox="0 0 579 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M576.5 251.5H308V251.5C274.311 251.5 247 224.189 247 190.5V71C247 33.4446 216.555 3 179 3H3" stroke="#083578" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <motion.h2 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.4, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[#ecfcfe] font-bold text-end text-[14px] 2xl:text-[18px]">Print & Kirim Struck</motion.h2>
                            <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.5, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="w-[70%] text-[#ecfcfe] text-end text-[14px] 2xl:text-[18px]">kamu dapat mencetak dan mengirim struk secara efisien langsung dari sistem untuk memastikan pelanggan menerima bukti transaksi mereka dengan cepat dan tanpa kerumitan</motion.p>
                        </div>
                    </div>
                </div>
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