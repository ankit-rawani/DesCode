const AllUsers = [
    {
        id: "mia_ayana",
        img: "/img/UserImages/mia_ayana.png",
        name: "Mia Ayana",
        eths: "5.250",
        bannerImg: "/img/profile-banner.png",
        num: 1
    },
    {
        id: "rian_leon",
        img: "/img/UserImages/rian_leon.jpg",
        name: "Rian Leon",
        eths: "4.932",
        bannerImg: "/img/profile-banner.png",
        num: 2
    },
    {
        id: "lady_young",
        img: "/img/UserImages/lady_young.jpg",
        name: "Lady Young",
        eths: "4.620",
        bannerImg: "/img/profile-banner.png",
        num: 3
    },
    {
        id: "black_glass",
        img: "/img/UserImages/black_glass.jpg",
        name: "Black glass",
        eths: "4.125",
        bannerImg: "/img/profile-banner.png",
        num: 4
    },
    {
        id: "budhiman",
        img: "/img/UserImages/budhiman.jpg",
        name: "Budhiman",
        eths: "3.921",
        bannerImg: "/img/profile-banner.png",
        num: 5
    }
]

function getUsers(id) {
    if(id === "") return AllUsers;
    return AllUsers.filter(user => (id === user.id));
} 

export default getUsers;