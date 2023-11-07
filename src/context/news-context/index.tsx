import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { INewsModel } from "../../models/news.model";
import NewsAPI from "../../utilits/api/newsApi";
import { LoaderContext } from "../loader-context";
import json from "../../utilits/hawx.news.json";

interface INewsContext {
  data: INewsModel[];
  setData: (data: INewsModel[]) => void;
}

export const NewsContext = createContext<INewsContext>({
  data: [],
  setData: () => {},
});

const NewsProvider = ({ children }: { children: ReactElement }) => {
  const [data, setData] = useState<INewsModel[]>(
    json as unknown as INewsModel[]
  );
  const { setLoader } = useContext(LoaderContext);

  useEffect(() => {
    console.log(json);
    setLoader(false);

    // NewsAPI.getNews().then((res) => {
    //     let newData = [...res.data].sort((a, b) => a.order - b.order)
    //     setData([...newData])
    //     setLoader(false)
    // }).catch((err) => {
    //     console.log(err)
    // })
  }, []);
  return (
    <NewsContext.Provider value={{ data, setData }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
