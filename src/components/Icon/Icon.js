import React from 'react';
import styles from './Icon.module.css';

// USAGE: <Icon name="heart" size="24" />

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

            {
                (props.name === "search") && 
                <img height={props.size} width={props.size} src="/icons/search.svg" alt="" />
            }

            {
                (props.name === "down") && 
                <img height={props.size} width={props.size} src="/icons/down.svg" alt="" />
            }
        </span>
    )
}

export default Icon