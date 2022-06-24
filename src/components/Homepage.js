
import { Body } from "./styles/HomepageStyled";
import { itemList } from "./ItemList";

const Homepage = () => {

    return(
        <Body>
            <div className="itemList">
                {itemList.map((item) => 
                    <div className="itemContainer" key={item.id}> 
                        <div className="imgContainer">
                            <img src={`./imgs/${item.image}`} alt={item.title} />    
                        </div>  
                        <label className="name">{item.title}</label>
                        <div className="price">${item.price}</div>   
                    </div>

                )}
            </div>
        </Body> 
    )
}




export default Homepage;
