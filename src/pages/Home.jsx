import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Home = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Card className="mt-5 shadow">
              <CardHeader className="bg-transparent mt-2 mx-3">
                <Card.Title className="d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-user-large mx-2"></i>
                  Accounts
                </Card.Title>
              </CardHeader>
              <Card.Body>
                <Card.Text className="d-flex justify-content-between text-center container w-75 mx-auto">
                  <Button variant="primary">
                    <i className="fa-solid fa-user-plus mx-2"></i>
                    Add New Account
                  </Button>
                  <Button variant="danger">
                    <i className="fa-solid fa-eye mx-2"></i>
                    View All Accounts
                  </Button>
                </Card.Text>
                <Card.Text className="border-top border-2 text-center py-5">
                  <Card.Text>0</Card.Text>
                  {/* <h3 className="mt-3">Account</h3> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="mt-5 shadow">
              <CardHeader className="bg-transparent mt-2 mx-3">
                <Card.Title className="d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-money-bill-1-wave mx-2"></i>
                  Transactions
                </Card.Title>
              </CardHeader>
              <Card.Body>
                <Card.Text className="d-flex justify-content-center">
                  <Button variant="danger">
                    <i className="fa-solid fa-eye mx-2"></i>
                    View All Transactions
                  </Button>
                </Card.Text>
                <Card.Text className="border-top border-2 text-center pt-5">
                  {/* <h1>0</h1> */}
                  {/* <h3 className="mt-3">Transactions</h3> */}
                </Card.Text>
                <Card.Text>
                  {/* <div className="row">
                    <div className="col">
                      <p>Total Credit Rs :</p>
                    </div>
                    <div className="col">
                      <p>Total debit Rs:</p>
                    </div>
                  </div> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
