const AllProfileItems = [
    {
        id: 1,
        imgURL: "/img/NFTImages/NFT1.png",
        name: "Abstract Smoke Red Blue", 
        amount: "1.25", 
        liked: true, 
        likes: "92",
        author: "mia_ayana"
    },
    {
        id: 2,
        imgURL: "/img/NFTImages/NFT2.png",
        name: "Mountain Landscape", 
        amount: "0.20", 
        liked: false, 
        likes: "25",
        author: "mia_ayana"
    },
    {
        id: 3,
        imgURL: "/img/NFTImages/NFT3.png",
        name: "Paint Color on Wall", 
        amount: "0.00", 
        liked: true, 
        likes: "55",
        author: "mia_ayana"
    },
    {
        id: 4,
        imgURL: "/img/NFTImages/NFT4.png",
        name: "Abstract Pattern", 
        amount: "0.87", 
        liked: true, 
        likes: "82",
        author: "mia_ayana"
    },
    {
        id: 5,
        imgURL: "/img/NFTImages/NFT5.png",
        name: "White Line Grafiti", 
        amount: "0.09", 
        liked: false, 
        likes: "22",
        author: "mia_ayana"
    },
    {
        id: 6,
        imgURL: "/img/NFTImages/NFT6.png",
        name: "Abstract Triangle", 
        amount: "0.90", 
        liked: true, 
        likes: "71",
        author: "rian_leon"
    },
    {
        id: 7,
        imgURL: "/img/NFTImages/NFT7.png",
        name: "Lake Landscape", 
        amount: "0.52", 
        liked: true, 
        likes: "63",
        author: "rian_leon"
    },
    {
        id: 8,
        imgURL: "/img/NFTImages/NFT8.png",
        name: "Blue Red Art", 
        amount: "0.85", 
        liked: false, 
        likes: "66",
        author: "lady_young"
    }
]

function getProfileItems(id) {
    if(id === "") return AllProfileItems;
    return AllProfileItems.filter(item => (id === item.author));
}

export default getProfileItems;