import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import LoadingSpinner from '../loading-spinner/loadingSpinner';
import Rating from '../rating/rating';

const ListItems = ({
  name,
  price,
  quantity,
  images,
  description,
  rating,
  categories,
  isLoading,
}) => {
  const randomIndex = Math.floor(Math.random() * images.length); // Obtener un índice aleatorio
  const randomPhoto = images[randomIndex]; // Obtener la imagen aleatoria
  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src={`${process.env.API_URL}/images/${randomPhoto}`}
              alt={`Item ${randomIndex + 1}`}
            />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {categories.map((type, index) => (
              <Badge key={index} variant="secondary">
                {type}
              </Badge>
            ))}
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">Price: ${price}</small>
                <br />
                <small className="text-muted">Quantity: {quantity}</small>
              </div>
              <Rating rating={rating} />
            </div>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default ListItems;
