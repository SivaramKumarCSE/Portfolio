"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div
            onClick={handleFlip}
            className='w-[450px] h-[280px] rounded-md cursor-pointer relative'
        >
            <motion.div
                className='flip-card-inner w-full h-full absolute'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <motion.div
                    className='flip-card-front bg-cover bg-center text-black rounded-lg p-4 absolute inset-0'
                    style={{ backgroundImage: `url(${image})` }}
                >
                    {!isFlipped && (
                        <div>
                            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 rounded-md'></div>
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                                Learn more &gt;
                            </div>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    className='flip-card-back bg-cover bg-center text-white rounded-lg p-4 absolute inset-0'
                    style={{ backgroundImage: `url(${image})`, rotateY: isFlipped ? "180deg" : "0" }}
                >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    {isFlipped && (
                        <div className='flex flex-col gap-5 p-2   bg-gradient-to-tr from-blue-300 to-red-300 rounded-lg'>
                            <h1 className='text-black text-2xl font-extrabold   '>{title}</h1>
                            <p className='text-black font-semibold text-[20px]'>{text}</p>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
