import styled from 'styled-components'


export const Body = styled.div`
    display: flex;
    flex-direction: column;
    .itemList{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .itemContainer{
            margin: 20px;
            width: 250px;
            height: 300px;
            border: 2px solid none;
            display: flex;
            flex-direction: column;
            align-items: center;

            label{
                margin-top: 10px;
            }

            .imgContainer{                
                width: 250px;
                height: 250px;
                border-radius: 20px;
                box-shadow: 0 0 10px gray;


                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .imgContainer:hover{
                transform: scale(0.95);
            }

            


        }
    }
`
