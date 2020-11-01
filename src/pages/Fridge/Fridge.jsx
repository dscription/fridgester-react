import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Container from "../../styledComponents/Container";

const Fridge = () => {
  return (
    <>
      <Container>
        <h1>This is your fridge.</h1>
        <Form>
          <FormGroup>
            <Label for="search">Search</Label>
            <Input id="search" placeholder="Search for item."></Input>
          </FormGroup>
        </Form>
        {/* Search Results Map */}
      </Container>
    </>
  );
};

export default Fridge;
