import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  CardBody,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
const AnimeItem = ({ anime, deleteFavourite }) => {
  return (
    <Card>
      <CardImg src={anime.coverImage.medium} top width="100%" height={300} />
      <CardBody>
        <CardTitle tag="h5">{anime.title.english}</CardTitle>
        <CardSubtitle className="text-muted">{anime.title.native}</CardSubtitle>
      </CardBody>
      <CardFooter>
        <Button color="danger" block onClick={() => deleteFavourite(anime.id)}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimeItem;
