import { useQuery, useQueryClient } from "react-query/";
import axios from "axios";
import { Product } from "../components";
import { dataType, queryType } from "../../types";
import { ProductStore } from "../store/productStore";
import { useEffect } from "react";
import {
  Stack,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Box,
} from "@mui/material";

const fetchData = async (): Promise<dataType[]> => {
  const { data } = await axios.get<dataType[]>(
    "https://fakestoreapi.com/products/?limit=18",
  );
  return data;
};

export const Products = () => {
  const { addProduct, products } = ProductStore((state) => state);
  const { data, error, isLoading }: queryType = useQuery<dataType[], Error>(
    "posts",
    fetchData,
  );

  useEffect(() => {
    if (data) {
      addProduct(data);
    }
  }, [data]);

  return (
    <Stack>
      {isLoading && (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {error && (
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Error: {error.message}
        </Typography>
      )}
      {!products?.length && (
        <Typography
          component={"h3"}
          variant="h4"
          color="#2196f3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Products empty
        </Typography>
      )}
      <Box my={3}>
        <Typography
          variant="h5"
          component="h1"
          textAlign="center"
          color="#2196f3"
          fontWeight="bold"
        >
          Products
        </Typography>
      </Box>
      <List
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          maxWidth: "900px",
          flexWrap: "wrap",
          rowGap: "15px",
        }}
      >
        {products?.map((item) => (
          <ListItem key={item.id} sx={{ maxWidth: "300px" }}>
            <Product item={item} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
