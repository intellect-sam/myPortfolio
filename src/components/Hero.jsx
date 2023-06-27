// import Sam from "../assets/images/sam.png"
// import back from "../assets/images/back.png"
import { js, css, html, reactlogo, boot, tailwind, code, code2 } from "../assets/images"
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/Bs'
import styles from "../style"


const Hero = () => {
      

  return (
    <section className={`flex flex-col-reverse justify-center px-10 py-4 md:gap-5 md:flex-row md:mx-20 md:flex md:py-80 md:px-96 ${styles.textWhite}`} >
      <img src={code2} alt="" className="absolute md:top-[-450px] top-[-50px] left-[-100px] opacity-10 md:left-[-550px] md:opacity-5 w-1/2 -z-50" />
      <img src={code} alt="" className="absolute md:top-[-200px] top-[250px] left-0 w-[900px] md:w-full opacity-5 md:opacity-10 -z-50"/>
      <div className="justify-center w-full mt-[100px] text-center md:mt-0 md:text-left">
          <div className="w-full text-5xl font-bold md:text-8xl font-pop">
            Aluko O. Samuel.
          </div>
          <p className="py-4 my-3 md:text-xl font-light text-justify text-[#475569] md:text-justify md:w-2/3">
            I'm a software engineer focused on building beautiful interfaces and experiences, 
            specializing in crafting exceptional digital experiences. With a keen eye for design, 
            I not only build but also contribute to the aesthetic aspects of the products I work on 👨‍💻
          </p>
          <div className="flex justify-center gap-5 text-2xl font-bold md:justify-start md:items-start">
            <BsGithub />
            <BsTwitter />
            <BsLinkedin/>
          </div>
            <div className="py-10">
              <div>
                <p className={`bg-primary ${styles.Stack} my-5`}>Tech Stacks</p>
              </div>
              <div className="flex justify-center w-full gap-4 md:justify-start">
                <div className={`${styles.StackBox}` }>
                  <img src={html} alt=""/>
                </div>
                <div className={`${styles.StackBox}` }>
                  <img src={css} alt=""/>
                </div>
                <div className={`${styles.StackBox}` }>
                  <img src={js} alt=""/>
                </div>
                <div className={`${styles.StackBox}` }>
                  <img src={tailwind} alt=""/>
                </div>
                <div className={`${styles.StackBox}` }>
                  <img src={boot} alt=""/>
                </div>
                <div className={`${styles.StackBox}` }>
                  <img src={reactlogo} alt=""/>
                </div>
              </div>
          </div>
      </div>
      {/* <div className="flex justify-center w-full">
        <div className="relative top-0 w-96"> 
           <div className="invisible md:visible">
              <img src={back} alt="" />
            </div>
           <div className="relative z-0 bg-white border-4 border-black-500 rounded-full shadow-xl right-[-20px] top-[-270px] w-80 h-80">
             <img src={Sam} alt="" className="w-screen h-full rounded-full" />
            </div>
          </div>
      </div> */}

    </section>
  )
}

export default Hero
