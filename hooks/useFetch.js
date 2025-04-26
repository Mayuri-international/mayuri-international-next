// src/hooks/useFetch.js
import { useQuery, useMutation, useQueries } from '@tanstack/react-query';

export const fetcher = async ({ url, method = 'GET', data = null }) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(data && { body: JSON.stringify(data) }),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message || 'Something went wrong');
  }
  return response.json();
};

export const useFetchQuery = ({ key, url, enabled = true }) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetcher({ url }),
    enabled,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useFetchMutation = ({ method = 'POST', url }) => {
  return useMutation({
    mutationFn: (data) => fetcher({ url, method, data }),
  });
};


