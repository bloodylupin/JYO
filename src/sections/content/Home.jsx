import { useRef, useLayoutEffect, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Container from "../../components/Container";
import Button from "../../components/Button";
import ParBefore from "../../components/ParBefore";
import SocialIcons from "../../components/SocialIcons";

import EasterEgg from "./Home/EasterEgg";

import { roadmapData, teamData, faqData } from "./Home/HomeData";
import FaqItem from "./Home/FaqItem";

import useWebP from "../../components/utilities/useWebP";

export default function Home() {
    gsap.registerPlugin(ScrollTrigger);

    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const fadedEls = containerRef.current.querySelectorAll(".fadeIn");
        const froms = [...fadedEls].map(el => gsap.fromTo(el, {
            y: 200,
            autoAlpha: 0,
            filter: "blur(50px)"
        }, {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            stagger: 1,
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                /*onUpdate: (self) => {
                    const clamp = gsap.utils.clamp(-15, 1)
                    gsap.to(el, {
                        rotate: `${clamp(self.getVelocity() / 30)}deg)`,
                        transform: `skew(${clamp(self.getVelocity() / 30)}deg)`

                    })
                },*/
                //markers: true
            }
        }));
        return () => froms.forEach(f => f.kill());
    }, []);

    /*
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const proxy = { skew: 0 },
                skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
                clamp = gsap.utils.clamp(-20, 20);
            ScrollTrigger.create({
                onUpdate: (self) => {
                    const skew = clamp(self.getVelocity() / -300);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                    }
                }
            });

            gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
        }, containerRef);
        return () => ctx.clear();
    }, []);*/

    useLayoutEffect(() => {
        const fadedEls = containerRef.current.querySelectorAll(".fadeInBlock");
        const froms = [...fadedEls].map(el => gsap.fromTo(el, {
            autoAlpha: 0,
            filter: "blur(50px)"
        }, {
            autoAlpha: 1,
            filter: "blur(0px)",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "top 75%",
                scrub: 1,
                //markers: true
            }
        }));
        return () => froms.forEach(f => f.kill());
    }, []);

    useLayoutEffect(() => {
        const staggeredFadedElsContainer = containerRef.current.querySelectorAll(".staggeredFadeInElsContainer");
        const froms = [...staggeredFadedElsContainer].map(el => gsap.fromTo(el.children,
            {
                x: -200,
                y: 50,
                autoAlpha: 0,
                filter: "blur(50px)"
            },
            {
                x: 0,
                y: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                stagger: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                    end: "bottom 85%",
                    scrub: 1,
                    //markers: true
                }
            }));
        return () => froms.forEach(f => f.kill());
    }, []);

    const svgRef = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(() => svgRef.current.getBoundingClientRect().height);
    }, []);
    useLayoutEffect(() => {
        const to = gsap.fromTo(svgRef.current.querySelector(".line"), {
            strokeDashoffset: height + 128,
        }, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current.querySelector("ul"),
                start: "top 75%",
                end: "bottom center",
                scrub: 1,
                //markers: true
            }
        });
        return () => to.kill();
    }, [height]);

    const wps = useWebP();

    useLayoutEffect(() => {
        const headerAnimationContainer = containerRef.current.querySelectorAll(".headerAnimationContainer");

        const froms = [...headerAnimationContainer].map(el => gsap.timeline({ defaults: { duration: .8, ease: "power3" } }).fromTo(el.children[0],
            {
                autoAlpha: 0,
                scale: 0,
                filter: "blur(50px)",
                duration: 1.7,
                rotate: -720
            }, {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            rotate: 0,
            delay: .3
        }).fromTo(el.children[1],
            {
                x: -200,
                autoAlpha: 0,
                scale: 0,
                filter: "blur(50px)"
            }, {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            delay: -.5
        })
        .fromTo(el.children[2],
            {
                y: 200,
                autoAlpha: 0,
                scale: 0,
                filter: "blur(50px)"
            }, {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            delay: -.5
        })
        .fromTo(el.children[3],
            {
                y: 200,
                autoAlpha: 0,
                scale: 0,
                filter: "blur(50px)"
            }, {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            delay: -.5
        })
        .fromTo(el.children[4],
            {
                y: 200,
                autoAlpha: 0,
                scale: 0,
                filter: "blur(50px)"
            }, {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            delay: -.5
        })
        .to(el.children, {
            stagger: .1,
            y: 3,
            yoyo: true,
            repeat: -1,
            duration: .7,
            ease: "rough",
        })/*.fromTo(document.querySelector(".headerBgContainer"),
            {
                backgroundSize: "auto 100%"
            }, {
            backgroundSize: "auto 103%",
            yoyo: true,
            repeat: -1,
            duration: 7,
            delay: -3,
            ease: "rough",
        })
            .to(el.children, {
                //stagger: 3,
                scrollTrigger: {
                    trigger: el.children,
                    
                    onUpdate: (self) => {
                        //const clamp = gsap.utils.clamp(-60, 60);
                        
                        gsap.to(el.children, {
                        rotate: `${clamp(self.getVelocity() / 30)}deg)`,
                            //transform: `skew(${self.getVelocity() / 30}deg)`

                        })
                    },
                    scrub: .5,
                    //markers: true
                }
            })*/);
        return () => froms.forEach(f => f.kill());
    }, []);

    const panelsTeamContainer = useRef(null);
    const panelsTeamTimelineRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            panelsTeamTimelineRef.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: panelsTeamContainer.current,
                        pin: true,
                        scrub: 1,
                        //end: "+=125%",
                        //anticipatePin: 1,
                        //markers: true
                    }
                })
                /*.from(".animation-section:nth-child(2)", {
                    x: "100%"
                })*/
                .fromTo(".animation-section:nth-child(3)", {
                    x: "100%"
                }, {
                    x: "2.5%"
                })
                .to(".animation-section:nth-child(2)", {
                    y: "-2.5%",
                    x: "-2.5%",
                    delay: -.25
                })
                .fromTo(".animation-section:nth-child(4)", {
                    x: "100%"
                }, {
                    x: "5%"
                })
                .to(".animation-section:nth-child(2)", {
                    y: "-5%",
                    x: "-5%",
                    delay: -.25
                })
                .to(".animation-section:nth-child(3)", {
                    y: "-2.5%",
                    x: "0%",
                    delay: -.5
                })
        }, panelsTeamContainer);

        return () => {
            ctx.revert();
        };
    }, [])

    return (
        <div ref={containerRef}>
            <section className={`${wps ? "bg-bg-webp" : "bg-bg"} bg-cover lg:bg-none headerBgContainer`}>
                <Container className="headerAnimationContainer">
                    <h1 style={{ textShadow: "1px -1px 5px #000" }}>Jack Yolo Odissey</h1>
                    <p style={{ textShadow: "1px -1px 5px #000" }} className="skewElem mb-4 text-black">💎 91 Cronos NFT Collection 💎</p>
                    <Link to="/mint">
                        <Button className="before:text-sm before:content-['Sold_Out'] before:-rotate-12 before:absolute before:-right-4 before:bg-slate-900/70 before:lowercase before:rounded before:top-0">Mint</Button>
                    </Link>
                    <Link to="/royalties">
                        <Button>Royalties</Button>
                    </Link>
                    <Link to="/collection">
                        <Button>Collection</Button>
                    </Link>
                </Container>
            </section>
            <section className="py-4 fadeInBlock shadow bg-gray-800 shadow-black">
                <Container className="my-16">
                    <h2 className="fadeIn text-3xl mb-4">The Odissey has started!</h2>
                    <h3 className="fadeIn text-2xl mb-4 text-gray-400">91 Unique AI Generated NFTs that reward holders!</h3>
                    <EasterEgg />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-4 border flex flex-col border-white">
                            <span style={{ textShadow: "1px 1px 3px black" }} className="my-4 fadeIn sm:row-span-3 grid place-content-center text-3xl">
                                💲
                            </span>
                            <h4 className="text-xl fadeIn md:min-h-[56px]">5% return on Mint</h4>
                            <hr className="my-4 fadeIn" />
                            <p className="fadeIn">Minters share the 5% of the minting funds. You can easily check how many royalties your NFT accumulated and claim them immediately on <Link to="/royalties" className="text-orange-400">Royalties</Link> page!</p>
                        </div>
                        <div className="p-4 border flex flex-col border-white">
                            <span style={{ textShadow: "1px 1px 3px black" }} className="my-4 fadeIn sm:row-span-3 grid place-content-center text-3xl">
                                💰
                            </span>
                            <h4 className="text-xl fadeIn md:min-h-[56px]">50% Royalties shared</h4>
                            <hr className="my-4 fadeIn" />
                            <p className="fadeIn">Once secondary sales begin, holders will receive half of the royalty value (equivalent to 5% of the total market volume) on a weekly basis. The claim process will be accessible on the <Link to="/royalties" className="text-orange-400">Royalties</Link> page!</p>
                        </div>
                        <div className="p-4 border flex flex-col border-white">
                            <span style={{ textShadow: "1px 1px 3px black" }} className="my-4 fadeIn sm:row-span-3 grid place-content-center text-3xl">
                                🤝
                            </span>
                            <h4 className="text-xl fadeIn md:min-h-[56px]">Rewards and WL on next collections</h4>
                            <hr className="my-4 fadeIn" />
                            <p className="fadeIn">By minting a JYO NFT, you are getting in early on a project with a long-term outlook. Having an NFT also guarantees you a spot on the white list and a percentage of the mint for each new collection!</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={`py-4 ${wps ? "bg-bg-webp" : "bg-bg"} bg-cover lg:bg-none`}>
                <Container className="max-w-2xl">
                    <div className="bg-gray-800 fadeInBlock rounded shadow-lg shadow-black p-8">
                        <span style={{ textShadow: "1px 1px 3px black" }} className="my-4 fadeIn sm:row-span-3 grid place-content-center text-3xl">
                            💎
                        </span>
                        <h2 className="mb-8 fadeIn">Reward for early investors</h2>
                        <ParBefore className="text-base border-white">
                            Minting a JYO NFT early on means you'll get more royalties and at a lower cost, as the price will increase by 7 CRO for every 17 mints until it reaches 75% minted
                        </ParBefore>
                        <p className="fadeIn">Rarity will be revealed at mint out, because we ♥️ suspense!</p>
                    </div>
                    <div className="bg-gray-800 fadeInBlock rounded shadow-lg shadow-black p-8">
                        <span style={{ textShadow: "1px 1px 3px black" }} className="my-4 fadeIn sm:row-span-3 grid place-content-center text-3xl">
                            🥇
                        </span>
                        <h2 className="mb-8 fadeIn">Top Minter Prize</h2>
                        <ParBefore className="text-base border-white">
                            When the minting is sold out, the top minter will receive JYO #1, the first NFT of the collection, which will be minted by the team before the public sale begins
                        </ParBefore>
                        <p className="fadeIn">The NFT will carry with him all the royalties from the mint rewards!</p>
                    </div>
                    <div className="bg-gray-800 fadeInBlock rounded shadow-lg shadow-black p-8">
                        <span style={{ textShadow: "1px 1px 3px black" }} className="my-4 fadeIn sm:row-span-3 grid place-content-center text-3xl">
                            ⛔
                        </span>
                        <h2 className="mb-8 fadeIn">No Giveaway Bullsh🤬s</h2>
                        <ParBefore className="text-base border-white">
                            No other NFTs from the collection will be given away for marketing purposes!
                        </ParBefore>
                        <p className="fadeIn">We don't need Twitter grinders, that only fight with FP!</p>
                    </div>
                </Container>
            </section>
            <section className="py-16 fadeInBlock bg-gray-800">
                <Container className="relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 bottom-0">
                        <svg className="h-full w-2" ref={svgRef}>
                            <line className="line" x1={4} x2={4} y1={128} y2={height - 64} style={{ stroke: "teal", strokeWidth: 4, strokeLinecap: "round", strokeDasharray: `${height}px`, strokeDashoffset: `${height}px` }} />
                        </svg>
                    </div>

                    <h2 className="mb-4 fadeIn">Roadmap</h2>
                    <ul className="text-left relative grid md:grid-cols-2 gap-4 staggeredFadeInElsContainer">
                        {[...roadmapData].map(({ minted, text, dark, spansTwo, completed, ongoing }) => {
                            return <li key={text} className={`${dark ? "bg-teal-800" : "bg-teal-600"} p-4 rounded shadow-lg shadow-black relative ${spansTwo ? "md:col-span-2" : null}`}>
                                <span className="border-b inline-block mb-4 border-dotted border-grey-200">{minted}</span>
                                <p>{text}</p>
                                {completed ? <span className="absolute top-4 right-4">👌</span> : null}
                                {ongoing ? <span className="absolute top-4 right-4">⚙️​</span> : null}
                            </li>
                        })}

                    </ul>
                </Container>
            </section>
            <section className={`${wps ? "bg-bg-webp" : "bg-bg"} bg-cover lg:bg-none`}>
                <div ref={panelsTeamContainer} className={`relative h-screen`}>
                    <div className="absolute top-4 lg:top-16 left-0 right-0 container px-4 lg:left-1/3 lg:right-auto lg:-translate-x-full">
                        <h2 className="fadeIn">Team</h2>
                    </div>
                    {teamData.map(({ name, pfp, aka, role, job, twitter, discord, cit }) => <div key={name} className="animation-section absolute h-screen w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Container>
                            <div className={`p-8 bg-gray-800 rounded shadow-lg shadow-black`}>
                                <picture>
                                    <source srcSet={`${pfp}.webp`} type="image/webp" />
                                    <source srcSet={`${pfp}.jpg`} type="image/jpeg" />
                                    <img src={`${pfp}.jpg`} className="mb-4 h-64 aspect-square md:h-96 rounded shadow shadow-black" alt={name} />
                                </picture>
                                <div>
                                    <h2>{name}</h2>
                                    {aka.map(a =>
                                        <p className="italic mb-4 text-gray-400" key={a}>AKA {a}</p>)}
                                    <ParBefore>{role}</ParBefore>
                                    {job.map(j =>
                                        <p key={j}>{j}</p>)}
                                    <hr className="mt-2 mb-4" />
                                    <SocialIcons twitter={twitter} discord={discord} />
                                </div>
                            </div>
                            {/*<q className="italic text-gray-400">{cit}</q>*/}
                        </Container>
                    </div>)}
                </div>
            </section>

            <section className="py-16 bg-gray-800">
                <Container start>
                    <h2 className="fadeIn text-3xl mb-4">FAQ</h2>
                    <div className="text-left container grid gap-4 max-w-full lg:gap-8 lg:max-w-2xl">
                        {[...faqData].map(({ question, answer, link }) => <FaqItem key={question} question={question} answer={answer} link={link} />)}
                    </div>
                </Container>
            </section>

            <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-700 grid gap-4">
                <Link to="/royalties">
                    <Button>Royalties</Button>
                </Link>
                <Link to="/collection">
                    <Button>Collection</Button>
                </Link>
                <a target="_blank" href="https://cronoscan.com/address/0x2a6f97546d50abcd188401ac08f4007be69d9807"><Button>Smart Contract</Button></a>
            </section>
        </div>
    );
}