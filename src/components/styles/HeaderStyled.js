import styled from 'styled-components'

export const StyledHeader = styled.nav`

    background-color: white;

    .navbar_container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1300px;
        height: 80px;
        z-index:1;
        margin: 0px auto;
        padding: 0px 10px;
    }


    #navbar_logo{       
        font-size: 30px;
        align-items: center;
        display: flex;
        text-decoration: none;
        padding: 10px;
    }

    .navbar_manu{
        display: flex;
        align-items: center;
        text-align: center;
        list-style: none;
    }

    .navbar_item{
        height: 80px;
    }

    .navbar_links{
        color: black;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content:  center;
        padding: 0px 10px;
        text-decoration: none;
    }

    .navbar_btn{
        height: 80px;
        padding: 20px 10px;
    }

    .signup_button{
        color: white;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 10px 20px;
        border-radius:20px;
        background: black;
    }

    .signup_button:hover{
        background: orange;
        transition: all 0.3s;
    }

    .navbar_links:hover{
        color: orange;
        transition: all 0.3s;
    }
`