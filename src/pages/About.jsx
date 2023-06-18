import logo from './../img/mujoAbout.svg';
import background from './../img/background.png';
import './../styles/about.css';
import How from '../components/how/How';
import Preparation from '../components/preparation/Preparation';
import Benefits from '../components/benefits/Benefits';



const About = () => {
  return (
    <>
      <main className='main__about'>
        <section>
          <div className='about__wrapper'>
            <div className='logo__wrapper'>
              <img src={logo} alt="mujo logo" />
            </div>
            <div className='logo__text'>
              <p className='text__stress'>Our mission is to empower people to make choices they are proud of</p>
              <p className='text__natural'>For their bodies, their minds, and the planet.</p>
            </div>
          </div>
          <div className='background__wrapper'>
            <img className='background' src={background} alt="" />
          </div>
        </section>

        <section className='born'>
          <div className='born__container'>
            <p className='born__title'>Mujo was born from the joys and challenges of new motherhood. </p>
            <p className='born__text'>Exhausted, but blissfully in love with my new baby, I was on a mission to feel my best so I could be a great mom, a present wife, and to continue to thrive in my career. We can achieve so much more when we feel good.</p>
          </div>
        </section>
        <Preparation />
        <How />
        <Preparation />
        <Benefits/>

        <section className='born'>
          <div className='born__container'>
            <p className='born__title'>We want our products to 
reflect our 
values </p>
            <p className='born__text'>Our commitment to you is that we will work with ingredient suppliers that set the highest industry standards from harvesting to extraction and they respect our planet while doing so. Each Mujo batch is tested for heavy metals, aflatoxins, mycotoxins, mold, yeast and pesticides so we can feel confident we’re delivering only the best to you. </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default About