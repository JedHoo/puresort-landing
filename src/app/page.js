import Image from 'next/image'
import styles from "./page.module.css";
import { Dancing_Script, JetBrains_Mono } from 'next/font/google';
const jetBrainsMono = JetBrains_Mono({subsets: ['latin']});

console.log(jetBrainsMono)


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.underlay}>
        <img
            src="/texture.svg"
            alt="texture"
            width="100%"
            height="auto"
            priority
          />
      </div>


      <div className={styles.title}>
        <img
          src="/title.svg"
          alt="Title"
          width="100%"
          height="100%"
          priority
        />

        <div className={styles.textbox}>
          <div className={styles.subtitle}>
            problem
          </div>
          <div className={styles.body}>
          all waste to be recycled needs to be sorted manually and not be 
          contaminated, making recycling in Australia incredibly cost-prohibitive.
          <br/>
          <br/>
          sustainable event organisers pay up to 20-30k per event JUST to sort waste using manual labour
          </div>
        </div>

        <div className={styles.textbox}>
          <div className={styles.subtitle}>
            vision
          </div>
          <div className={styles.body}>
          all waste is sorted automatically: affordable sustainability, 
          zero contamination, zero human input <br/>
          <br/>
          providing recyclers with the 
          best opportunity of bringing a new life to the most abundant 
          resource...<br/>
          <br/>
          waste.

          </div>
        </div>

        <div className={styles.textbox}>
          <div className={styles.subtitle}>
            mission
          </div>
          <div className={styles.body}>
          use tech to catalyse recycling in Australia and propel the world towards a future in circular economy.

          </div>
        </div>
      </div>        


      <div className={styles.topBar}>

        <div className={styles.navButtons}>
          <div className={styles.home}>
            <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
            home
            </a>  
          </div>

          <div className={styles.about}>
            <a
              href="/about"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              >
              about
            </a>
          </div>      

          <div className={styles.exclusiveAccess}>
            <a
                href="/exclusive-access"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                exclusive access
            </a>
          </div>     
        </div>

        <div className={styles.socials}>
          <div>
            <a
              href="https://www.instagram.com/jed_hoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram-black.png"
                alt="Title"
                width={23}
                height={23}
                style={{opacity:0.3}}
                priority
              />
            </a>
          </div>

          <div className={styles.linkedin}>
            <a
              href="https://www.linkedin.com/in/jed-hoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-black.png"
                alt="Title"
                width={23}
                height={23}
                style={{opacity:0.3}}
                priority
              />
            </a>
          </div>
        </div>
        
      </div>  



    </main>
  );
}


