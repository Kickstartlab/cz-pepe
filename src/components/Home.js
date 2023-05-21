import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import pepe from '../assets/pepe.png';
import bot from '../assets/bot.png';
import reward from '../assets/reward.png';
import about from '../assets/about.png';
import token from '../assets/token.png';
import top from '../assets/top.png';
import Accordion from './Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
            easing: 'ease',
            delay: 350
        });
        Aos.refresh();
    }, [])

    const accordionData = [
        {
            numbers: '01',
            title: 'What are the NFTs?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            numbers: '02',
            title: 'How do i get NFTs?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            numbers: '03',
            title: 'How can we buy your NFTs?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            numbers: '04',
            title: 'Who are the team behind the project?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        }
    ];

    return (
        <div className="text-black-50 overflow-hidden font-opensans">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-black-100">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-12 pt-12">
                        <div data-aos="fade-right" data-aos-delay="350" className="lg:w-1/2 w-full">
                            <h2 className='md:text-5xl text-3xl font-opensans font-bold text-white-100'>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h2>

                            <p className='py-8 text-white-50 font-inter'>
                                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>

                            <div className="flex items-center gap-8 font-opensans text-white-100">
                                <a href="/">
                                    <button className=" bg-black-100 py-3 md:px-8 px-3 font-medium border-2 border-yellow-100 rounded-full hover:bg-yellow-100">
                                        View Chart
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="bg-yellow-100 rounded-full font-medium border-2 border-yellow-100 hover:bg-black-100 py-3 md:px-8 px-3">
                                        Buy Now
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className="img">
                            <img src={top} alt="Logo" className='lg:w-10/12 translate-y-12 lg:float-right' />
                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">


                        <div data-aos="zoom-in" data-aos-delay="350" className="lg:w-1/3">
                            <img src={about} alt="Logo" className='lg:float-right sm:flex mx-auto' />
                        </div>

                        <div data-aos="fade-left" className="w-full md:mt-0 mt-12">

                            <h2 className='md:text-4xl text-3xl font-opensans font-bold'>
                                About Us
                            </h2>

                            <p className='pt-6 pb-4 font-semibold lg:leading-loose'>
                                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </p>

                        </div>

                    </div>

                </div>
            </div>

            {/* utilities section */}

            <div id='achievement' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-10/12 text-center flex flex-col mx-auto'>

                        <p data-aos="slide-up" className='md:text-5xl text-2xl font-opensans text-center font-bold lg:w-1/2 flex mx-auto'>
                            See The Utilities we have
                            In store for you!
                        </p>

                        <p className='text-white-200 mt-6'>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>

                </div>

            </div>

            {/* CZPEPE NFT BOT */}

            <div id='updates' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto space-y-8">

                    <div data-aos="zoom-in" data-aos-delay="350" className='lg:flex items-center gap-x-8 justify-center'>

                        <div className='lg:block hidden'>
                            <img src={bot} alt="Logo" className='' />
                        </div>

                        <div className='space-y-6 lg:w-8/12'>
                            <h2 className='md:text-5xl text-2xl font-opensans font-bold'>
                                CZPEPE NFT BOT
                            </h2>

                            <p className='text-black-50 font-semibold lg:leading-loose'>
                                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                            </p>
                        </div>

                    </div>

                    <div data-aos="zoom-in" data-aos-delay="350" className='lg:flex items-center gap-x-8 justify-center'>

                        <div className='space-y-6 lg:w-8/12 lg:text-right'>
                            <h2 className='md:text-5xl text-2xl font-opensans font-bold'>
                                BUSD REWARDS
                            </h2>

                            <p className='text-black-50 font-semibold lg:leading-loose'>
                                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                            </p>
                        </div>

                        <div className='lg:block hidden'>
                            <img src={reward} alt="Logo" className='' />
                        </div>
                    </div>

                </div>

            </div>

            {/* TOKENOMICS */}

            <div id='tokenomics' className="lg:px-20 px-5 pt-8">
                <div className='container mx-auto'>

                    <h2 className='md:text-5xl text-2xl font-opensans font-bold text-center'>
                        TOKENOMICS
                    </h2>

                    <div className="lg:flex block justify-center items-center gap-x-24 py-8 space-y-8">

                        <div data-aos="zoom-in" data-aos-delay="350" className="lg:w-1/2">
                            <img src={token} alt="Logo" className='w-9/12 lg:float-right flex mx-auto' />
                        </div>

                        <div data-aos="slide-left" className="lg:w-1/2 w-full lg:space-y-8 space-y-4">

                            <div className='flex items-center gap-x-8'>
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.805664" y="0.382812" width="41.92" height="41.92" fill="#693AEE" />
                                </svg>

                                <p className='lg:text-2xl text-lg text-inter font-medium'>
                                    Product Development
                                </p>
                            </div>

                            <div className='flex items-center gap-x-8'>
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.805664" y="0.382812" width="41.92" height="41.92" fill="#F8B654" />
                                </svg>

                                <p className='lg:text-2xl text-lg text-inter font-medium'>
                                    Marketing
                                </p>
                            </div>

                            <div className='flex items-center gap-x-8'>
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.805664" y="0.382812" width="41.92" height="41.92" fill="#D842A5" />
                                </svg>

                                <p className='lg:text-2xl text-lg text-inter font-medium'>
                                    Business Development
                                </p>
                            </div>

                            <div className='flex items-center gap-x-8'>
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.805664" y="0.382812" width="41.92" height="41.92" fill="#4ECFA9" />
                                </svg>

                                <p className='lg:text-2xl text-lg text-inter'>
                                    Legal & Regulation
                                </p>
                            </div>

                            <div className='flex items-center gap-x-8'>
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.805664" y="0.382812" width="41.92" height="41.92" fill="#CD4242" />
                                </svg>

                                <p className='lg:text-2xl text-lg text-inter'>
                                    Operational
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Our Motive */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-24 py-12">


                        <div data-aos="fade-up" data-aos-delay="350" className="img">
                            <img src={pepe} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                        <div data-aos="slide-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-opensans font-bold'>
                                Our Motive
                            </h2>

                            <p className='pt-6 pb-4 text-white-200 font-opensans font-semibold lg:leading-loose'>
                                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>

                            <a href="/">
                                <button className="bg-yellow-100 rounded-full font-medium border-2 border-yellow-100 hover:bg-white-100 hover:text-black-100 py-3 md:px-8 px-5">
                                    About us
                                </button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-8/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-opensans font-semibold text-yellow-100 uppercase mb-6'>
                            Questions
                        </h3>

                        <h2 className='lg:text-5xl text-3xl tracking-wider font-russo text-center uppercase'>
                            FAq
                        </h2>

                        <div data-aos="zoom-in" data-aos-delay="350" className="accordion space-y-5 py-12">
                            {accordionData.map(({ numbers, title, content }) => (
                                <Accordion title={title} content={content} numbers={numbers} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
