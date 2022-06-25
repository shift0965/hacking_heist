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
        width: 600px;
        height: 500px;
        margin: 50px auto;

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
            //display: flex; ...

            //tag label in class signIn
            label{
                //font-size: 30px; ...
            }

            //"." for class ex: .classA
            //"#" for id ex: #idB
            //noting for tag ex: label


        }

    }
`