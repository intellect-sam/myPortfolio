// import styles from "./style";
import { Navbar, Hero } from "./components";

const App = () => (
  <div className="overflow-hidden bg-white ">
    <div className="px-16 border-b-4 shadow-xl border-white-500">
      <div>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> */}
    
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