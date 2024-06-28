import Logo from '../img/logo.png'
import Button from './button'
import IconPlaystore from '../img/iconplaystore.png'



export default function Footer(){
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
            <footer className="footer py-20 px-[100px] bg-primary border-t-4 border-t-[#083578] border-dashed">
                <div className="footer-box flex gap-[118px]">
                    {/* box kiri */}
                    <div className='flex flex-col gap-[105px] w-[32%] '>
                        <figure className='h-[50%]'>
                            <img src={Logo} alt="" />
                        </figure>
                        <div className='h-[50%] flex gap-5 flex-col'>
                            <p className='text-white 2xl:w-[70%]'>Gunakan Secara Tratur untuk mengatur uang masuk dan uang keluar kamu, dan dapatkan Reward dari Tim Mangkasir!!!</p>
                            <Button name={"Download Aplikasi"} icon={IconPlaystore} style="btn-footer relative inline-block px-[24px] py-[16px] text-center text-[14px] text-white bg-[#111111] border border-white cursor-pointer transition-all ease-in-out duration-700 rounded-[100px] w-fit flex items-center justify-center gap-[10px]"/>
                        </div>
                    </div>
                    {/* box mid */}
                    <div className='flex gap-[80px] w-[48%]'>
                        <div className='flex flex-col gap-6 w-[33%]'>
                            <h2 className='text-[#fff] font-bold'>Hyperlink</h2>
                            <ul className='flex flex-col gap-2'>
                                {menus.map((menu) => (
                                    <li key={menu.id} className='group'>
                                        <a href={menu.link} className='text-[#bdbdbd] group-hover:pl-1 group-hover:text-secondari transition-all ease-in-out duration-300'>{menu.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6 w-[33%]'>
                            <h2 className='text-[#fff] font-bold'>Kenapa kami</h2>
                            <ul className='flex flex-col gap-2'>
                                <li className='group'>
                                    <a href="" className='text-[#bdbdbd] group-hover:pl-1 group-hover:text-secondari transition-all ease-in-out duration-300'>Tentang Kami</a>
                                </li>
                                <li className='group'>
                                    <a href="" className='text-[#bdbdbd] group-hover:pl-1 group-hover:text-secondari transition-all ease-in-out duration-300'>Visi & Misi</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6 w-[33%]'>
                            <h2 className='text-[#fff] font-bold'>Kontak</h2>
                            <ul className='flex flex-col gap-2'>
                                <li className='group'>
                                    <a href="" className='text-[#bdbdbd] group-hover:pl-1 group-hover:text-secondari transition-all ease-in-out duration-300'>Hubungi Kami</a>
                                </li>
                                <li className='group'>
                                    <a href="" className='text-[#bdbdbd] group-hover:pl-1 group-hover:text-secondari transition-all ease-in-out duration-300'>Customer Service</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* box kanan */}
                    <div className="flex flex-col gap-4 w-[19%]">
                        {/* copyright */}
                        <div className='flex items-center justify-end gap-1'>
                            <i className="bi bi-c-circle text-white"></i>
                            <p className='text-[#fff]'>2024</p>
                        </div>
                        {/* sosmed */}
                        <div className='flex items-center justify-end gap-4'>
                            <i className="bi bi-facebook text-white hover:animate-pulse transition-all ease-in-out duration-300 cursor-pointer"></i>
                            <i className="bi bi-twitter-x text-white hover:animate-pulse transition-all ease-in-out duration-300 cursor-pointer"></i>
                            <i className="bi bi-instagram text-white hover:animate-pulse transition-all ease-in-out duration-300 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}