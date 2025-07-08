"use client"
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-white h-screen">
   
      <motion.div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
        animate={{
          transform: [
            'translateX(0%) translateY(0rem) rotate(0deg)',
            'translateX(10%) translateY(-5rem) rotate(20deg)',
            'translateX(0%) translateY(0rem) rotate(0deg)',
          ],
        }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] [clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)]"
        />
      </motion.div>

    
      <motion.div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
        animate={{
          transform: [
            'translateX(-20%) translateY(5rem) rotate(0deg)',
            'translateX(0%) translateY(-5rem) rotate(-15deg)',
            'translateX(-20%) translateY(5rem) rotate(0deg)',
          ],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9effb7] to-[#4c87ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] [clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)]"
        />
      </motion.div>
    </div>
  );
}