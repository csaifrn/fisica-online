import { Container, Row, Col } from 'reactstrap';

const AppFooter = () => (
    <footer className="footer">
        <Container>
            <Row>
                <Col md="6">
                    <h5>
                        ©www.napalmadamao.ifrn.edu.br
                        <br />
                        2020/2023
                    </h5>
                    <p>Democratizando o Conhecimento</p>
                    <p>
                        Email:{' '}
                        <span className="hightlight">
                            geraldo.felipe@ifrn.edu.br
                        </span>
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default AppFooter;
