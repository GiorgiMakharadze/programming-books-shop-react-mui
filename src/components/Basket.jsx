import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasketItem from "./BasketItem";
import { ShoppingBasket } from "@mui/icons-material";

const Basket = (props) => {
  const { cartOpen, cartClose, order = [], removeFromOrder } = props;

  return (
    <Drawer anchor="right" open={cartOpen} onClose={cartClose}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <Divider />

        {!order.length ? (
          <Typography variant="h6">Cart Is Empty !</Typography>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Total Cost:
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}
                $
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
