import Logo from '../img/logo.png'
import Button from './button'
import { motion } from "framer-motion"


export default function Nav() {
    const delay = 0.1
    const menus =[
        {
            id: 1,
            name: 'Home',
            link: '#',
        },
        {
            id: 2,
            name: 'Device',
            link: '#',
        },
        {
            id: 3,
            name: 'Fitur',
            link: '#',
        },
        {
            id: 4,
            name: 'Keunggulan',
            link: '#',
        },
        {
            id: 5,
            name: 'FAQ',
            link: '#',
        },
        {
            id: 6,
            name: 'Kontak',
            link: '#',
        },
    ]
    return(
        <>
            <div className="nav mx-auto">
                <div className="nav-box bg-primary flex items-center justify-between py-4 px-[100px]">
                    {/* logo */}
                    <motion.figure  whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }} className="w-[140px] 2xl:w-[180px] h-full">
                        <img src={Logo} alt="" className='w-full h-full object-cover'/>
                    </motion.figure>
                    <ul className='flex items-center gap-8 2xl:gap-10'>
                        {menus.map((menu, index) => (
                            <motion.li key={menu.id}  whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay: delay + index * 0.1, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}>
                                <motion.a href={menu.link} className='text-white hover:text-secondari text-[18px] 2xl:text-[22px]'>{menu.name}</motion.a>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay: 0.7, duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}>
                        <Button name="Buat Akun" icon="" style="btn-nav relative inline-block px-[24px] py-[12px] text-center text-[14px] 2xl:text-[18px] text-white bg-[#39a739] cursor-pointer transition-all ease-in-out duration-700 rounded-[100px] border border-secondari hover:border-white"/>
                    </motion.div>
                </div>
            </div>
        </>
    )
}