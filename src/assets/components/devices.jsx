import Logo2 from '../img/logo2.png'
import DeviceMobile from '../img/deviceMobile.png'
import DeviceWeb from '../img/deviceWeb.png'
import IconPlaystore from '../img/iconplaystore.png'
import IconNewTab from '../img/iconkunjungiweb.png'
import CardDevices from './card-device';
import { motion } from "framer-motion"





export default function Devices() {

    return(
        <>
            <section className="devices bg-primary px-3">
                <div className="devices-box relative z-40 bg-[#ecf3fe] py-[105px] rounded-bl-[24px] rounded-br-[24px] flex flex-col gap-10">
                    {/* box atas */}
                    <div className="flex flex-col items-center gap-6 px-[300px]">
                        <motion.div className="py-1 px-5 bg-[#cfe1fc] flex items-center justify-center w-fit rounded-[100px]" whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>
                            <p className="text-center text-[#111111] text-[14px] 2xl:text-[18px]">Device yang bisa digunakan</p>
                        </motion.div>
                        <motion.h2 className="text-[#111111] text-[48px] 2xl:text-[52px] font-bold leading-[64px] gap-4 text-center"  whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.5, duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>Temukan kemudahan dengan Mangkasir</motion.h2>
                        <motion.p className="text-[#8c8c8c] text-center text-[14px] 2xl:text-[18px]"  whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.7, duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>Kami menyediakan beberapa Device untuk memudahkan transaksi, Mulai Mobile Applikasi dan Browser, dengan tampilan User Friendly</motion.p>
                    </div>
                    {/* box bawah */} 
                    <div className="flex gap-6 items-center px-[88px]">
                        {/* box kiri */}
                        <CardDevices logo={Logo2} icon={IconPlaystore} img={DeviceMobile} title="Aplikasi" titleBtn="Download Playstore" desc="Dengan Smartphon kamu bisa menggunakan Applikasi Mangkasir, kami menyediakan Fitur Guide Flow untuk Applikasi ini"/>
                        {/* box kanan */}
                        <CardDevices logo={Logo2} icon={IconNewTab} img={DeviceWeb} title="Browser" titleBtn="Registrasi sekarang" desc="Kami menyediakan beberapa Device untuk memudahkan customer, Mulai dari Applikasi, Desktop dan Website, dengan data yang tidak akan berubah karena"/>
                    </div>
                </div>
            </section>
        </>
    )
}