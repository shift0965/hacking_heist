import { StyledTryOn } from "./styles/TryOnStyled";
import { itemList } from "./ItemList";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { StyledModel } from "./styles/ModelStyled";


export default function TryOn({firstTryOn}) {

    const [values, setValue] = useState({
        height: 0,
        weight: 0,
        bust: 0,
        shoulder: 0,
        leg: 0
    })

    const [suggestion, setSuggestion] = useState({
        result: "none",
        comment: ""
    });

    //checking product
    const [product, setProduct] = useState(firstTryOn);

    const sizeChange = (target) => {
        if(target === 'M') setSuggestion({
            result: 'good',
            comment: 'Perfectlay matched!'
        });
        if(target === 'L') setSuggestion(
            {
                result: 'ok',
                comment: 'It is slightly too big for you'
            });
        if(target === 'XL') setSuggestion(
            {
                result: 'bad',
                comment: 'It is way too big for you'
            });
        if(target === 'S') setSuggestion(
            {
                result: 'ok',
                comment: 'It may be little small for you'
            });
        if(target === 'XS') setSuggestion(
            {
                result: 'bad',
                comment: 'It is way too samll for you'
            });
    }
    
    const handleChange = e => {
        const {name, value} = e.target
        setValue({
            ...values,
            [name] : value
        })
    }

    const [wearList, setWearList] = useState([product]);
    //console.log(wearList);

    //when click
    const addWearList = (target) => {
        setProduct(target);
        wearList.forEach((item, index,arr) => {
            if (item.type === target.type){
                arr.splice(index, 1);
            }
        })
        wearList.push(target);
        setWearList(wearList);
    }

    

    //shopping cart on or off
    const [spOn, setsp] = useState(true);

    //person form on or off
    const [pfOn, setpf] = useState(false);

    const HandlePersonForm = () => {
        setpf(!pfOn);
    }

    const HandleShoppingCart = () => {
        setsp(!spOn);
    }


    

    return(
        <StyledTryOn spOn = {spOn}>
            <div className="contentContainer">
                <div className="left">
                    <button className={`triggerBtn ${pfOn? "":"off"}`} onClick={HandlePersonForm}>{`<`}</button>
                    <div className={`personal ${pfOn? "":"off"}`}>
                        <h3>Body Measurement</h3>
                        <form className="personalForm">
                            <div className="form_inputs">
                                <label htmlFor="height" className="form-label">Height</label>
                                    <input 
                                    type="number" 
                                    name="height" 
                                    className="form-input" 
                                    placeholder="Enter your height"
                                    value = {values.height}
                                    onChange = {handleChange}
                                    />

                            </div>
                            <div className="form_inputs">
                                <label htmlFor="waist" className="form-label">Waist</label>
                                    <input 
                                    type="number" 
                                    name="waist" 
                                    className="form-input" 
                                    placeholder="Enter your waist"
                                    value = {values.waist}
                                    onChange = {handleChange}
                                    />
                            </div>
                            <div className="form_inputs">
                                <label htmlFor="hip" className="form-label">Hip</label>
                                    <input 
                                    type="number" 
                                    name="hip" 
                                    className="form-input" 
                                    placeholder="Enter your hip"
                                    value = {values.hip}
                                    onChange = {handleChange}
                                    />
                            </div>
                            <div className="form_inputs">
                                <label htmlFor="bust" className="form-label">Bust</label>
                                    <input 
                                    type="number" 
                                    name="bust" 
                                    className="form-input" 
                                    placeholder="Enter your bust"
                                    value = {values.bust}
                                    onChange = {handleChange}
                                    />
                            </div>
                            <div className="form_inputs">
                                <label htmlFor="shoulder" className="form-label">Shoulder</label>
                                    <input 
                                    type="number" 
                                    name="shoulder" 
                                    className="form-input" 
                                    placeholder="Confirm your Password"
                                    value = {values.shoulder}
                                    onChange = {handleChange}
                                    />
                            </div>
                            <div className="form_inputs">
                                <label htmlFor="leg" className="form-label">Leg length</label>
                                    <input 
                                    type="number" 
                                    name="leg" 
                                    className="form-input" 
                                    placeholder="Confirm your Password"
                                    value = {values.leg}
                                    onChange = {handleChange}
                                    />
                            </div>
                            
                            <button className="form_input_btn" type="submit" >
                                <span className="input_btn_text">save</span>
                            </button>


                        </form>

                    </div>
                    <StyledModel>
                        <div className="modelArea">
                            <img src="./imgs/man.jpeg" alt="man model"/>
                            {wearList.map((item, index) =>   
                                <div className="clothContainer" key={index}  style={{
                                    width: `${item.width}`,
                                    height: `${item.height}`,
                                    top: `${item.top}`,
                                    left: `${item.left}`
                                }}>
                                
                                <img src={`./imgs/${item.image}`} alt={item.title}/>
                                </div>
                            )}
                        </div>
                    </StyledModel>
                </div>
                <div className="right">

                    <div className="productArea">

                        <div className="nameArea">
                           <h2>{product.title}</h2> 
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
                                <button className="sizeBtn" key={index} onClick={() => sizeChange(item)}>{item} </button>                            
                            )}
                            </div>
                        </div>

                        <div className="suggestionContainer">
                            Suggestion
                            {suggestion.result === "good"? <div>{suggestion.comment}<span className="good"><FontAwesomeIcon icon={faSmile}/></span></div>:<div></div>}
                            {suggestion.result === "bad"? <div>{suggestion.comment}<span className="bad"><FontAwesomeIcon icon={faSadTear}/></span></div>:<div></div>}
                            {suggestion.result === "ok"? <div>{suggestion.comment}</div>:<div></div>}
                            {suggestion.result === "none"? <div>Choose a size to try on!</div>:<div></div>}                    
                        </div>
                    </div>

                    <button className={`spBtn ${spOn? "active":""}`} onClick={HandleShoppingCart}>
                        <FontAwesomeIcon icon={faShoppingCart} />    
                    </button>
                    <div className={spOn ? "shoppingCart active":"shoppingCart"}>
                        <h3>Choose to try on</h3>
                        <div className="itemsContainer">
                            {itemList.map((item) => 
                                <div className="itemContainer" key={item.id} onClick={() => addWearList(item)}> 
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

