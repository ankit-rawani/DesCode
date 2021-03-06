import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css'
import Icon from '../Icon/Icon'
import NFTCard from '../NFTCard/NFTCard'
import { useParams } from 'react-router-dom'
import getProfileItems from '../../data/getProfileItems'
import getUsers from '../../data/getUsers'

// USAGE: <Profile dpURL="/img/imgname.png" name="Name" bannerImg="/img/bannerImg" items={objContainingAllDetails} />

function Profile() {
    const [searchText, setSearchText] = useState('')
    const params = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const user = getUsers(params.id)[0]
    if (user) {
        const items = getProfileItems(params.id)
        return (
            <div className={styles.profileContainer}>
                <div className={styles.bannerContainer}>
                    <img
                        src={user.bannerImg}
                        alt="banner"
                        className={styles.bannerImage}
                    />
                </div>
                <div className={styles.dpandname}>
                    <div className={styles.dp}>
                        <img src={user.img} alt={user.name + "'s Image"} />
                    </div>
                    <div className={styles.name}>{user.name}</div>
                </div>
                <div className={styles.searchContainer}>
                    <div
                        className={
                            styles.formTextInput + ' ' + styles.searchInput
                        }
                    >
                        <Icon name="search" size="24" />
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            value={searchText}
                            placeholder="Search item here"
                        />
                    </div>
                    <div
                        className={
                            styles.formTextInput + ' ' + styles.filterInput
                        }
                    >
                        <input type="text" value="Recently Listed" readOnly />
                        <Icon name="down" size="24" />
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <div className={styles.itemsHeading}>Items</div>
                    <div className={styles.items}>
                        {items.map((item) => {
                            if (searchText.trim() !== '') {
                                return item.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase()) ? (
                                    <div key={item.id}>
                                        <NFTCard
                                            imgURL={item.imgURL}
                                            name={item.name}
                                            amount={item.amount}
                                            liked={item.liked}
                                            likes={item.likes}
                                            idx={item.id}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )
                            }

                            return (
                                <div key={item.id}>
                                    <NFTCard
                                        imgURL={item.imgURL}
                                        name={item.name}
                                        amount={item.amount}
                                        liked={item.liked}
                                        likes={item.likes}
                                        idx={item.id}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    {items.length === 0 ? (
                        <div className={styles.nothing}>No items found.</div>
                    ) : (
                        <div className={styles.button}>Load More</div>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.errContainer}>
                <div className={styles.errHeading}>Error</div>
                <div>Profile not found.</div>
            </div>
        )
    }
}

export default Profile
