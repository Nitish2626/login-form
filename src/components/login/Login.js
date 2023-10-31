import styled from "styled-components";
import hide from "../../icons/hide.png";

const Login = () => {

    const Form = styled.form`
        width:90vw;
        height:70vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:0 3vw;
        border-radius:10px;
        box-shadow:1px 1px 10px 0px grey;

        @media(min-width:500px){
            width:80vw;
        }
        @media(min-width:600px){
            width:70vw;
        }
        @media(min-width:700px){
            width:60vw;
        }
        @media(min-width:800px){
            width:50vw;
        }
        @media(min-width:900px){
            width:40vw;
        }
        @media(min-width:1100px){
            width:30vw;
        }
        // @media(min-width:1200px){
        //     width:40vw;
        // }
    `

    const Header=styled.h2` 
        text-align:center;
    `

    const Section = styled.section`
        width:90vw;
        display:flex;
        flex-direction:column;

        @media (min-width:500px){
            width:80vw;
        }
        @media(min-width:600px){
            width:70vw;
        }
        @media(min-width:700px){
            width:60vw;
        }
        @media(min-width:800px){
            width:50vw;
        }
        @media(min-width:900px){
            width:40vw;
        }
        @media(min-width:1100px){
            width:30vw;
        }

        #email,#password{
            border-radius:5px;
            outline:none;
            padding:1vh 2vw;
            font-size:2.7vh;
            margin:1vh 0 1.5vh 0;
            border:2px solid grey;

            @media (min-width:1200px){
                font-size:2.3vh;
            }
        }

        #password{
            margin:0;
            border:none;
            box-shadow:none;
        }
    `
    const Aside = styled.aside`
        width:90vw;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin:1vh 0 0 0;
        border-radius:5px;
        border:2px solid grey;

        @media (min-width:500px){
            width:80vw;
        }
        @media(min-width:600px){
            width:70vw;
        }
        @media(min-width:700px){
            width:60vw;
        }
        @media(min-width:800px){
            width:50vw;
        }
        @media(min-width:900px){
            width:40vw;
        }
        @media(min-width:1100px){
            width:30vw;
        }
        // @media(min-width:1200px){
        //     width:30vw;
        // }
        
        #hide-img{
            width:6vw;
            height:3vh;
            padding:0 1vw 0 0;

            @media (min-width:500px){
                width:4.5vw;
                height:4vh;
            }
            @media (min-width:650px){
                width:4vw;
                height:4vh;
            }
            @media (min-width:800px){
                width:3vw;
                height:4vh;
            }
            @media (min-width:900px){
                width:2.5vw;
                height:4vh;
            }
            @media (min-width:1100px){
                width:2vw;
                height:4vh;
            }
        }
    `

    const Container = styled.div`
        display:flex;
        justify-content:space-between;
        margin:1vh 0;

        .aside{
            display:flex;
            align-items:center;
            justify-content:center;

            a{
                color:orange;
                text-decoration:none
            }
        }
    `

    const TandC = styled.section`
        display:flex;
        align-items:center;

        a{
            color:orange;
        }
    `

    const Button=styled.button`
        width:70vw;
        background-color:cornflowerblue;
        border:none;
        outline:none;
        padding:1vh 0;
        border-radius:5px;
        color:white;
        font-size:3vh;
        margin:5vh auto 2vh auto;

        @media (min-width:500px){
            width:50vw;
        }
        @media (min-width:650px){
            width:45vw;
        }
        @media (min-width:800px){
            width:40vw;
        }
        @media (min-width:950px){
            width:35vw;
        }
        @media (min-width:1100px){
            width:30vw;
        }
        @media (min-width:1200px){
            width:25vw;
            font-size:2.5vh;
        }
        @media (min-width:1400px){
            width:20vw;
        }
    `


    const Span=styled.span`
        text-align:center;

        a{
            color:orange;
        }
    `


    return (
        <>
            <Form>
                <Header>Login</Header>

                <Section>
                    <label htmlFor="email"><b>Login Id</b></label>
                    <input type="email" id="email" placeholder="Enter Login ID"></input>
                </Section>

                <Section>
                    <label htmlFor="password"><b>Password</b></label>
                    <Aside>
                        <input type="password" id="password" placeholder="Enter Password"></input>
                        <img src={hide} id="hide-img" alt="hide-img"></img>
                    </Aside>
                </Section>

                <Container>
                    <aside className="aside">
                        <input type="checkbox"></input>
                        <span>Remember Me</span>
                    </aside>
                    <aside className="aside">
                        <a href="#">Change Password</a>
                    </aside>
                </Container>

                <TandC>
                    <input type="checkbox"></input>
                    <span>Agree to <a href="#">Terms & Conditions</a></span>
                </TandC>

                <Button type="submit">Login</Button>

                <Span>Don't have an account? <a href="#">Register here</a></Span>

            </Form>
        </>
    );
}

export default Login;
