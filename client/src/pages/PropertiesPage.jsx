import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getProperties, reset } from "../features/properties/propertySlice";
import Spinner from "../components/Spinner";

const PropertiesPage = () => {
  const { properties, isLoading, isSuccess } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="mg-top">
            <h1>Welcome to The Real Estate</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PropertiesPage;
