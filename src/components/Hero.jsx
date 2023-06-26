import Sam from "../assets/images/sam.png"
import back from "../assets/images/back.png"
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/Bs'



const Hero = () => {


  return (
    <section className="flex flex-col-reverse justify-center gap-5 py-10 mx-5 md:flex-row md:mx-20 md:flex md:py-80 md:px-80" >
  
      <div className="w-full md:w-1/2">
        <div className="text-4xl font-bold md:text-6xl font-pop">
          Front-End React Developer 👋
        </div>
        <p className="py-4 text-sm font-light leading-loose text-justify md:w-3/4">
          Hi, I'm Aluko Samuel. I'm a skilled frontend developer with a passion for creating captivating and user-friendly web experiences. 
          With expertise in HTML, CSS, and JavaScript, 
          I strive to bring designs to life and ensure seamless functionality across different platforms and devices 
        </p>
        <div className="flex gap-5 text-2xl font-bold">
          <BsGithub />
          <BsTwitter />
          <BsLinkedin/>
        </div>
      </div>
      
      <div className="relative top-0 z-0 w-96"> 
          <div>
            <img src={back} alt="" />
          </div>
          <div className="relative z-auto bg-white border-4 border-black-500 rounded-full shadow-xl right-[-20px] top-[-270px] w-80 h-80">
            <img src={Sam} alt="" className="w-screen h-full rounded-full" />
          </div>
      </div>
    </section>
  )
}

export default Hero
