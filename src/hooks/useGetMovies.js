import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetMovies = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //   const response = await axios.get(url);

        const response = await axios({
          method: 'GET',
          url: url,
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI0MjEwNWRhZDRkNTEyMTk0OTY4NTJjMDIxMGVmNiIsInN1YiI6IjY0NjdlYzBjYTUwNDZlMDEwNThiMTFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J4oILHsNaxOa2wR7QI4IP-gTp_TQuJdUfMCgRJwoQAU',
          },
        });

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetMovies;
