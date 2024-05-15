import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
`;

const InnerContainer = styled.div`
    width: 100%;
    max-width: 700px;
`;

const StyledCard = styled.div`
width: 100%;
padding: 1rem;
border-radius: 0.25rem;
border: 1px solid #cbd5e1;
position: relative;
overflow: hidden;
background: var(--color-primary); 
background: linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
background: -moz-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
background: -webkit-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
border-radius: 20px;
display: ${props => (props.hide ? 'none' : 'block')}; /* hide/show based on hide prop */
text-decoration: none;
justify-content: center
align-items: center; 
text-align: center; 
cursor: pointer;
margin-bottom: 1rem;
position: relative;
z-index: 1;
&:hover .background,
&:hover .subtitle {
    transform: translateY(0%);
    color: #eaea87;
}
&:hover .icon,{
    color: #181161;
    }
&:hover .title,{
    color: #eb600f;
    }
&:hover .icon-bg {
    transform: rotate(12deg);
    color: #7c3aed;
}
`;

const Background = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #7c3aed, #4f46e5);
    transform: translateY(100%);
    transition: transform 0.3s;
`;

const IconBg = styled(FiMail)`
    position: absolute;
    z-index: 10;
    top: -3rem;
    right: -3rem;
    font-size: 9rem;
    color: #e2e8f0;
    transition: transform 0.3s, color 0.3s;
`;

const Icon = styled(FiMail)`
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: #eb600f;;
    transition: color 0.3s;
    z-index: 10;
    position: relative;
`;

const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 1.125rem;
    color: #0f172a;
    transition: color 0.3s;
    z-index: 10;
    position: relative;
`;

const Subtitle = styled.p`
    color: #94a3b8;
    font-size: 1.2rem;
    transition: color 0.3s;
    z-index: 10;
    position: relative;
`;

const ContactForm = styled.div`
    background: var(--color-primary); 
    background: linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    background: -moz-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    background: -webkit-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    border-radius: 20px;
    width: 100%;
    padding: 1rem;
    border: 1px solid #cbd5e1;
    position: relative;
    overflow: hidden;
    background-color: white;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0;
    margin-bottom: 1rem; 
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    font-size: 1.3rem;

`;

const Input = styled.input`
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #cbd5e1;
    margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #cbd5e1;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    background-color: #eb600f;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

const ThankYouMessage = styled.div`
width: 100%;
padding: 1rem;
marggin-bottom: 1rem;
border-radius: 0.25rem;
border: 1px solid #cbd5e1;
position: relative;
overflow: hidden;
background: var(--color-primary); 
background: linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
background: -moz-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
background: -webkit-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
border-radius: 20px;
text-decoration: none;
text-align: center;
cursor: pointer;
margin-bottom: 1rem;
position: relative;
`;

const HoverDevCards = () => {
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [hideCard, setHideCard] = useState(false); // State to hide/show StyledCard

    const toggleForm = () => {
        setShowForm(!showForm);
        setHideCard(!hideCard); // Toggle hideCard state
    };

    useEffect(() => {
        let timeout;
        if (showThankYou) {
            timeout = setTimeout(() => {
                setShowForm(false);
                setShowThankYou(false);
                setHideCard(false); // Show StyledCard when ThankYouMessage disappears
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [showThankYou]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowThankYou(true);
    };

    return (
        <Container>
            <InnerContainer>
                <StyledCard onClick={toggleForm} hide={hideCard}>
                    <Background className="background" />
                    <IconBg className="icon-bg" />
                    <Icon className="icon" />
                    <CardTitle className="title">Email</CardTitle>
                    <Subtitle className="subtitle">Click to send me an email.</Subtitle>
                </StyledCard>
                {showForm && !showThankYou && (
                    <ContactForm>
                        <form onSubmit={handleSubmit}>
                            <Label htmlFor="name">Your Name:</Label>
                            <Input type="text" id="name" name="name" placeholder="Your Name" required />
                            <Label htmlFor="email">Your Email:</Label>
                            <Input type="email" id="email" name="email" placeholder="Your Email" required />
                            <Label htmlFor="message">Message:</Label>
                            <TextArea id="message" name="message" placeholder="Please enter your message & Hire me tomorrow!" rows="6" required />
                            <Button type="submit">Submit</Button>
                        </form>
                    </ContactForm>
                )}
                {showThankYou && (
                    <ThankYouMessage>
                        <p></p>
                        <p><FiMail /><h4>Thank you</h4>Your email has been sent.</p>
                        <p>Feel free to send me more emails anytime.</p>
                        <h5 style={{ color: "#3713d6" }}>I'm preparing the email form, just a second please.</h5>
                    </ThankYouMessage>
                )}
            </InnerContainer>
        </Container>
    );
};

export default HoverDevCards;
