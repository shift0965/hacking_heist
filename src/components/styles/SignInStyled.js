import styled from "styled-components";


//styled component
export const StyledSignIn = styled.section`
    position: absolute;
    z-index: 10;
    display: flex;
    width: 100%;
    

    // id=layers
    #layers{
        position: relative;
        background: #E8E8E8;
        border-radius: 30px;
        padding: 30px;
        width: 500px;
        height: 580px;
        margin: 30px auto;

        //class close button
        .closeBtn{
        background: transparent;
        position: absolute;
        width: 40px;
        height: 40px;
        right: 15px;
        top: 15px;
        font-size: 30px;
        border:none;
        }

        //class sign in
        .signIn{
            
            display: flex;
            flex-direction: column;
            
            label{
            }
            input{
                width: 430px;
            }

            h2{
                margin-bottom: 10px;
            }

            //"." for class ex: .classA
            //"#" for id ex: #idB
            //noting for tag ex: label
         
         //class submit
            .submit{
                background: white;
                width: 200px;
                height: 30px;
                font-size: 20px;
                border:none;
                margin: 20px auto;
            }
        }

        .logIn{
            display: flex;
            flex-direction: column;
            h2{
                margin-bottom: 10px;
            }

            .submit{
                background: white;
                width: 200px;
                height: 30px;
                font-size: 20px;
                border:none;
                margin: 20px auto;
            }

        }

    }
`
