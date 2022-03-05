import React from 'react'
import styles from './Checkout.module.css'
import image from '../../images/modalImg.png'

const Checkout = () => {
    return (
        <>
            <div className={styles.modalBg}>
                <div className={styles.modal}>
                    <h2 className={styles.title}>Check Out</h2>
                    <hr className={styles.hr} />
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.td}>
                                    <div>
                                        <img
                                            src={image}
                                            className={styles.img}
                                            alt="modal"
                                        ></img>
                                        <div className={styles.imgText}>
                                            <div className={styles.name}>
                                                Name
                                            </div>
                                            <div className={styles.description}>
                                                Description
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <p>4.5 ETH</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.td}>
                                    <p>Total</p>
                                </td>
                                <td className={styles.td}>
                                    <p>4.5 ETH</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr className={styles.hr} />
                    <div className={styles.buttonGroup}>
                        <div>
                            <button className={styles.button}>Create</button>
                        </div>
                        <div>
                            <button className={styles.buttonOutline}>
                                Connect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
