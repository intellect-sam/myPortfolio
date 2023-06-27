// import styles from "./style";
import { Navbar, Hero, Home } from "./components";

const App = () => (
  <div className="overflow-hidden">
    <div className="bg-[#030712] border-b-4 shadow-md border-black">
      <div>
        <Navbar />
      </div>
    </div>
    {/* <div>
      <Home/>
    </div> */}

    <div className="md:w-full">
        <Hero />
    </div>
    
    {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div> */}
  </div>
);

export default App;