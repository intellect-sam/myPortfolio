import Sam from "../assets/images/sam.png";
import { } from 'react-icons'



const Hero = () => {
  return (
    <section className="flex justify-center gap-5 mx-20 py-80 md:px-80" >
  
      <div className="w-1/2">
        <div className="text-6xl font-bold font-pop">
          Front-End React Developer 👋
        </div>
        <p className="w-3/4 py-4 text-sm font-light leading-loose text-justify">
          Hi, I'm Aluko Samuel. I'm a skilled frontend developer with a passion for creating captivating and user-friendly web experiences. 
          With expertise in HTML, CSS, and JavaScript, 
          I strive to bring designs to life and ensure seamless functionality across different platforms and devices 
        </p>
      </div>
      <div className="border border-red-500 rounded-full shadow-xl w-80 h-80">
          <img src={Sam} alt="" className="w-full h-full rounded-md"/>
        {/* <div className="bg-black border border-red-500 rounded-full border-s-4 w-70 h-70">

        </div> */}

      </div>
    </section>
  )
}

export default Hero