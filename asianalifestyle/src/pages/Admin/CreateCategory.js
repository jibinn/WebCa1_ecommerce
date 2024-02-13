import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminMenu from '../../components/layouts/AdminMenu';

const CreateCategory = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AdminMenu />
        </Col>
        <Col>
          <h1>Create Category</h1>
          {/* Add your category creation form or content here */}
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCategory;
