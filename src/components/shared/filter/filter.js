import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import SelectCategories from '../select-categories/selectCategories';

function Filter({ tags, onSubmit }) {
  // TODO: casos de filtrado del modelo del backend
  // name complete
  // price complete
  // rating
  // categories complete en front no funciona bien en back
  // category
  // createdAt
  // companyName complete
  // las props de busqueda solo estan en la pagina principal
  // tengo que cambiar eso.
  const initialFilterState = {
    name: '',
    price: null,
    categories: [],
  };
  const [filter, setFilter] = React.useState(initialFilterState);

  const handleChange = (event, selectedOptions) => {
    if (event && event.target) {
      const { name, value, checked } = event.target;
      if (name === 'price') {
        const newFilter = {
          ...filter,
          price: checked,
        };
        setFilter(newFilter);
      } else {
        const newFilter = {
          ...filter,
          [name]: value,
        };
        setFilter(newFilter);
      }
    } else if (selectedOptions) {
      const updatedCategories = Array.from(
        selectedOptions,
        option => option.value,
      );
      const newFilter = {
        ...filter,
        categories: updatedCategories,
      };
      setFilter(newFilter);
    }
  };

  const handleResetFilters = () => {
    setFilter(initialFilterState);
  };

  const label =
    filter.price === null
      ? 'No price selected'
      : filter.price
      ? 'Sort from highest to lowest'
      : 'Sort from lowest to highest';

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filter);
  };

  const { name, categories, price } = filter;

  return (
    <Form className="filter-container " onSubmit={handleSubmit}>
      <FormControl
        name="name"
        type="text"
        placeholder="Search product"
        value={name}
        onChange={handleChange}
        className="filter-item filter-input"
      />
      <SelectCategories
        name="categories"
        categories={tags}
        onChange={selectedOptions => handleChange(null, selectedOptions)}
        selectedCategories={categories}
        className="filter-item filter-select"
      />

      <Form.Check
        name="price"
        type="checkbox"
        label={label}
        variant="warning"
        onChange={handleChange}
        checked={price !== null ? price : false}
        id="custom-checkbox"
        className="form-switch filter-item"
      />
      <Button
        variant="info"
        type="submit"
        className="filter-item filter-button"
      >
        <FaSearch />
      </Button>

      <Button
        variant="link"
        onClick={handleResetFilters}
        className="reset-button"
        style={{ textDecoration: 'none' }}
      >
        <MdRefresh className="reset-icon" />
        Reset Filters
      </Button>
    </Form>
  );
}

export default Filter;
