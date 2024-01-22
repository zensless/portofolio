import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.jpg";
import {skillTerbaru} from "../data/index"

const Home = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-2">Halo, <br /> Nama Saya <span>Jeremy Sagala</span></h1>
            <p className="mb-2">Saya merupakan seorang junior Front-end developer yang masih berkuliah di Universitas Dian Nusantara.</p>
            <button className="btn btn-outline-danger btn-lg rounded-1">DOWNLOAD</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-img" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="MySkill w-100 min-vh-100">
        <Container>
          <Row>
            <h1 className="text-center fw-bold">My Skill</h1>
            <p className="text-center">Saya menguasai beberapa front-end tools dan beberapa bahasa pemrograman, diantaranya :</p>
          </Row>
          <Row>
            {skillTerbaru.map((skill) => {
              return <Col key={skill.id}>
                <img src={skill.image} alt="" />
              </Col>;
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home