import React from 'react'
import css from "./Hero.module.css"
import HeroImg from "../../assets/hero.png"
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import { motion } from 'framer-motion'

const Hero = () => {

    const transition = {duration: 3, type: "spring"}
  return (
    <div className={css.container}>

        {/* Left Section*/}
        <div className={css.h_sides}>
            <span className={css.text1}>Beauty Without Boundaries</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Say hello to flawless skin and radiant beauty with our expertly crafted cosmetics.</span>
            </div>
        </div>

        {/* Middle Section */}
        <div className={css.wrapper}>
            {/* BlueCircle Animation */}
            <motion.div 
                initial={{ bottom: "2rem" }}
                whileInView={{ bottom: "0rem"}}
                className={css.blueCircle}
                transition={transition}
                
                ></motion.div>

            {/* heroImage Animation */}
            <motion.img
                transition={transition}
                initial={{bottom: "-2rem"}}
                whileInView={{bottom: "0rem"}}
            src={HeroImg} alt="" width={600}/>



            {/* Signup Animation */}
            <motion.div
                transition={transition}
                initial={{right: "1%"}}
                whileInView={{right: "5%"}}
            className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BsArrowRight />
                    </div>
                </div>
            </motion.div>

        </div>


        {/* Right section */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>13m</span>
                <span>Orders Shipped</span>
            </div>

            <div className={css.customers}>
                <span>700k</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero