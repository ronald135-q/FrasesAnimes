import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {props.autor}
        </Typography>
        <Typography variant="h5" component="div">
          {props.frase}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.titulo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => console.log("Olá")}>
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
