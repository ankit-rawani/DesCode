import React, { useState } from 'react';
import styles from './Profile.module.css';
import Icon from "../Icon/Icon";
import NFTCard from '../NFTCard/NFTCard';

// USAGE: <Profile dpURL="/img/imgname.png" name="Name" bannerImg="/img/bannerImg" items={objContainingAllDetails} />

function Profile(props) {
    const [searchText, setSearchText] = useState("");
    return (
        <div className={styles.profileContainer}>
            <div className={styles.bannerContainer}><img src={props.bannerImg} /></div>
            <div className={styles.dpandname}>
                <div className={styles.dp}><img src={props.dpURL} alt={props.name+"'s Image"} /></div>
                <div className={styles.name}>{props.name}</div>
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.formTextInput+" "+styles.searchInput}>
                    <Icon name="search" size="24" />
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} placeholder="Search item here" />
                </div>
                <div className={styles.formTextInput+" "+styles.filterInput}>
                    <input type="text" value="Recently Listed" readOnly />
                    <Icon name="down" size="24" />
                </div>
            </div>
            <div className={styles.itemsContainer}>
                <div className={styles.itemsHeading}>Items</div>
                <div className={styles.items}>
                    {
                        props.items.map(item => {
                            if(searchText.trim() !== "") {
                                return item.name.toLowerCase().includes(searchText.toLowerCase()) ? (
                                    <div key={item.id}>
                                        <NFTCard 
                                            imgURL={item.imgURL} 
                                            name={item.name} 
                                            amount={item.amount} 
                                            liked={item.liked} 
                                            likes={item.likes}
                                        />
                                    </div>
                                ) : ""; 
                            }

                            return (
                                <div key={item.id}>
                                    <NFTCard 
                                        imgURL={item.imgURL} 
                                        name={item.name} 
                                        amount={item.amount} 
                                        liked={item.liked} 
                                        likes={item.likes}
                                    />
                                </div>
                            )}
                        )
                    }
                </div>
                <div className={styles.button}>
                    Load More
                </div>
            </div> 
        </div>
    );
}

export default Profile;