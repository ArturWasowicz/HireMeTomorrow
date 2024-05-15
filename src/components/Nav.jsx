import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "../UI/UserI.css";
import "./logo-animation.css";
import logo from '../assets/logo-transparent-svg.svg';


const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    display: inline-block;
    max-width: 180px;
    text-align: center;
    padding: 8px 8px;
    white-space: nowrap;
    background: var(--color-primary); 
    background: linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    background: -moz-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    background: -webkit-linear-gradient(225deg, var(--color-primary) 0%, var(--color-bg-Ex) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 20px;
    font-weight: 300;
    font-size: 18px; 
    font-family: 'Poppins', sans-serif; 
    color: var(--color-white);
    &:hover {
        transform: scale(1.05);
        transition: all var(--transition);
        box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
        filter: brightness(1);
    }
`;

export default function Nav() {
    const logoRef = useRef(null);

    useEffect(() => {
        const pulseLogo = () => {
            const logoElement = logoRef.current;
            logoElement.classList.add("pulsate"); // Füge die CSS-Klasse für die Pulsierung hinzu
            setTimeout(() => {
                logoElement.classList.remove("pulsate"); // Entferne die CSS-Klasse nach einer kurzen Verzögerung
            }, 7000); // Verzögerung für eine Sekunde
        };

        const interval = setInterval(pulseLogo, 20000); // Pulsieren alle 30 Sekunden

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <nav>
            <div className="container nav-container">
                <a href="#" className="logo" ref={logoRef}>
                    <img src={logo} alt="Hire Me Tomorrow" />
                </a>
                <div>
                    <ResumeButton href="#" alt="CV Artur Wasoiwcz">
                        My Resume
                    </ResumeButton>
                </div>
            </div>
        </nav>
    );
}
