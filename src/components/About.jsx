import styles from "../style"
import Sam from "../assets/images/sam.png"
import back from "../assets/images/back.png"
import {BsPerson} from "react-icons/Bs"


const About = () => {
    return (
        <div className="flex flex-col gap-5 px-10 py-10 text-justify text-white">
            <h1 className="flex gap-2 text-2xl font-bold">About Me <BsPerson/></h1>
            <p>Hello, My name is <span className={`${styles.Span} font-bold`}>Aluko Olakunle Samuel </span> 
             and i enjoy building things
                that you like seeing on the web. 
                My interest for programming has been since 
                i got into the university where i read online blog and wrote HTLM and CSS codes 
                on paper, well i could not affort a computer but was still fun 😂 for me then
                . However, i started the journey 2020 during the 
                pademic, 
            </p>
            <p>
            Throughout my career, I have had the privilege of working collaboratively 
            in various settings, including a <span className={`${styles.Span}`}>residency agency, a start-up, and a student-led 
            design</span>
            . These experiences have provided me with valuable insights and diverse 
            perspectives.
            </p>
            <p>
            Currently, my main focus lies in the development of accessible and inclusive 
            products and digital experiences for a wide range of clients. I am passionate 
            about ensuring that everyone, regardless of their abilities, can engage with 
            and benefit from the products I create.
            </p>
            <p>
            Working at the residency agency, start-up, and student-led design has equipped 
            me with a versatile skill set and the ability to adapt to different challenges. 
            Each environment has contributed to my growth as a professional.
            </p>
            <div className="flex justify-center w-full">

           <div className=" md:visible w-60 h-60 opacity-20">
              <img src={back} alt="" />
            </div>

            <div className="absolute bottom-[-760px] right-[30px] border-4 border-[#e8b025] rounded-xl w-[170px] h-[175px]">


            </div>
           <div className="relative bottom-0 right-0 z-0 bg-[#c5c2c2] border-2 border-black rounded-xl w-60 h-60">
             <img src={Sam} alt="" className="w-screen h-full" />
            </div>
          </div>
  
        </div>
    )
}

export default About
