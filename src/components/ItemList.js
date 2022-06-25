import { useState } from "react"

export const itemList= [
    {
        id: 1,
        title: 'cool sweater',
        price: '50',
        image: 'cloth1.png',
        number: 1,
        size: ['xs','S','M','L','XL'],
        type: 'up',
        color: ['red', 'blue', 'green'],

        width: '400px',
        height: '400px',
        top: '5px',
        left: '50px'
        

    },
    {
        id: 2,
        title: 'awesome sweater',
        price: '30',
        image: 'cloth2.png',
        number: 2,
        size: ['S','M', 'L'],
        type: 'up',
        color: ['red', 'blue', 'green'],
        
        width: '350px',
        height: '350px',
        top: '50px',
        left: '80px'
    },
    {
        id: 3,
        title: 'cool hat',
        price: '20',
        image: '',
        number: 1,
        
    },
    {
        id: 4,
        title: 't-shirt',
        price: '30',
        image: '',
        number: 3,
        size: ['S','M', 'L']
    },
    {
        id: 5,
        title: 'shocks',
        price: '10',
        image: '',
        number: 4
    },
    {
        id: 6,
        title: 'white shirt',
        price: '15',
        image: '',
        number: 1
    }
]

export const CartList = () => {
    const [cartList, setCarList] = useState([])

    const addClothes = e => {
        let target = e.target.value;
        console.log(cartList);
        cartList.forEach((item, index,arr) => {
            if (item.type === target.type){
                arr.splice(index, 1);
            }
        })
        cartList.push(target);
        setCarList(cartList);
    }
    return{cartList, addClothes}
}





export const WearList = (SetWearList) => {
    const [wearList, setWearList] = useState([])

    const addWearList = (target) => {
        wearList.forEach((item, index,arr) => {
            if (item.type === target.type){
                arr.splice(index, 1);
            }
        })
        wearList.push(target);
        setWearList(wearList);

        console.log("wearList " + wearList);

        SetWearList(wearList);
    }

    return{wearList, addWearList}
}


