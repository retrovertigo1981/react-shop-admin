import FormProduct from '@components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '@components/Spinner';
import NotFound from '@components/NotFound';
import endPoints from '@services/api';

export default function Edit() {
  const [notFound, setNotFound] = useState(false);
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;

    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getProduct(id));
        response && setProduct(response.data);
        setNotFound(false);
      } catch (error) {
        setNotFound(true);
        console.error(error.message);
      }
    }
    getProduct();
    console.log(id);
  }, [router?.isReady, router.query]);

  return notFound ? <NotFound /> : product ? <FormProduct product={product} /> : <Spinner />;
}
