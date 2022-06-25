import { StyledTryOn } from "./styles/TryOnStyled";
import { itemList } from "./ItemList";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function TryOn() {

    const HandleTryOn = (id) =>{
        
    }

    const [spOn, setsp] = useState(true);

    const HandleShoppingCart = () => {
        setsp(!spOn);
    }

    const product = {
        name: 'cool shirt',
        price: 500,
        color: ['red', 'blue', 'green'],
        size: ['s', 'm', 'l', 'xl', 'xxl']
    }
    return(
        <StyledTryOn spOn = {spOn}>
            <div className="contentContainer">
                <div className="left">
                    <div className="tryOnArea">
                        
                    </div>
                </div>
                <div className="right">
                    <div className="productArea">
                        <div className="nameArea">
                           <h2>{product.name}</h2> 
                        </div>
                        <div className="pricetag">${product.price}</div>

                        <div className="colorArea">
                            Select color
                            <div className="btnsArea" >
                            {product.color.map((item, index) => 
                                <button className="colorBtn" 
                                key={index} style={{background:`${item}`}}
                                >
                                </button>                            
                            )}
                            </div>
                        </div>

                        <div className={spOn ? "sizeArea":"sizeArea active"}>
                            Select size
                            <div className="btnsArea" >
                            {product.size.map((item, index) => 
                                <button className="sizeBtn" key={index}>{item}</button>                            
                            )}
                            </div>
                        </div>
                    </div>

                    <button className={`spBtn ${spOn? "active":""}`} onClick={HandleShoppingCart}>
                        <FontAwesomeIcon icon={faShoppingCart} />    
                    </button>
                    <div className={spOn ? "shoppingCart active":"shoppingCart"}>
                        <h3>Choose to try on</h3>
                        <div className="itemsContainer">
                            {itemList.map((item) => 
                                <div className="itemContainer" key={item.id}> 
                                    <div className="imgContainer">
                                        <img src={`./imgs/${item.image}`} alt={item.title} /> 
                                    </div>
                                    <div className="productName">
                                        <label className="name">{item.title}</label>   
                                    </div>
                                    
                                </div>
                            )}    
                        </div> 
                    </div>
                </div>
            </div>
        </StyledTryOn>
    )
}