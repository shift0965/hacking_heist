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
            position: relative;
            height: 100%;
            display: flex;

            .triggerBtn{
                    position: absolute;
                    width: 20px;
                    height: 80px;
                    background: white;
                    border: none;
                    border-top-left-radius: 15px;
                    border-bottom-left-radius: 15px;
                    left: 280px;
                    top: 250px;
                    font-weight: 900;
                    font-size:20px;
                    opacity: 0.8;
                    cursor: pointer;
                    z-index: 20;
                }

            .triggerBtn:hover{
                transition: 0.6s all;
                background-color: gray;
            }

            .triggerBtn.off{
                left: 0px;
                transform:scaleX(-1); 
                transition: .7s;
            }

            .personal{
                top: 60px;
                left: 0px;
                position: absolute;
                width: 300px;
                height: 500px;
                z-index: 10; 
                border-radius: 40px;
                background-color: #E0E0E0;
                opacity: 0.9;
                transition: .7s all;
                
                h3{
                    margin-bottom: 10px;
                    margin-top: 30px;
                    text-align:center;
                }

                form{
                    display:flex;
                    flex-direction: column;
                    margin: auto 40px;
                }

                .form_inputs{
                    width: 220px;
                    display: flex;
                    margin: 16px auto;
                    justify-content: space-between;
                }

                .form_inputs label{
                    font-weight: 600;
                    font-size: 14px;
                    opacity: 90%;
                    height: 30px;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                    
                }

                .form_inputs input{
                    width: 80px;
                    height: 30px;
                    padding: 5px;
                    border-radius: 3px;
                    border: none;  
                    font-size: 14px;
                }

                .form_input_btn{
                    position: relative;
                    margin-top: 25px;
                    width: 100%;
                    height: 40px; 
                    display: flex;
                    border: none;
                    border-radius: 5px;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    font-weight: 600;
                    transition: 0.3s;
                    cursor: pointer;
                }

                .form_input_btn:hover{
                    color: white;
                    background: black;
                    transition: 0.3s;
                }
            }

            .personal.off{
                left: -300px;     
                opacity: 0;
                transition: .7s;
            }
            
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