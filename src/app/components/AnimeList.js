import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries/anime";
import AnimeItem from "./AnimeItem";
import Favourites from "./Favourites";
import { Row, Col, Spinner, Button, CardDeck } from "reactstrap";

const AnimeList = ({ page, perPage, setPerPage, search }) => {
  const [animeList, setAnimeList] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const { data, loading, error } = useQuery(GET_ANIME_LIST, {
    variables: { page, perPage, search },
  });

  useEffect(() => {
    if (!loading) {
      setAnimeList(data.Page.media);
    }
  }, [data]);
  const favouritesHandler = (anime) => {
    !favourites
      ? setFavourites([anime])
      : !favourites.find(({ id }) => id === anime.id) &&
        setFavourites([...favourites, anime]);
  };
  const deleteFavourite = (id) =>
    setFavourites(favourites.filter((f) => f.id != id));
  const loadMore = () => setPerPage(perPage + 3);
  if (loading) {
    return (
      <Row align="center">
        <Col>
          <Spinner>Loading...</Spinner>
        </Col>
      </Row>
    );
  }
  if (error) {
    return <>{error}</>;
  }
  return (
    <>
      <Row className="card-deck">
        {animeList &&
          animeList.map((anime, i) => (
            <Col md={4} sm={12} className="my-2 h-200" key={i}>
              <AnimeItem anime={anime} addFavourites={favouritesHandler} />
            </Col>
          ))}
      </Row>
      <Row align="center" className="mt-4">
        <Col>
          <Button onClick={loadMore}>Загрузить ещё</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <h3>Избранные</h3>
        {favourites.map((anime, i) => (
          <Col md={4} sm={12} className="my-2" key={i}>
            <Favourites anime={anime} deleteFavourite={deleteFavourite} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AnimeList;
