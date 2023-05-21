import React, { useState } from 'react';

const Accordion = ({ numbers, title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item border-b-2 border-white-200 py-4 px-5 cursor-pointer">
            <div className="accordion-title flex justify-between items-center gap-4" onClick={() => setIsActive(!isActive)}>

                <div className='font-russo font-bold lg:text-2xl text-black-50'>
                    {numbers}
                </div>

                <div className='font-russo font-semibold lg:text-xl pb-4 text-black-50'>
                    {title}
                </div>

                <div className='p-2 rounded-full bg-black-50 text-white-100 w-6 h-6 flex items-center justify-center'>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content font-inter text-black-50 mt-4">{content}</div>}
        </div>
    );
};

export default Accordion
