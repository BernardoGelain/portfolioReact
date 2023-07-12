import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Tag } from "./styles";

type Props = {
  url: string;
};
export default function TagTech({ url }: Props) {
  const [data, setData] = useState<String[]>();
  async function getTags(url: string) {
    const response = await axios.get(url).then((res) => {
      const languages = Object.keys(res?.data);
      setData(languages);
    });
  }
  useEffect(() => {
    getTags(url);
  }, []);
  return (
    <>
      {data?.map((language) => {
        return <Tag disabled>{language}</Tag>;
      })}
    </>
  );
}
