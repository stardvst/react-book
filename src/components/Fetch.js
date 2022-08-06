import React from 'react';
import useFetch from '../hooks/useFetch';

const renderOnError = error => <pre>{JSON.stringify(error, null, 2)}</pre>;
const onLoadingFallback = <p>Loading...</p>;

const Fetch = ({ uri, renderSuccess, loadingFallback = onLoadingFallback, renderError = renderOnError }) => {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (!data) return null;
  return renderSuccess(data);
};

export default Fetch;
