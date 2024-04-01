import { useRef } from 'react';
import './portfolio.scss';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://img.freepik.com/free-vector/landing-page-travel-with-photo_23-2148378328.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cumque neque praesentium maiores, iure sed ex eaque autem assumenda, modi esse ad, quasi ducimus dicta non libero eius vitae in."
    },
    {
        id: 1,
        title: "flutter Commerce",
        img: "https://as2.ftcdn.net/v2/jpg/02/99/30/85/1000_F_299308514_BUiLO6N00FSfLpHWGTrHHyex12KU7oS8.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cumque neque praesentium maiores, iure sed ex eaque autem assumenda, modi esse ad, quasi ducimus dicta non libero eius vitae in."
    },
    {
        id: 1,
        title: "NextJs Website",
        img: "https://i.ytimg.com/vi/Jydr0kw5LYA/maxresdefault.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cumque neque praesentium maiores, iure sed ex eaque autem assumenda, modi esse ad, quasi ducimus dicta non libero eius vitae in."
    },
    {
        id: 1,
        title: "Mern Stack ",
        img: "https://crocoblock.com/wp-content/uploads/2023/04/Website_Layout_Essentials.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat cumque neque praesentium maiores, iure sed ex eaque autem assumenda, modi esse ad, quasi ducimus dicta non libero eius vitae in."
    }
]
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return <section >
        <div className='container'>
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >
                        {item.title}
                    </h2>
                    <p>{item.desc}</p>
                    <button>See demo</button>
                </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressBar'>
                </motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio