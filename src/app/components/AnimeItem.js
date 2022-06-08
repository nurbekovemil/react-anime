import React from "react";
import {
  Card,
  CardTitle,
  Button,
  CardImg,
  CardBody,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
const AnimeItem = ({ anime, addFavourites }) => {
  return (
    <Card className="h-100">
      <CardImg src={anime.coverImage.medium} top width="100%" height={300} />
      <CardBody>
        <CardTitle tag="h5">{anime.title.english}</CardTitle>
        <CardSubtitle className="text-muted">{anime.title.native}</CardSubtitle>
      </CardBody>
      <CardFooter>
        <Button block color="primary" onClick={() => addFavourites(anime)}>
          В избранные
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimeItem;
