import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import './App.css';
import Random from '../Random/Random';
import CharactersPage from '../CharactersPage/CharactersPage';
import BooksPage from '../BooksPage/BooksPage';
import HousesPage from '../HousePage/HousesPage';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';




const App = () => {
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            <Random />
                        </Col>
                    </Row>
                    <Route path="/characters" component={CharactersPage} />
                    <Route path="/houses" component={HousesPage} />
                    <Route path="/books" component={BooksPage} />
                </Container>
            </>
        );
};

export default App;