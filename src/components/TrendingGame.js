import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mineCraftImage from "../asset/trending/minecraft.jpg"
import farCryImage from "../asset/trending/farCry6.jpg"
import lolImage from "../asset/trending/lol.jpg"
import OlliworldImage from "../asset/trending/olliworld.jpg"
import wowImage from "../asset/trending/wow.jpg"
const TrendingGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">TRENDING GAMES</h1>
                <br/>
                <ROW></ROW>
            </Container>
        </div>
    )
}