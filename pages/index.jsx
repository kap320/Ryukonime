import Header from "../pages/components/head";
import Navbar from "../pages/components/navbar/navbar";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { MdOutlineFiberNew, MdBookmarkAdded } from "react-icons/md";
import { fetchHome } from "../components/apiData";
import { useEffect, useState } from "react";

export default function Home() {
  const [ongoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);
  async function getHomePage() {
    const res = await fetchHome();
    setOngoing(res.ongoing);
    setComplete(res.complete);
  }

  useEffect(() => {
    getHomePage();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <div className="mb-3">
          <h2 style={{ fontFamily: "Poppins" }} className="container mt-5">
            {"Ongoing Anime"}
            <MdOutlineFiberNew style={{ fontSize: "50px", color: "orange" }} />
          </h2>
        </div>
        <Container>
          <hr />
          <Row className="g-4">
            {ongoing.map((ongoingData) => (
              <Col
                key={ongoingData.name}
                className="col-lg-3 align-items-stretch"
              >
                <Card className="h-100">
                  <Card.Img variant="top" src={ongoingData.thumb} />
                  <Card.ImgOverlay>
                    <Badge bg="danger">{ongoingData.episode_name}</Badge>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title style={{ fontFamily: "Poppins" }}>
                      {ongoingData.name}
                    </Card.Title>
                    <Card.Text style={{ fontFamily: "Poppins" }}>
                      Tanggal: {ongoingData.hari}
                      {"\n"}
                      {ongoingData.release}
                    </Card.Text>
                    <Button
                      variant="danger"
                      style={{ fontFamily: "Poppins" }}
                      href={`/`}
                    >
                      Nonton sekarang!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <hr />
        </Container>
        <div className="mb-3">
          <h2 style={{ fontFamily: "Poppins" }} className="container mt-5">
            {"Complete Anime"}
            <MdBookmarkAdded style={{ fontSize: "50px", color: "blue" }} />
          </h2>
        </div>
        <Container>
          <hr />
          <Row className="g-4">
            {complete.map((completeData) => (
              <Col
                key={completeData.name}
                className="col-lg-3 align-items-stretch"
              >
                <Card className="h-100">
                  <Card.Img variant="top" src={completeData.thumb} />
                  <Card.ImgOverlay>
                    <Badge bg="danger">{completeData.episode_name}</Badge>
                    {"\n"}
                    <Badge bg="danger">{completeData.hari}</Badge>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title style={{ fontFamily: "Poppins" }}>
                      {completeData.name}
                    </Card.Title>
                    <Button
                      variant="danger"
                      style={{ fontFamily: "Poppins" }}
                      href={`/`}
                    >
                      Nonton sekarang!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <hr />
        </Container>
      </main>
    </div>
  );
}
