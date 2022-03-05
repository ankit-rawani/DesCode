import React from 'react'
import styles from './Checkout.module.css'

const Checkout = ({imageURL, author, name, isCheckout}) => {
    return (
            <div className={styles.modalBg} id="modalBg">
                <div className={styles.modal} id="modal">
                    <h2 className={styles.title}>Check Out</h2>
                    <hr className={styles.hr} />
                    <div className={styles.table}>

                            <div className={styles.row}>
                                <div className={styles.th}>Item</div>
                                <div className={styles.th}>Subtotal</div>
                            </div>
                            <div className={styles.imageRow}>
                                    <div className={styles.imageSquare}>
                                        <img
                                            src={imageURL}
                                            className={styles.img}
                                            alt="modal"
                                        ></img>

                                        <div className={styles.imgText}>
                                            <div className={styles.name}>
                                                {author}
                                            </div>
                                            <div className={styles.description}>
                                                {name}
                                            </div>
                                        </div>
                                    </div>

                                <div className={styles.td}>
                                    <p>4.5 <span className={styles.th}>ETH</span></p>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.td}>
                                    <p><span className={styles.th}>Total</span></p>
                                </div>
                                <div className={styles.td}>
                                    <p>4.5 <span className={styles.th}>ETH</span></p>
                                </div>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    <div className={styles.buttonGroup}>
                        <div>
                            <button className={styles.button}>Checkout</button>
                        </div>
                        <div>
                            <button className={styles.buttonOutline} onClick={() => {
                                document.getElementById('modalBg').style.display = 'none'
                                document.getElementById('modal').style.display = 'none'
                                console.log("closing");
                            }}>
                                Close
                            </button>
                        </div>
                    </div>
                    </div>

                </div>

    )
}

export default Checkout
