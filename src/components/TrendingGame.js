import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mineCraftImage from "../asset/trending/minecraft.jpg"
import farCryImage from "../asset/trending/farCry6.jpg"
import lolImage from "../asset/trending/lol.jpg"
import OlliworldImage from "../asset/trending/olliworld.jpg"
import wowImage from "../asset/trending/wow.jpg"
import valorantImage from "../asset/trending/valorant.jpg"


const TrendingGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="best">TRENDING GAMES</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraftImage} alt="Minecraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Minecraft</Card.Title>
                                    <Card.Text className="text-left">
                                    Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={valorantImage} alt="Valorant Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Valorant</Card.Title>
                                    <Card.Text className="text-left">
                                    Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Microsoft Windows.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={farCryImage} alt="FarCry 5 Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">FarCry 5</Card.Title>
                                    <Card.Text className="text-left">
                                    ar Cry is a franchise of first-person shooter games, all of which have been published by Ubisoft. The first game, Far Cry, was developed by Crytek.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={lolImage} alt="League Of Legend Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">League Of Legend</Card.Title>
                                    <Card.Text className="text-left">
                                    League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={wowImage} alt="World of Warcraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">World of Warcraft</Card.Title>
                                    <Card.Text className="text-left">
                                    World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={OlliworldImage} alt="Olli World Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Olli World</Card.Title>
                                    <Card.Text className="text-left">
                                    OlliOlli World is a 2D-platforming skateboarding game. The game takes place in Radlandia, where the player can interact with the game's characters
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrendingGame;