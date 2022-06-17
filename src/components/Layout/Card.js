import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={props.item.img}
        alt="funky shoes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" align="center" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {props.item.description}
        </Typography>
        <Typography variant="body1" color="text.primary" align="center">
          ${props.item.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">
          <a href={props.item.linkto} target="_blank">
            Purchase
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
