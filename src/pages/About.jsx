import React, {useContext} from 'react';
//import images
import WomanImg from '../img/about/woman.png';
//import link
import { Link } from 'react-router-dom';
//import motion 
import { transition1 } from '../transitions';
//import motion 
import { motion } from 'framer-motion';
//import context
import { CursorContext } from '../context/Cursor';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100%'}} transition={transition1} className='section'>
      <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="container mx-auto h-full relative">
          <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
            <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
              <img src={WomanImg} alt="" />
            </div>
            <motion.div initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-80%'}} transition={transition1}  className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
              <h1 className='h1'>Sobre mim</h1>
              <p className='mb-12 max-w-sm'>Olá! Eu sou Lin. <b>Sou apaixonada por fotografia e sou cineasta.</b> Adoro capturar momentos especiais e contar histórias através das minhas lentes.</p>
              <p>A paixão por fotografar e filmar vai além do simples ato de apertar o botão do obturador ou gravar um vídeo.</p>
              <br />
              <Link to={'/portifolio'} className='btn' >Veja meu trabalho</Link>
            </motion.div>
          </div>
      </motion.div>
    </motion.section>
  )
}

export default About
