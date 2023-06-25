import React from 'react';
import Layout from '@/components/layout/layout';
import { getProducts } from './api/items';
import ProductsList from '@/components/shared/list-items/productList';

function Home() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const resetError = () => setError(null);

  React.useEffect(() => {
    items();
  }, []);

  const items = async () => {
    setError();
    setIsLoading(true);
    try {
      const items = await getProducts();
      setProducts(items.result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div>
          <ProductsList products={products} isLoading={isLoading} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
