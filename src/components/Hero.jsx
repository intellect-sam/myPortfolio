import Sam from "../assets/images/sam.png"
import back from "../assets/images/back.png"
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/Bs'



const Hero = () => {


  return (
    <section className="flex flex-col-reverse justify-center px-10 py-4 md:gap-5 md:flex-row md:mx-40 md:flex md:py-80 md:px-96" >
  
      <div className="w-full mt-[-250px] md:mt-0 justify-center text-center md:text-left">
        <div className="w-full text-4xl font-bold md:text-6xl font-pop">
          Front-End React Developer 👋
        </div>
        <p className="py-4 text-sm font-light leading-loose text-justify md:w-3/4">
          Hi, I'm Aluko Samuel, a skilled frontend developer with a passion for creating captivating and user-friendly web experiences. 
          With expertise in HTML, CSS, and JavaScript, 
          I strive to bring designs to life and ensure seamless functionality across different platforms and devices 
        </p>
        <div className="flex justify-center gap-5 text-2xl font-bold md:items-start">
          <BsGithub />
          <BsTwitter />
          <BsLinkedin/>
        </div>
      </div>
      
      <div className="flex justify-center w-full">
        <div className="relative top-0 w-96"> 
            <div className="invisible md:visible">
              <img src={back} alt="" />
            </div>
            <div className="relative z-0 bg-white border-4 border-black-500 rounded-full shadow-xl right-[-20px] top-[-270px] w-80 h-80">
              <img src={Sam} alt="" className="w-screen h-full rounded-full" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
