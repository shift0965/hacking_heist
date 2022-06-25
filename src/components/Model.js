import { useState } from "react"
import { StyledModel } from "./styles/ModelStyled"
import { itemList, WearList} from "./ItemList"

const Model = () => {
    const [wearList, SetWearList] = useState([]);
    WearList({SetWearList});

    
    return(
        <StyledModel>
            <div className="modelArea">
                <img src="./imgs/man.jpeg" alt="man model"/>

                {wearList.map((item, index) =>   
                    <div className="clothContainer" key={index}                              style={{
                        width: `${item.width}`,
                        height: `${item.height}`,
                        top: `${item.top}`,
                        left: `${item.left}`
                     }}>
                    
                    <img src={`./imgs/${item.image}`} alt={item.name}/>
                    </div>
                )}
            </div>
        </StyledModel>
    )
}

export default Model;



/**                
                 */