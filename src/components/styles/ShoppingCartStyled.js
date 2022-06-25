import styled from 'styled-components'

export const StyledShoppingCart = styled.div`
    display: flex;
    justify-content: center;


    .contentContainer{
        width: 100%;
        max-width: 1000px;
        margin: 50px;
    
    
    .bar{
        background-color:	#F0F0F0;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;

        .product{
            display: flex;
            width: 200px;
            justify-content: center;
        }

        .names{
            display: flex;
            justify-content: space-between;
            margin-right: 10px;

            .name{
                width: 150px;
                display: flex;
                justify-content: center;
            }
        }
    }
    
    .itemsContainer{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        background-color: #F8F8F8;
        border-radius: 20px;

        .itemContainer{
                width: 100%;
                height: 200px;
                border: 2px solid none;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .productContainer{                
                    height: 100%;
                    display: flex;
                    border-radius: 20px;
                    align-items: center;

                    label{
                        margin-left: 10px;
                    }


                    img{
                        margin: auto auto;
                        height: 200px;
                        max-width: 200px;
                    }
                }

                .names{
                    display: flex;
                    justify-content: space-between;
                    margin-right: 10px;

                    .name{
                        width: 150px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    button{
                        width:80px;
                        border-radius: 10px;
                        height: 40px;
                        border: none;
                        background-color: #FECB98;
                        color: white;
                        font-weight: 600;
                    }

                    button:hover{
                        transform: scale(0.95);
                    }
                }
            }


        }

        .itemContainer:hover{
            background: #F5F5F5;
        }
    }
`