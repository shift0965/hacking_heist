import styled from 'styled-components'

export const StyledTryOn = styled.div`

    width: 100%;
    max-width: 1300px;
    margin: 20px auto;

    .contentContainer{
        width: 100%;
        height: 700px;

        display: grid;
        grid-template-columns: 0.5fr 0.5fr;

        .left{
            
            height: 100%;
            display: flex;
            
        }

        .right{
            position: relative;
            height: 100%;
            display: flex;
            justify-content: space-between;

            .spBtn{
                position: absolute;
                z-index: 2;
                right: 300px;
                top: 5px;
                width: 40px;
                height: 40px;
                background-color: white;
                color: black;
                border-radius: 50%;
                border: none;  
                transition: .5s all;  
            }

            .spBtn.active{
                background: black;
                color: white;
                transform: scale(1.5);
                right: 30px;
                top: 30px;
                transition: .5s all;
            }
            
            .productArea{
                margin: 10px;
                
                .nameArea{
                    height: 50px;
                    display: flex;
                    align-items: center;
                }

                .pricetag{
                    height:30px;
                    margin-top: 20px;
                }

                .colorArea{
                    margin-top:60px;
                    font-size: 20px;
                    font-weight: 600;
                    .btnsArea{
                        margin-top: 10px;
                        height: 100px;

                        .colorBtn{
                            margin-right: 10px;
                            height: 50px;
                            width: 50px;

                            border: none;
                            border-radius: 10px;

                            &:hover{
                                opacity: 0.5;
                            }
                        }
                    }
                }
                
                .sizeArea{
                    margin-top:20px;
                    font-size: 20px;
                    font-weight: 600;

                    .btnsArea{
                        margin-top: 10px;
                        height: 100px;

                        .colorBtn{
                            margin-right: 10px;
                            height: 50px;
                            width: 50px;

                            border: none;
                            border-radius: 10px;

                            &:hover{
                                opacity: 0.5;
                            }
                        }

                        .sizeBtn{
                            margin-right: 10px;
                            margin-top: 10px;
                            height: 50px;
                            width: 50px;
                            font-size: 20px;

                            border: none;
                            border-radius: 10px;

                            &:hover{
                                opacity: 0.5;
                            }
                        }
                    }
                    transition: .5s all;
                } 
                .sizeArea.active{
                    transition: .5s all;
                    width: 200px;
                }
            }

            .shoppingCart{   
                position: absolute; 
                right: 0px; 
                top: 0px;

                width: 350px;
                border-radius: 30px;
                height: 700px;
                background-color: 	#DCDCDC;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: hidden;
                transition: .5s all;
            }

            .shoppingCart.active{
                transition: .6s all;
                opacity: 0;
                transform: scale(0);
                transform-origin:  320px 30px;
            }

            h3{
                margin-top: 10px;
                margin-bottom: 10px;
            }
                
            .itemsContainer{
                background-color: #F8F8F8;
                margin-bottom: 20px;
                height: 700px;
                width: 350px;
                display: block;
                flex-direction: column;
                overflow: scroll;
                
                .itemContainer{
                    border-bottom: 1px gray solid;
                    height: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .productName{
                        width: 120px;
                        height: 100%;
                        display: flex;
                        text-align: left;
                        align-items: center;
                    }
                    
                    img{
                        height: 100%;
                        max-width: 100%;
                    }

                    .imgContainer{
                        width: 150px;
                        height: 150px;
                        margin-right: 30px;
                    }

                    &:hover{
                        transition: .3s;
                        background-color: white;
                    }

                }
            }


        }

    }

`