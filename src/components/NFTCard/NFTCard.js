import React from 'react'
import Icon from '../Icon/Icon'
import styles from './NFTCard.module.css'

import { useNavigate } from 'react-router-dom'

// USAGE: <NFTCard imgURL="/img/card-placeholder.png" name="NFT Name" amount="0.00" liked likes="92" />

function NFTCard(props) {
    const navigate = useNavigate()
    return (
        <div
            className={styles.card}
            onClick={() => {
                navigate(`/item/${props.idx}`)
            }}
        >
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={props.imgURL}
                    alt={props.name + ' NFT Image'}
                />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.details}>
                    <div>
                        <span className={styles.num}>{props.amount}</span>{' '}
                        <span className={styles.smallText}>ETH</span>
                    </div>
                    <div className={styles.likeButton}>
                        <span className={styles.icon}>
                            {props.liked ? (
                                <Icon name="heart-filled" size="12" />
                            ) : (
                                <Icon name="heart" size="12" />
                            )}
                        </span>
                        <span className={styles.smallText}>{props.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard
