import Header from "./Header";
import { Body } from "./styles/HomepageStyled";

const Homepage = () => {

    const itemList = [1,2,3,4,5,6]
    return(
        <div>
            <Header/>
            <Body>
                <div className="itemList">
                    {itemList.map((item, index) => 
                        <div className="itemContainer" key={index}> 
                            <div className="imgContainer"></div>  
                            <label className="name">shoe</label>
                            <div className="price">$12345</div>   
                        </div>

                    )}
                </div>
            </Body> 
        </div>
    )
}




export default Homepage;
