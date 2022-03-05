import React from 'react'
import styles from './Checkout.module.css'

const Checkout = ({ imageURL, author, name, setPaymentStatus, amount }) => {
    return (
        <div className={styles.modalBg} id="modalBg">
            <div className={styles.modal} id="modal">
                <h2 className={styles.title}>Check Out</h2>
                <div className={styles.tableContainer}>
                    <div className={styles.table}>
                        <div className={styles.row}>
                            <div className={styles.boldBody}>Item</div>
                            <div className={styles.boldBody}>Subtotal</div>
                        </div>
                        <div className={styles.row + ' ' + styles.itemRow}>
                            <div className={styles.imageRow}>
                                <div className={styles.imgContainer}>
                                    <img
                                        className={styles.img}
                                        src={imageURL}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <div className={styles.boldBody}>
                                        {author}
                                    </div>
                                    <p>{name}</p>
                                </div>
                            </div>
                            <div>
                                {amount}{' '}
                                <span className={styles.boldBody}>ETH</span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.boldBody}>Total</div>
                            <div>
                                {amount}{' '}
                                <span className={styles.boldBody}>ETH</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonGroup}>
                    <div>
                        <button
                            onClick={() => setPaymentStatus(true)}
                            className={styles.button}
                        >
                            Checkout
                        </button>
                    </div>
                    <div>
                        <button
                            className={styles.buttonOutline}
                            onClick={() => {
                                document.getElementById(
                                    'modalBg'
                                ).style.display = 'none'
                                document.getElementById('modal').style.display =
                                    'none'
                                console.log('closing')
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
