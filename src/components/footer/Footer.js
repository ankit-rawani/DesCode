import React from 'react'
import styles from './Footer.module.css'
import logo from '../../images/Light2.png'
import insta from '../../images/icons/Social/instagram.svg'
import twitter from '../../images/icons/Social/twitter.svg'
import telegram from '../../images/icons/Social/telegram.svg'
import discord from '../../images/icons/Social/discord.svg'

export default function Footer() {
    return (
        <section>
            <section className={styles.footerContainer}>
                <section className={styles.footerWrapper}>
                    <section className={styles.footerAboutCol}>
                        <section className={styles.footerTitle}>
                            <div>
                                <img
                                    src={logo}
                                    alt="Main Logo"
                                    className={styles.footerImage}
                                />
                            </div>
                        </section>
                        <section className={styles.footerRowAbout}>
                            <p className={styles.footerEmailHead}>
                                Get the Latest Updates
                            </p>
                        </section>
                        <section className={styles.footerRowAbout}>
                            <div className={styles.searchContainer}>
                                <input
                                    className={styles.searchBar}
                                    type="text"
                                    placeholder="Your Email"
                                />
                                <button className={styles.button}>
                                    Email Me!
                                </button>
                            </div>
                        </section>
                    </section>
                    <section className={styles.footerWrapperInfo}>
                        <section className={styles.footerColumn}>
                            <section className={styles.footerTitle}>
                                Graphique NFT
                            </section>
                            <section className={styles.footerRow}>
                                Explore
                            </section>
                            <section className={styles.footerRow}>
                                How it Works
                            </section>
                            <section className={styles.footerRow}>
                                Contact Us
                            </section>
                        </section>
                        <section className={styles.footerColumn}>
                            <section className={styles.footerTitle}>
                                Support
                            </section>
                            <section className={styles.footerRow}>
                                Help Center
                            </section>
                            <section className={styles.footerRow}>
                                Terms of Service
                            </section>
                            <section className={styles.footerRow}>
                                Legal
                            </section>
                            <section className={styles.footerRow}>
                                Privacy Policy
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className={styles.copyright}>
                &copy; Graphique 2021-22. All right reserved.
                <p style={{ float: 'right' }}>
                    <img
                        src={insta}
                        alt="Main Logo"
                        className={styles.footerSocialMedia}
                    />
                    <img
                        src={twitter}
                        alt="Main Logo"
                        className={styles.footerSocialMedia}
                    />
                    <img
                        src={telegram}
                        alt="Main Logo"
                        className={styles.footerSocialMedia}
                    />
                    <img
                        src={discord}
                        alt="Main Logo"
                        className={styles.footerSocialMedia}
                    />
                </p>
            </section>
        </section>
    )
}
