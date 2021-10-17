import { useState, useEffect } from 'react';
import { DataTypes, useGetDataType } from './interfaces';

const useGetData: useGetDataType = ({endpoint}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataTypes>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const base_url =
        process.env.REACT_APP_MOCK === 'true'
          ? 'http://localhost:3333'
          : process.env.REACT_APP_BASE_URL;
      const data = await (await fetch(`${base_url}/${endpoint}`)).json();

      setData(data);
      setLoading(false);
    })();
  }, [endpoint]);
  return { loading, data };
};

export { useGetData };
