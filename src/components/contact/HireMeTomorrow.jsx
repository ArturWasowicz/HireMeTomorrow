import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: 'Poppins', sans-serif;
`;

const WordWrapper = styled.div`
    display: inline-block;
    white-space: nowrap; 
    font-size: 35px; 
    color: var(--color-primary-1);
`;

const CharWrapper = styled.span`
    display: inline-block;
`;

const AnimatedText = ({ text, className, once, repeatDelay, animation }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.3, triggerOnce: once });

    const handleShow = useCallback(() => {
        controls.start('visible');
        setTimeout(async () => {
            await controls.start('hidden');
        }, repeatDelay - 1000); // 1 Sekunde vor erneutem Einblenden ausblenden
    }, [controls, repeatDelay]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleShow();
        }, repeatDelay);

        return () => clearInterval(interval);
    }, [handleShow, repeatDelay]);

    useEffect(() => {
        if (isInView) {
            handleShow();
        } else {
            controls.start('hidden');
        }
    }, [isInView, handleShow, controls]);

    return (
        <Wrapper className={className}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.2 },
                    },
                    hidden: {}
                }}
                aria-hidden
            >
                {text.split(' ').map((word, wordIndex) => (
                    <WordWrapper key={`word-${wordIndex}`}>
                        {word.split('').map((char, charIndex) => (
                            <CharWrapper key={`char-${charIndex}`}>
                                <motion.span className="inline-block" variants={animation}>
                                    {char}
                                </motion.span>
                            </CharWrapper>
                        ))}
                        &nbsp;
                    </WordWrapper>
                ))}
            </motion.div>
        </Wrapper>
    );
};

export default function App() {
    return (
        <div>
            <AnimatedText
                text="Hire me tomorrow"
                once={true}
                repeatDelay={10000}
                animation={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 5.5 } },
                }}
            />
        </div>
    );
}
