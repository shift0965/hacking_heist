import { StyledSignIn } from "./styles/SignInStyled";


const SignIn = ({setSignClose}) => {

    return(
        <StyledSignIn>
            <section id="layers">

                <button className="closeBtn" onClick={() => setSignClose()}>x</button>

                <form>
                <div className="signIn">
                        <h2>Sign In</h2>
                        
                        <label htmlFor="Name">
                            First Name:
                        </label>
                        <input type="text" name="firstName" id="fName"/>
                        
                        <label htmlFor="lName">
                            Last Name:
                        </label>
                        <input type="text" name="lastName" id="lName"/>
                        
                        <label htmlFor="username1">
                            Email:
                        </label>
                        <input type="text" name="email" id="username1"/>
                        
                        
                        
                        <label htmlFor="pw1">
                            Password:
                        </label>
                        <input type="password" name="pw" id="pw1"/>
                        
                        <label htmlFor="cpw">
                            confirm Password:
                        </label>
                        <input type="password" name="confirmpw" id="cpw"/>
                    </div>
                    
                    <div className="logIn">
                        <h2>Log In</h2>
                        <label htmlFor="username2">
                            Email:
                        </label>
                        <input type="text" name="email" id="username2"/>
                        
                        
                        
                        <label htmlFor="pw2">
                            Password:
                        </label>
                        <input type="password" name="pw" id="pw2"/>
                    </div>

                    <div className="submit">
                        <input type="submit" value="Next"/>
                    </div>
                </form>
            </section>
        </StyledSignIn>
    )
}

export default SignIn;
