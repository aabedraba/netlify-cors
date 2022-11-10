import { useState, useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(apiUrl + "/hello");
      const json = await data.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <div>
      {data != null && (
        <pre>
          API Url: {process.env.NEXT_PUBLIC_API_URL}
          <br /> <br />
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Index;
