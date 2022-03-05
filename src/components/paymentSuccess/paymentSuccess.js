import React from 'react'
import styles from './paymentSuccess.module.css'
import insta from '../../images/icons/Social/instagram.svg'
import twitter from '../../images/icons/Social/twitter.svg'
import telegram from '../../images/icons/Social/telegram.svg'
import Icon from '../Icon/Icon'

const PaymentSuccess = ({imageURL, author, name, setPaymentStatus, setCheckout}) => {
    return (
            <div className={styles.modalBg} id="modalBgPayment">
                <div className={styles.modal} id="modalPayment">
                    <h2 className={styles.title}>Payment Successful</h2>
                    <div className={styles.closeButton} onClick={() => {setPaymentStatus(false); setCheckout(false)}}>
                        <Icon name="close" size="16" />
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.table}>
                            <div className={styles.imgContainer}>
                                <img className={styles.img} src={imageURL} alt="" />
                            </div>
                            <div className={styles.paymentContent}>
                                You successfully purchased <span className={styles.boldBody}>{name}</span> from <span className={styles.boldBody}>{author}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonGroup}>
                        <div>
                            <div className={styles.boldBody}>Share</div>
                            <div className={styles.socialMediaIconsList}>
                                <img
                                    src={insta}
                                    alt="Insta Logo"
                                    className={styles.socialMediaIcons}
                                />
                                <img
                                    src={twitter}
                                    alt="Twitter Logo"
                                    className={styles.socialMediaIcons}
                                />
                                <img
                                    src={telegram}
                                    alt="Telegram Logo"
                                    className={styles.socialMediaIcons}
                                />
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

    )
}

export default PaymentSuccess
