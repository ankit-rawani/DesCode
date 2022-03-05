import React from 'react';
import styles from './SellerCard.module.css';

// USAGE: <SellerCard num="1" imgURL="/img/seller-card-placeholder.png" name="Mia Ayana" eth="0.00" />

function SellerCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.num}>{props.num}</div>
            <div className={styles.dpContainer}>
                <img className={styles.dp} src={props.imgURL} alt={props.name+"'s image"} />
                <img className={styles.tick} src="/icons/seller-tick.svg" alt="Tick icon" />
            </div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.eth}><span className={styles.ethNum}>{props.eth}</span> ETH</div>
        </div>
    )
}

export default SellerCard;