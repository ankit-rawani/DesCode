import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
    return (
        <span className={styles.icon}>
            {
                (props.name === "heart") && 
                <img height={props.size} width={props.size} src="/icons/heart.svg" alt="" />
            }

            {
                (props.name === "heart-filled") && 
                <img height={props.size} width={props.size} src="/icons/heart-filled.svg" alt="" />
            }
        </span>
    )
}

export default Icon