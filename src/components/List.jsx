import React from "react";
import { ContextConsumer } from "../Context";
import Item from "./Item";
import styled from "styled-components";

const ProductList = () => {
  return (
    <Container>
      <ContextConsumer>
        {(value) => {
          return value.items.map((item) => {
            return <Item key={item.id} item={item} />;
          });
        }}
      </ContextConsumer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export default ProductList;
