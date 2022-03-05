import React from 'react'
import styles from './Footer.module.css'
import logo from '../../images/Dark2.png'
import fb from "../../images/icons/Social/facebook.png"
import insta from "../../images/icons/Social/instagram.png"
import twitter from "../../images/icons/Social/twitter.png"

export default function Footer() {
    return (
    <section className = {styles.footerContainer}>
    <section className={styles.footerWrapper}>
        <section className={styles.footerAboutCol}>
        <section className={styles.footerTitle}><div>
                <img src={logo} alt="Main Logo" className={styles.footerImage}/>
            </div></section>
          <section className={styles.footerRow}>
              Blah blah blah
          </section>        
        </section>
    <section className={styles.footerWrapperInfo}>
        <section className={styles.footerColumn}>
        <section className={styles.footerTitle}>MarketPlace</section>
          <section className={styles.footerRow}>
            All NFTs
          </section>
          <section className={styles.footerRow}>
            Art
          </section>
          <section className={styles.footerRow}>
            Photography
          </section>
          <section className={styles.footerRow}>
            Music
          </section>
        </section>
        <section className={styles.footerColumn}>
        <section className={styles.footerTitle}>Company</section>
          <section className={styles.footerRow}>
            About
          </section>
          <section className={styles.footerRow}>
            Career
          </section>
          <section className={styles.footerRow}>
            Ventures
          </section>
        </section>

        <section className={styles.footerColumn}>
        <section className={styles.footerTitle}>Resources</section>
          <section className={styles.footerRow}>
            Contact
          </section>
          <section className={styles.footerRow}>
            Partners
          </section>
          <section className={styles.footerRow}>
            Platform Status
          </section>
        </section>
        
        <section className={styles.footerColumn}>
        <section className={styles.footerTitle}>Socials</section>
          <section className={styles.footerRow}>
            <p className={styles.socialPara}><img src={fb} alt="Facebook Logo" className={styles.footerSocialMedia}/>
             Facebook</p>
          </section>
          <section className={styles.footerRow}>
          <p><img src={insta} alt="Facebook Logo" className={styles.footerSocialMedia}/>
             Instagram</p>
          </section>
          <section className={styles.footerRow}>
          <p><img src={twitter} alt="Facebook Logo" className={styles.footerSocialMedia}/>
             Twitter</p>
          </section>
        </section>

        </section>
        
    </section>
    </section>
    )
    
}
