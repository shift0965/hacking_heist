import { StyledShoppingCart } from "./styles/ShoppingCartStyled";
import { itemList } from "./ItemList";
import { useNavigate} from "react-router-dom";

export default function ShoppingCart({setFirstTryOn}) {
    const navigate = useNavigate();

    const HandleTryOn = (item) =>{
        setFirstTryOn(item);
        navigate("/TryOn");
    }

    return(
        <StyledShoppingCart>
            <div className="contentContainer">
                <div className="bar">
                    <div className="product">
                        <div className="name">
                            product
                        </div>
                    </div>
                    <div className="names">
                        <div className="name">
                            price
                        </div>
                        <div className="name">
                            total
                        </div>
                        <div className="name">
                            try on
                        </div>
                    </div>
                </div>
            
                <div className="itemsContainer">
                {itemList.map((item) => 
                    <div className="itemContainer" key={item.id}> 
                        <div className="productContainer">
                            <div className="imgContainer">
                                <img src={`./imgs/${item.image}`} alt={item.title} /> 
                            </div>
                            <label className="name">{item.title}</label>   
                        </div>  
                        
                        <div className="names">
                                <div className="name">${item.price}</div>
                                <div className="name">{item.number}</div>
                                <div className="name">
                                    <button onClick={() => HandleTryOn(item)}>try on</button>
                                </div>
                        </div>       
                    </div>
                )}    
                </div> 
            
            </div>
        </StyledShoppingCart>
    )
}