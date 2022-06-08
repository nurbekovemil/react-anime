import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";
import AnimeList from "./components/AnimeList";

const App = () => {
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const searchHandler = (e) => {
    if (e.target.value == "") {
      setSearch(null);
    } else {
      setSearch(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">IZUMI IT COMPANY</NavbarBrand>
        </Navbar>
        <Container fluid="md" className="mb-4">
          <Row align="center">
            <Col
              md={{
                offset: 4,
                size: 4,
              }}
              sm="12"
              className="mt-4"
            >
              <h4>Поиск аниме</h4>
              <Input
                className="mb-3"
                placeholder="Введите аниме"
                onChange={searchHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col
              md={{
                offset: 2,
                size: 8,
              }}
              sm="12"
            >
              <AnimeList
                page={page}
                perPage={perPage}
                search={search}
                setPerPage={setPerPage}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
