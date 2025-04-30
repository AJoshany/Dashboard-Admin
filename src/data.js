let xAxisData=[
    {
        'name': 'Jan',
        "Sale": 112_000
    },
    {
        'name': 'Feb',
        "Sale": 90_000
    },
    {
        'name': 'Mar',
        "Sale": 12_090
    },
    {
        'name': 'Apr',
        "Sale": 99_000
    },
    {
        'name': 'May',
        "Sale": 15_000
    },
    {
        'name': 'Jun',
        "Sale": 85_000
    },
    {
        'name': 'Jul',
        "Sale": 34_000
    },
    {
        'name': 'Agu',
        "Sale": 18_098
    },
    {
        'name': 'Sep',
        "Sale": 0
    },
    {
        'name': 'Oct',
        "Sale": 73_078
    },
    {
        'name': 'Nov',
        "Sale": 11_000
    },
    {
        'name': 'Dec',
        "Sale": 56_000
    },
]

const newMembers= [
    {
        id :1,
        username: "Mohammad Amin",
        title: 'Web Developer',
        img:'images/1.jpg'
    },
    {
        id :2,
        username: "Qadir Yolme",
        title: 'Hacker',
        img:'images/1.jpg'
    },
    {
        id :3,
        username: "Ali",
        title: 'Trader',
        img:'images/1.jpg'
    },
    {
        id :4,
        username: "Mohammad",
        title: 'Web App',
        img:'images/1.jpg'
    }
]

const transactions = [
    {
        id :1,
        customer :'Qadir Yolme',
        date : '12 jun 2022',
        amount :123,
        status: 'Declined',
        img: 'images/1.jpg'
    },
    {
        id :2,
        customer :'Ali Joshany',
        date : '15 Dec 2024',
        amount :255,
        status: 'Approved',
        img: 'images/1.jpg'
    },
    {
        id :3,
        customer :'Abol Delavar',
        date : '10 Aug 2020',
        amount :500,
        status: 'Pending',
        img: 'images/1.jpg'
    }

]

let userRows = [
    {
        id:1,
        username:'Qadir Yolme',
        avatar: 'images/1.jpg',
        status: 'active',
        transaction: '$129.52',
        email :'ali@gmail.com'
    },
    {
        id:2,
        username:'Amin Saeedi',
        avatar: 'images/1.jpg',
        status: 'non-active',
        transaction: '$110',
        email :'ali@gmail.com'
    },
    {
        id:3,
        username:'Ali joshany',
        avatar: 'images/1.jpg',
        status: 'active',
        transaction: '$98',
        email :'ali@gmail.com'
    },
    {
        id:4,
        username:'Mahya Dehvan',
        avatar: 'images/1.jpg',
        status: 'active',
        transaction: '$0',
        email :'ali@gmail.com'
    }
]

let products=[
    {
        id:1,
        title:'Asus',
        avatar:'images/1.jpg',
        price:890
    },
    {
        id:2,
        title:'HP',
        avatar:'images/1.jpg',
        price:905
    },
    {
        id:3,
        title:'Acer',
        avatar:'images/1.jpg',
        price:600
    },
    {
        id:4,
        title:'Dell',
        avatar:'images/1.jpg',
        price:550
    }
]

const productsData=[
    {
        name:'Jan',
        sales:4000
    },
    {
        name:'Feb',
        sales:3000
    },
    {
        name:'Mar',
        sales:5000
    }

]

export {xAxisData , newMembers ,transactions, userRows ,products , productsData}