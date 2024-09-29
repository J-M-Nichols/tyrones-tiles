import { OverlayTrigger, Tooltip } from "react-bootstrap"

const AboutMe = _ => {
    return (
        <section
            className="m-3 gap-3 d-flex flex-column"
            aria-labelledby="About me"
        >
            <section
                className="text-background text-success text-center rounded m-auto p-3 user-select-none border border-success border-3"
            >
                <h1
                    className="fw-bolder"
                >Bio</h1>
                <article>
                    <p>
                        I am John, the developer of <b>Tyrone's Tiles</b>. I have been developing small apps and games in Unity with C# since 2012 but in the past 3 years I have been creating MERN and FERN websites. This is my third website using Redux and Bootstrap and I hope that you enjoy it. 
                    </p>
                </article>
            </section>
            <section
                className="text-background text-success text-center rounded m-auto p-3 user-select-none border border-success border-3"
            >
                <h2
                    className="fw-bolder"
                >Contact information for the developer</h2>
                <article>
                    <div 
                        aria-label="Developer Contact Links"
                        className="m-3 p-3 d-flex flex-wrap gap-3"
                    >
                        <OverlayTrigger 
                            placement="bottom"
                            overlay={
                                <Tooltip>Email me at JNichols@NichathanGaming.com.</Tooltip>
                            }
                        >
                            <a 
                                className="btn btn-outline-success flex-fill"
                                href="mailto:JNichols@NichathanGaming.com?subject=Contact%20from%20Road%20To%20The%20West%20Game&body=Hello%20NichathanGaming,"
                                aria-label="Email"
                                style={{
                                    wordBreak:'break-all'
                                }}
                            >Email Me</a>
                        </OverlayTrigger>
                        <OverlayTrigger 
                            placement="bottom"
                            overlay={
                                <Tooltip>Visit my LinkedIn.</Tooltip>
                            }
                        >
                            <a 
                                className="btn btn-outline-success flex-fill"
                                href="https://www.linkedin.com/in/johnathan-nichols-571b87272"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                style={{
                                    wordBreak:'break-all'
                                }}
                            >LinkedIn</a>
                        </OverlayTrigger>
                        <OverlayTrigger 
                            placement="bottom"
                            overlay={
                                <Tooltip>Visit my GitHub Page.</Tooltip>
                            }
                        >
                            <a 
                                className="btn btn-outline-success flex-fill"
                                href="https://github.com/J-M-Nichols"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                style={{
                                    wordBreak:'break-all'
                                }}
                            >GitHub</a>
                        </OverlayTrigger>
                        <OverlayTrigger 
                            placement="bottom"
                            overlay={
                                <Tooltip>Visit my website.</Tooltip>
                            }
                        >
                            <a 
                                className="btn btn-outline-success flex-fill"
                                href="https://www.nichathangaming.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Nichathan Gaming"
                                style={{
                                    wordBreak:'break-all'
                                }}
                            >NichathanGaming.com</a>
                        </OverlayTrigger>
                    </div>
                </article>
            </section>
            <section
                className="text-background text-success text-center rounded m-auto p-3 user-select-none border border-success border-3"
            >
                <h2
                    className="fw-bolder"
                >Acknowledgements</h2>
                <article
                    className="d-flex gap-3 flex-column"
                >
                    <div>
                        <h3>
                            Tyrone Osaurus Rex
                        </h3>
                        <div>
                            <OverlayTrigger 
                                placement="bottom"
                                overlay={
                                    <Tooltip>View on Itch.io.</Tooltip>
                                }
                            >
                                <a 
                                    className="btn btn-outline-success flex-fill"
                                    target='_blank'
                                    href="https://arks.itch.io/dino-characters"
                                    aria-label="Dino Characters"
                                    style={{
                                        wordBreak:'break-all'
                                    }}
                                >dino characters by Arks</a>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Food
                        </h3>
                        <div>
                            <OverlayTrigger 
                                placement="bottom"
                                overlay={
                                    <Tooltip>View on Itch.io.</Tooltip>
                                }
                            >
                                <a 
                                    className="btn btn-outline-success flex-fill"
                                    target='_blank'
                                    href="https://henrysoftware.itch.io/pixel-food"
                                    aria-label="Food"
                                    style={{
                                        wordBreak:'break-all'
                                    }}
                                >pixel food by Henry Software</a>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Grass & Trees
                        </h3>
                        <div>
                            <OverlayTrigger 
                                placement="bottom"
                                overlay={
                                    <Tooltip>View on Itch.io.</Tooltip>
                                }
                            >
                                <a 
                                    className="btn btn-outline-success flex-fill"
                                    target='_blank'
                                    href="https://cupnooble.itch.io/sprout-lands-asset-pack"
                                    aria-label="Grass and Trees"
                                    style={{
                                        wordBreak:'break-all'
                                    }}
                                >Sprout Lands by Cup Noodles</a>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Fireworks
                        </h3>
                        <div>
                            <OverlayTrigger 
                                placement="bottom"
                                overlay={
                                    <Tooltip>View on Itch.io.</Tooltip>
                                }
                            >
                                <a 
                                    className="btn btn-outline-success flex-fill"
                                    target='_blank'
                                    href="https://nyknck.itch.io/firework-pixel"
                                    aria-label="Fireworks"
                                    style={{
                                        wordBreak:'break-all'
                                    }}
                                >firework pixel by NYKNCK</a>
                            </OverlayTrigger>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default AboutMe