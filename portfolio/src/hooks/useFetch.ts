import axios from "axios";
import { useState } from "react";
export default function useFetch(url: string) {
  const [response, setResponse] = useState();

  axios
    .get(url)
    .then((response) => {
      setResponse(response.data);
    })
    .catch(() => {
      console.log(`erro na api`);
    });

  return response;
}
