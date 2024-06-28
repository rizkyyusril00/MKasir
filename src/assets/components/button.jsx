import { motion } from "framer-motion"


export default function Button({type, name, style, icon}){
    return(
        <>
            <motion.button transition={{duration: 0.5}} type={type} className={style}>
                <img src={icon} alt="" />
                <span>{name}</span>
            </motion.button>
        </>
    )
}