import '../sidebar.scss'
import { motion } from "framer-motion";
const ToggleButtom = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
                <svg width="24" height="24" fill="none" viewBox='0 0 23 23'>
                    <motion.path stroke='black' strokeLinecap='round' strokeWidth="3" variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 20 2.5" },
                    }} > </motion.path>
                    <motion.path stroke='black' strokeLinecap='round' strokeWidth="3" variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }} d="M 2 10 L 20  10"> </motion.path>
                    <motion.path stroke='black' strokeLinecap='round' strokeWidth="3" variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 3  L  17 16.346" },
                    }} > </motion.path>
                </svg>
        </button>
    )
}

export default ToggleButtom