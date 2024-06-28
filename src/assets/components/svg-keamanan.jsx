import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useRef } from "react"
import React from "react"

export default function SvgKeamanan(){
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(192, 211, 243, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(192, 211, 243, 1)"
        }
    }
    // const icon2 = {
    //     hidden: {
    //       pathLength: 0,
    //       fill: "rgba(13, 92, 211, 0)"
    //     },
    //     visible: {
    //       pathLength: 1,
    //       fill: "rgba(13, 92, 211, 1)"
    //     }
    // }
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
            <motion.svg width="335" height="500" viewBox="0 0 335 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* garis */}
                                            <motion.path d="M91.5425 407.527L79.2527 421.284C70.2111 431.406 65.2134 444.502 65.2134 458.073V505.55C65.2134 532.692 65.2134 574.568 65.2134 601.71M65.2134 620.752V655.027M241.647 406L255.301 421.284C264.342 431.406 269.34 444.502 269.34 458.073V505.55V601.71M269.34 620.752V655.027" stroke="#B3E5B3" stroke-width="10" stroke-linecap="square" classname="item3"/>
                                            <motion.path d="M111.993 156.74V56.7708V-34.6292M165.576 128V38.6812V-67M220.861 156.74V56.7708V-67M111.993 -48.9104V-67" stroke="#B3E5B3" stroke-width="10" stroke-linecap="square" classname="item3"/>
                                            <motion.path d="M91.5425 180.5L79.2527 166.743C70.2111 156.622 65.2134 143.525 65.2134 129.954V82.4771C65.2134 55.3348 65.2134 13.4589 65.2134 -13.6833M65.2134 -32.725V-67M241.647 182.027L255.301 166.743C264.342 156.622 269.34 143.525 269.34 129.954V82.4771V-13.6833M269.34 -32.725V-67" stroke="#B3E5B3" stroke-width="10" stroke-linecap="square" classname="item3"/>
                                            {/* end garus */}
                                            <g filter="url(#filter0_b_628_12447)">
                                            <path d="M149.237 87.2256C159.809 80.3932 173.404 80.3932 183.976 87.2256L227.407 115.294C236.529 121.19 242.038 131.309 242.038 142.17V204.83C242.038 215.691 236.529 225.81 227.407 231.706L183.976 259.774C173.404 266.607 159.809 266.607 149.237 259.774L105.807 231.706C96.6849 225.81 91.176 215.691 91.176 204.83V142.17C91.176 131.309 96.6849 121.19 105.807 115.294L149.237 87.2256Z" fill="white"/>
                                            <motion.path d="M149.237 87.2256C159.809 80.3932 173.404 80.3932 183.976 87.2256L227.407 115.294C236.529 121.19 242.038 131.309 242.038 142.17V204.83C242.038 215.691 236.529 225.81 227.407 231.706L183.976 259.774C173.404 266.607 159.809 266.607 149.237 259.774L105.807 231.706C96.6849 225.81 91.176 215.691 91.176 204.83V142.17C91.176 131.309 96.6849 121.19 105.807 115.294L149.237 87.2256Z" className="item" variants={icon}
                                                initial="hidden"
                                                animate={controls}
                                                transition={{
                                                    default: { duration: 2, ease: "easeInOut" },
                                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                                }}/>
                                            </g>
                                            <g opacity="0.6" filter="url(#filter1_f_628_12447)">
                                            <ellipse cx="167.42" cy="229.5" rx="45.5" ry="1.5" fill="#BDBDBD"/>
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M165.218 193.162V202.014C165.218 202.94 166.007 203.69 166.92 203.69C167.86 203.69 168.622 202.912 168.622 202.014V193.162C170.606 192.46 172.027 190.564 172.027 188.336C172.027 185.509 169.741 183.218 166.92 183.218C164.099 183.218 161.813 185.509 161.813 188.336C161.813 190.564 163.234 192.46 165.218 193.162ZM141.384 166.157V154.213C141.384 140.078 152.817 128.625 166.92 128.625C180.994 128.625 192.456 140.081 192.456 154.213V166.157C198.105 166.174 202.67 170.765 202.67 176.426V193.454C202.67 208.498 190.476 220.75 175.435 220.75H158.405C143.38 220.75 131.17 208.529 131.17 193.454V176.426C131.17 170.728 135.74 166.173 141.384 166.157ZM151.598 166.157V154.218C151.598 145.717 158.458 138.861 166.92 138.861C175.364 138.861 182.241 145.737 182.241 154.218V166.157H151.598Z" fill="#39A739"/>
                                            <g filter="url(#filter2_b_628_12447)">
                                            <path d="M69.7306 241.226C80.3023 234.393 93.8977 234.393 104.469 241.226L147.9 269.294C157.022 275.19 162.531 285.309 162.531 296.17V358.83C162.531 369.691 157.022 379.81 147.9 385.706L104.469 413.774C93.8977 420.607 80.3023 420.607 69.7306 413.774L26.2998 385.706C17.1781 379.81 11.6692 369.691 11.6692 358.83V296.17C11.6692 285.309 17.1781 275.19 26.2998 269.294L69.7306 241.226Z" fill="white"/>
                                            <path d="M69.7306 241.226C80.3023 234.393 93.8977 234.393 104.469 241.226L147.9 269.294C157.022 275.19 162.531 285.309 162.531 296.17V358.83C162.531 369.691 157.022 379.81 147.9 385.706L104.469 413.774C93.8977 420.607 80.3023 420.607 69.7306 413.774L26.2998 385.706C17.1781 379.81 11.6692 369.691 11.6692 358.83V296.17C11.6692 285.309 17.1781 275.19 26.2998 269.294L69.7306 241.226Z" stroke="#E3E3E3"/>
                                            </g>
                                            <g opacity="0.6" filter="url(#filter3_f_628_12447)">
                                            <ellipse cx="87.9136" cy="374.5" rx="45.5" ry="1.5" fill="#BDBDBD"/>
                                            </g>
                                            <path d="M111.824 322.636L99.4352 360.972C98.8083 362.909 97.0254 364.064 95.2099 363.699L54.8969 355.613C52.6765 355.167 51.2985 352.653 51.9385 350.233L61.4666 314.347C61.6952 313.491 62.1523 312.746 62.7792 312.197L81.6068 295.925C82.2729 295.354 83.0827 295.047 83.9186 295.047H85.7864C85.6949 295.523 85.6492 296.02 85.6492 296.524C85.6492 299.243 86.9945 301.605 88.9798 302.833C88.8622 304.229 89.1496 305.333 89.7439 305.508C90.3316 305.684 91.05 304.931 91.579 303.703C91.6965 303.432 91.8075 303.133 91.8924 302.811C91.9447 302.657 91.9904 302.497 92.0296 302.328C92.0687 302.175 92.1014 302.021 92.1275 301.868C92.4736 300.07 92.2059 298.512 91.4875 298.293C90.7822 298.081 89.8745 299.222 89.3586 300.91C88.1178 299.945 87.308 298.337 87.308 296.524C87.308 296.012 87.3733 295.515 87.4974 295.047H100.029C101.558 295.047 102.929 296.063 103.517 297.635L111.758 319.559C112.124 320.538 112.15 321.635 111.824 322.636Z" fill="#39A739"/>
                                            <path d="M102.445 297.167L114.71 319.23C115.173 320.056 115.337 321.05 115.187 322.008L109.479 357.39C109.165 359.32 107.637 360.694 105.894 360.628L94.9614 360.189L108.336 314.807L102.445 297.167Z" stroke="#39A739" stroke-width="1.46206" stroke-miterlimit="10"/>
                                            <path d="M76.6307 310.713L81.8616 311.283C82.2208 311.32 82.4559 311.729 82.3384 312.109L79.1515 322.483C79.0078 322.951 79.4845 323.345 79.8437 323.06L92.637 312.775C92.7807 312.658 92.9636 312.599 93.1399 312.607L99.2786 312.892C99.5464 312.906 99.6509 313.279 99.4419 313.462L84.6828 326.533C84.402 326.781 84.291 327.198 84.402 327.578L90.1554 347.601C90.2665 347.981 89.953 348.354 89.6069 348.252L84.069 346.607C83.7033 346.497 83.4159 346.19 83.3114 345.788L79.2625 331.08C79.1711 330.758 78.8315 330.619 78.5768 330.809L76.6568 332.242C76.4609 332.388 76.3107 332.608 76.2388 332.863L73.5156 342.513C73.4046 342.9 73.0454 343.12 72.6927 343.01L67.8863 341.504C67.3573 341.336 67.0634 340.707 67.2397 340.13L76.056 311.137C76.1343 310.859 76.376 310.684 76.6307 310.713Z" fill="white"/>
                                            <path d="M92.5785 303.805C96.7262 303.805 100.089 300.041 100.089 295.398C100.089 290.755 96.7262 286.991 92.5785 286.991C88.4308 286.991 85.0684 290.755 85.0684 295.398C85.0684 300.041 88.4308 303.805 92.5785 303.805Z" stroke="#39A739" stroke-width="2.19309" stroke-miterlimit="10"/>
                                            <g filter="url(#filter4_b_628_12447)">
                                            <path d="M230.53 241.226C241.102 234.393 254.697 234.393 265.269 241.226L308.7 269.294C317.822 275.19 323.331 285.309 323.331 296.17V358.83C323.331 369.691 317.822 379.81 308.7 385.706L265.269 413.774C254.697 420.607 241.102 420.607 230.53 413.774L187.1 385.706C177.978 379.81 172.469 369.691 172.469 358.83V296.17C172.469 285.309 177.978 275.19 187.1 269.294L230.53 241.226Z" fill="white"/>
                                            <path d="M230.53 241.226C241.102 234.393 254.697 234.393 265.269 241.226L308.7 269.294C317.822 275.19 323.331 285.309 323.331 296.17V358.83C323.331 369.691 317.822 379.81 308.7 385.706L265.269 413.774C254.697 420.607 241.102 420.607 230.53 413.774L187.1 385.706C177.978 379.81 172.469 369.691 172.469 358.83V296.17C172.469 285.309 177.978 275.19 187.1 269.294L230.53 241.226Z" stroke="#E3E3E3"/>
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M253.595 334.859L241.593 346.861H233.649V354.806H225.704V362.75H212.463V349.509L240.355 321.618C239.443 319.171 238.945 316.523 238.945 313.759C238.945 301.328 249.023 291.25 261.454 291.25C273.886 291.25 283.963 301.328 283.963 313.759C283.963 326.191 273.886 336.269 261.454 336.269C258.69 336.269 256.042 335.77 253.595 334.859ZM276.019 307.139C276.019 302.751 272.462 299.194 268.074 299.194C263.687 299.194 260.13 302.751 260.13 307.139C260.13 311.526 263.687 315.083 268.074 315.083C272.462 315.083 276.019 311.526 276.019 307.139Z" fill="#39A739"/>
                                            <g opacity="0.6" filter="url(#filter5_f_628_12447)">
                                            <ellipse cx="248.713" cy="374.5" rx="45.5" ry="1.5" fill="#BDBDBD"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_b_628_12447" x="75.6758" y="66.6013" width="181.862" height="213.797" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_628_12447"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_628_12447" result="shape"/>
                                            </filter>
                                            <filter id="filter1_f_628_12447" x="111.92" y="218" width="111" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_628_12447"/>
                                            </filter>
                                            <filter id="filter2_b_628_12447" x="-3.83105" y="220.601" width="181.862" height="213.797" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_628_12447"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_628_12447" result="shape"/>
                                            </filter>
                                            <filter id="filter3_f_628_12447" x="32.4136" y="363" width="111" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_628_12447"/>
                                            </filter>
                                            <filter id="filter4_b_628_12447" x="156.969" y="220.601" width="181.862" height="213.797" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_628_12447"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_628_12447" result="shape"/>
                                            </filter>
                                            <filter id="filter5_f_628_12447" x="193.213" y="363" width="111" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_628_12447"/>
                                            </filter>
                                            </defs>
            </motion.svg>
        </>
    )
}