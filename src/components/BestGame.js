import { Container, Row, Col, Card, Image } from "react-bootstrap";
import back4BloodImage from "../asset/best/back4blood.jpg"
import crysis3Image from "../asset/best/crysis3.jpg"
import residentEvil2Image from "../asset/best/residentEvil2.jpg"
import thiefImage from "../asset/best/thief.jpg"
import theWalkingDeadImage from "../asset/best/theWalkingDead.jpg"
import untilDawnImage from "../asset/best/untilDawn.jpg"

const BestGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">BEST GAMES</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil2Image} alt="residentEvil2 Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Resident Evil 2</Card.Title>
                                    <Card.Text className="text-left">
                                    esident Evil, known in Japan as Biohazard,[a] is a Japanese horror game series and media franchise created by Capcom. It consists of survival horror, third-person shooter and first-person shooter games, Zombies game
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
                            <Image src={thiefImage} alt="thief " className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Thief</Card.Title>
                                    <Card.Text className="text-left">
                                    Thief is a series of stealth video games in which the player takes the role of Garrett, a master thief in a fantasy steampunk world resembling a cross between the Late Middle Ages and the Victorian era, with more advanced technologies interspersed.
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
                            <Image src={theWalkingDeadImage} alt="The Walking Dead" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Walking Dead</Card.Title>
                                    <Card.Text className="text-left">
                                    The Walking Dead franchise is an American zombie apocalypse media franchise and a shared universe that is centered on various interconnected television series based on the comic book of the same name, primarily airing on AMC as well as web.
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
                            <Image src={untilDawnImage} alt="untilDawn" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Until Dawn</Card.Title>
                                    <Card.Text className="text-left">
                                    Until Dawn is a 2015 interactive drama horror video game developed by Supermassive Games and published by Sony Computer Entertainment for the PlayStation 4. Players assume control of eight young adults who have to survive on Blackwood Mountain.                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4BloodImage} alt="back4Blood" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Back 4 Blood </Card.Title>
                                    <Card.Text className="text-left">
                                    Back 4 Blood is a first-person shooter developed by Turtle Rock Studios and published by Warner Bros. Interactive Entertainment. It was released on October 12, 2021, for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.
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
                            <Image src={crysis3Image} alt="crysis3" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Crysis 3</Card.Title>
                                    <Card.Text className="text-left">
                                    Crysis is a first-person shooter video game series created by Crytek. The series revolves around a group of military protagonists with "nanosuits", technologically advanced suits of armor that give them enhanced physical strength, speed, defense, and cloaking abilities.
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

export default BestGame;