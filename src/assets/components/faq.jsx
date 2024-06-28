import Accordion from "./accordion";
import { motion } from "framer-motion"

export default function Faq(){
    return(
        <>
            <section className="faq bg-primary px-3">
                    <div className="faq-box bg-[#ecf3fe] px-[88px] py-[105px] flex gap-[140px]">
                        {/* box kiri */}
                        <div className="flex flex-col gap-3 w-[50%]">
                            <motion.h2 whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[48px] 2xl:text-[52px] text-[#111111] font-bold">Frequently Asked Questions</motion.h2>
                            <motion.p whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.2, duration: 2, ease: "easeInOut" }} viewport={{ once: true }} className="text-[#8c8c8c] text-[14px] 2xl:text-[18px]">Tanyakan kepada Customer Service Kami untuk pertanyaan yang belum terjawab pada colom disamping</motion.p>
                        </div>
                        {/* box kanan */}
                        <div className="w-[50%] flex flex-col gap-0">
                            {/* accordion */}
                            <div className="flex flex-col gap-4 2xl:gap-10">
                                <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.2,duration: 2, ease: "easeInOut" }} viewport={{ once: true }}>
                                    <Accordion title="Accordion 1" isi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit adipisci sed amet fugiat aut vitae molestiae. Ab ipsum reprehenderit aperiam modi unde delectus totam veniam, eos illum laboriosam eum commodi velit dicta illo accusamus at fugiat? Quidem, voluptate quod itaque laborum, beatae minus eveniet perferendis soluta inventore, quaerat commodi!"/>
                                </motion.div>
                                <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.3,duration: 2, ease: "easeInOut" }}>
                                    <Accordion title="Accordion 2" isi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit adipisci sed amet fugiat aut vitae molestiae. Ab ipsum reprehenderit aperiam modi unde delectus totam veniam, eos illum laboriosam eum commodi velit dicta illo accusamus at fugiat? Quidem, voluptate quod itaque laborum, beatae minus eveniet perferendis soluta inventore, quaerat commodi!"/>                                   
                                </motion.div>
                                <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.4,duration: 2, ease: "easeInOut" }}>
                                    <Accordion title="Accordion 3" isi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit adipisci sed amet fugiat aut vitae molestiae. Ab ipsum reprehenderit aperiam modi unde delectus totam veniam, eos illum laboriosam eum commodi velit dicta illo accusamus at fugiat? Quidem, voluptate quod itaque laborum, beatae minus eveniet perferendis soluta inventore, quaerat commodi!"/>
                                </motion.div>
                                <motion.div whileInView={{y: [100, 0], opacity: [0, 1] }} transition={{delay:0.5,duration: 2, ease: "easeInOut" }}>
                                    <Accordion title="Accordion 4" isi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit adipisci sed amet fugiat aut vitae molestiae. Ab ipsum reprehenderit aperiam modi unde delectus totam veniam, eos illum laboriosam eum commodi velit dicta illo accusamus at fugiat? Quidem, voluptate quod itaque laborum, beatae minus eveniet perferendis soluta inventore, quaerat commodi!"/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}