import { useState } from "react"

export default function Accordion({title, isi}){
    const [accordionOpen, setAccordionOpen]  = useState(false);

    return(
        <>
            <div onClick={() => setAccordionOpen(!accordionOpen)} className="bg-white cursor-pointer relative rounded-[16px] z-20">
                {/* Button accordion */}
                <div  className="flex justify-between w-full px-6 py-4 bg-transparent">
                    <span className="font-bold text-black">{title}</span>
                </div>
                {/* isi accordion */}
                <div className={`bg-transparent grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100 pl-6 pr-20 py-4" : "grid-rows-[0fr] opacity-0 pl-6 pr-20 py-0"}`}>
                    <div className={`text-[#737373] overflow-hidden transition-all duration-500 delay-300 ease-in-out ${accordionOpen ? "opacity-100" : "opacity-0"}`}>{isi}</div>
                </div>
                {/* Icon */}
                <div className={`absolute transition-all w-[30px] h-[30px] rounded-[50%] flex items-center justify-center border border-[#737373] duration-500 ease-in-out ${accordionOpen ? "top-1/2 right-6 transform translate-y-1/2 rotate-[0]" : "top-4 right-6 transform translate-y-0 rotate-[-180deg]"}`}>
                    <i className="fa-solid fa-angle-up text-[#0d5cd3] text-center text-[14px] pt-[2px]"></i>
                </div>
            </div>
        </>
    )
}