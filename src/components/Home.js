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
            duration: 2500,
            once: false,
            easing: 'ease',
        });
        Aos.refresh();
    }, [])

    const accordionData = [
        {
            numbers: '01',
            title: 'What is ChangPEPE Zhaoge?',
            content: `A: ChangPEPE Zhaoge is a meme coin launched on the Binance Smart Chain (BSC) that combines the influence of CZ Binance and the PEPE hype. It aims to provide a thrilling crypto experience and rewards its holders with 1% BUSD on every transaction.`
        },
        {
            numbers: '02',
            title: 'How does ChangPEPE Zhaoge reward its holders?',
            content: ` As a token holder of ChangPEPE Zhaoge, you will receive 1% of the transaction value in BUSD directly to your wallet with every transaction that occurs. The more ChangPEPE Zhaoge tokens you hold, the more BUSD rewards you will earn.`
        },
        {
            numbers: '03',
            title: 'How can I purchase ChangPEPE Zhaoge?',
            content: `To purchase ChangPEPE Zhaoge, you can visit the official website and follow the instructions provided. Make sure you have a compatible BSC wallet and sufficient BNB to complete the transaction.`
        },
        {
            numbers: '04',
            title: 'Is ChangPEPE Zhaoge a safe investment?',
            content: `Investing in meme coins, including ChangPEPE Zhaoge, carries risks. It's important to conduct thorough research, assess the project's fundamentals, and make informed decisions based on your risk tolerance. Always exercise caution and never invest more than you can afford to lose.`
        },
        {
            numbers: '05',
            title: 'Can I earn passive income with ChangPEPE Zhaoge?',
            content: `Yes! By holding ChangPEPE Zhaoge tokens, you automatically earn BUSD rewards with every transaction. The more actively you participate and hold the tokens, the more rewards you can accumulate over time.`
        },
        {
            numbers: '06',
            title: 'Are there any future developments planned for ChangPEPE Zhaoge?',
            content: `Yes, the team behind ChangPEPE Zhaoge is dedicated to continuous improvement and growth. They are actively working on new developments, partnerships, and community initiatives to enhance the project's value and bring more exciting features to its holders.`
        },
        {
            numbers: '07',
            title: 'Where can I find more information about ChangPEPE Zhaoge?',
            content: `For more information about ChangPEPE Zhaoge, you can visit the official website, join the official social media channels, and engage with the community. Stay updated on the latest news, announcements, and discussions related to ChangPEPE Zhaoge.`
        }
    ];

    return (
        <div className="text-black-50 overflow-hidden font-opensans">

            {/* top section */}

            <div className='py-4 text-center bg-yellow-100 lg:text-base text-sm'>
                0xefd73880Ba845815bdBAD75D1dEF3F6a5087dDbe
            </div>

            <div className="lg:px-20 px-5 bg-black-100">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-12 pt-12">
                        <div data-aos="fade-right" className="lg:w-1/2 w-full">
                            <h1 className='md:text-5xl text-3xl font-opensans font-bold text-white-100'>
                                Introducing ChangPEPE Zhaoge: The Ultimate Meme Coin on BSC
                            </h1>

                            <p className='py-8 text-white-50 font-inter'>
                                Are you ready to embark on a thrilling crypto adventure inspired by the legendary CZ Binance and the PEPE hype? Look no further than ChangPEPE Zhaoge, the hottest meme coin to hit the Binance Smart Chain (BSC)!
                            </p>

                            <div className="flex items-center gap-8 font-opensans text-white-100">
                                <a href="https://poocoin.app/tokens/0xefd73880ba845815bdbad75d1def3f6a5087ddbe">
                                    <button className=" bg-black-100 py-3 md:px-8 px-3 font-medium border-2 border-yellow-100 rounded-full hover:bg-yellow-100">
                                        View Chart
                                    </button>
                                </a>

                                <a href="https://pancakeswap.finance/swap?outputCurrency=0xefd73880Ba845815bdBAD75D1dEF3F6a5087dDbe">
                                    <button className="bg-yellow-100 rounded-full font-medium border-2 border-yellow-100 hover:bg-black-100 py-3 md:px-8 px-3">
                                        Buy Now
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div data-aos="flip-left" className="img">
                            <img src={top} alt="Logo" className='lg:w-10/12 translate-y-12 lg:float-right' />
                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">


                        <div data-aos="zoom-in" className="lg:w-1/3">
                            <img src={about} alt="Logo" className='lg:float-right sm:flex mx-auto rotate' />
                        </div>

                        <div data-aos="fade-left" className="w-full md:mt-0 mt-12">

                            <h2 className='md:text-4xl text-3xl font-opensans font-bold'>
                                About Us
                            </h2>

                            <p className='py-6 font-semibold lg:leading-loose'>
                                ChangPEPE Zhaoge is not your average meme coin. It's a revolutionary token that brings together the best of two worlds: the influence of CZ Binance and the frenzy of the PEPE phenomenon. By combining these elements, we've created an exhilarating experience for crypto enthusiasts and meme lovers alike.
                            </p>

                            <p className='font-semibold lg:leading-loose'>
                                But that's not all! As a token holder of ChangPEPE Zhaoge, you'll be rewarded generously. With every transaction that takes place, 1% of the transaction value will be distributed in BUSD directly to our loyal holders. This means that the more you hold, the more BUSD you earn!
                            </p>

                        </div>

                    </div>

                </div>
            </div>

            {/* utilities section */}

            <div id='achievement' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" className='lg:w-10/12 text-center flex flex-col mx-auto'>

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

                    <div className='lg:flex items-center gap-x-8 justify-center'>

                        <div data-aos="fade-right" className='lg:block hidden'>
                            <img src={bot} alt="Logo" className='' />
                        </div>

                        <div data-aos="fade-left" className='space-y-6 lg:w-8/12'>
                            <h2 className='md:text-5xl text-2xl font-opensans font-bold'>
                                CZPEPE NFT BOT
                            </h2>

                            <p className='text-black-50 font-semibold lg:leading-loose'>
                                Our Text to NFT AI Bot is an innovative tool designed to transform your written words into unique and collectible NFTs (Non-Fungible Tokens). It brings together the power of artificial intelligence and blockchain technology to create a seamless and exciting experience for content creators, artists, and enthusiasts.
                            </p>
                        </div>

                    </div>

                    <div className='lg:flex items-center gap-x-8 justify-center'>

                        <div data-aos="fade-right" className='space-y-6 lg:w-8/12 lg:text-right'>
                            <h2 className='md:text-5xl text-2xl font-opensans font-bold'>
                                BUSD REWARDS
                            </h2>

                            <p className='text-black-50 font-semibold lg:leading-loose'>
                                At PEPE Zhaoge, we believe in rewarding our community for their participation and support. That's why our Text to NFT AI Bot offers a unique opportunity to earn 1% BUSD rewards on every transaction.
                            </p>
                        </div>

                        <div data-aos="fade-left" className='lg:block hidden'>
                            <img src={reward} alt="Logo" className='' />
                        </div>
                    </div>

                </div>

            </div>

            {/* TOKENOMICS */}

            <div id='tokenomics' className="lg:px-20 px-5 pt-8">
                <div className='container mx-auto'>

                    <h2 data-aos="fade-up" className='md:text-5xl text-2xl font-opensans font-bold text-center'>
                        TOKENOMICS
                    </h2>

                    <div className="lg:flex block justify-center items-center gap-x-24 py-8 space-y-8">

                        <div data-aos="zoom-in" className="lg:w-1/2">
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


                        <div data-aos="fade-up" className="img">
                            <img src={pepe} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                        <div data-aos="slide-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-opensans font-bold'>
                                Why choose ChangPEPE Zhaoge?
                            </h2>

                            <p className='pt-6 pb-4 text-white-200 font-opensans font-semibold lg:leading-loose'>
                                Inspired by CZ Binance and the PEPE hype
                                Unleash your inner meme enthusiast
                                Earn 1% BUSD rewards on every transaction
                                Ride the wave of excitement on the Binance Smart Chain
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

                    <div data-aos="fade-up" className='lg:w-8/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-opensans font-semibold text-yellow-100 uppercase mb-6'>
                            Questions
                        </h3>

                        <h2 className='lg:text-5xl text-3xl tracking-wider font-russo text-center uppercase'>
                            FAq
                        </h2>

                        <div data-aos="zoom-in" className="accordion space-y-5 py-12">
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
