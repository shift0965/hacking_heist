import { upload } from "@testing-library/user-event/dist/upload"
import { useState } from "react"

export const itemList= [
    {
        id: 1,
        title: 'cool sweater',
        price: '50',
        image: 'cloth1.png',
        number: 1,
        size: ['XS','S','M','L','XL'],
        type: 'up',
        color: ['red', 'blue', 'black', 'gray'],


        width: '400px',
        height: '400px',
        top: '10px',
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
        color: ['green', 'purple', 'orange'],
        

        width: '350px',
        height: '350px',
        top: '50px',
        left: '80px',
    },
    {
        id: 3,
        title: 'fasion earmuffs',
        price: '20',
        image: 'cloth6.png',
        number: 1,
        color: ['black', 'gray'],
        size: ['S','M', 'L'],
        type: 'hat',

        width: '300px',
        height: '100px',
        top: '0px',
        left: '185px'
        
    },
    {
        id: 4,
        title: 'super boost',
        image: 'cloth4.png',
        price: '100',
        number: 3,
        size: ['US10', 'US11', 'US12', 'US13', 'US14'],

        color: ['orange', 'pink', 'white'],
        width: '0px',
        height: '0px',
        top: '0px',
        left: '185px'
    },
    {
        id: 5,
        title: 'scarf',
        price: '30',
        image: 'cloth5.png',
        number: 4,
        size: ["2 m"],

        color: ['tgray', 'black', 'aqua'],
        width: '0px',
        height: '0px',
        top: '0px',
        left: '185px'
    },
    {
        id: 6,
        title: 'flight jacket',
        price: '200',
        image: 'cloth3.png',
        number: 1,
        type: 'up',


        size: ['XS','S','M','L','XL'],
        color: ['orange', 'pink', 'white'],
        width: '300px',
        height: '300px',
        top: '65px',
        left: '100px'
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


