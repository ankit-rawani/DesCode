import React from 'react'
import styles from './CreateItem.module.css'
import imageIcon from '../../images/icons/Image.svg'
import Icon from '../Icon/Icon'

const CreateItem = () => {

    return (
        <>
            <div className={styles.FormPage}>
                <h1 className={styles.title}>Create New Item</h1>
                <form className={styles.myForm}>
                    <div className={styles.label}>Upload File</div>
                    <div className={styles.uploadBox}>
                        <p className={styles.uploadTitle}>
                            JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
                        </p>
                        <img
                            className={styles.img}
                            src={imageIcon}
                            alt=""
                        ></img>
                        <p>
                            <span className={styles.span}>
                                Drag and Drop File
                            </span>
                        </p>
                        <p>
                            or{' '}
                            <span className={styles.span}>
                                browse media on your device
                            </span>
                        </p>
                    </div>
                    <div className={styles.label}>Name</div>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Name"
                    ></input>
                    <div className={styles.label}>Description</div>
                    <textarea
                        rows="5"
                        className={styles.textarea}
                        placeholder="Description"
                    ></textarea>
                    <div className={styles.label}>Price</div>
                    <div className={styles.formTextInput}>
                        <input type="text" placeholder="Price" />
                        <select id="crypto-choose" className={styles.select}>
                            <option>ETH</option>
                            <option>BIT</option>
                        </select>
                        <div className={styles.priceIcon}>
                            <Icon name="down" size="18" />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.submit}>
                            Create Item
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateItem
