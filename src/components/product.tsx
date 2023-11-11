import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { dataType } from "../../types";
import { ProductStore } from "../store/productStore";

interface Props {
  item: dataType;
}

export const Product = ({ item }: Props) => {
  const { deleteProduct } = ProductStore((state) => state);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (id: number) => {
      return axios.delete(`https://fakestoreapi.com/products/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    },
  );

  const handleRemove = (id: number) => {
    deleteProduct(id);
    mutation.mutate(id);
  };

  return (
    <Card sx={{ maxWidth: 345, height: "400px", position: "relative" }}>
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="150px"
            image={item.image}
            alt={item.title}
            sx={{
              objectFit: "contain",
              p: "10px",
              width: "200px",
            }}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ position: "absolute", bottom: "0", left: "5px" }}>
        <Button
          size="small"
          color="error"
          onClick={() => handleRemove(item.id)}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
};
