import { useRef } from 'react';
import './service.scss'
import { motion, useInView } from 'framer-motion';
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            staggerChildren: 0.1
        }
    }
}
const Service = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className='service' variants={variants} ref={ref} initial="initial" animate={isInView && "animate"} >
            <motion.div className='textContainer' variants={variants}>
                <p>I focus on helping yout brand grow <br />
                    and move forward</p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                    <button>What We Do?</button>
                </div>
            </motion.div>
            <motion.div className='listContainer ' variants={variants}>
                <motion.div className="box"  whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis in autem tempore numquam beatae eos asperiores ab, assumenda suscipit! Quibusdam iusto beatae molestias sit id quas animi vero iure in.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" variants={variants} whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis in autem tempore numquam beatae eos asperiores ab, assumenda suscipit! Quibusdam iusto beatae molestias sit id quas animi vero iure in.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box"  whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis in autem tempore numquam beatae eos asperiores ab, assumenda suscipit! Quibusdam iusto beatae molestias sit id quas animi vero iure in.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" variants={variants} whileHover={{ background: "lightgray", color: 'black' }} >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis in autem tempore numquam beatae eos asperiores ab, assumenda suscipit! Quibusdam iusto beatae molestias sit id quas animi vero iure in.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Service