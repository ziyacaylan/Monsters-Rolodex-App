import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

export type Canavar = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [aramaAlanı, setAramaAlanı] = useState("");
  const [canavarlar, setCanavarlar] = useState<Canavar[]>([]);
  const [filtrelenmişCanavarlar, setFiltrelenmişCanavarlar] =
    useState(canavarlar);
  console.log("işlendi");
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Canavar[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setCanavarlar(users);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const yeniFiltrelenmişCanavarlar = canavarlar.filter((canavar) => {
      return canavar.name.toLocaleLowerCase().includes(aramaAlanı);
    });
    setFiltrelenmişCanavarlar(yeniFiltrelenmişCanavarlar);
    console.log("Effect ateşlendi");
  }, [canavarlar, aramaAlanı]);
  // console.log(aramaAlanı)
  const aramaDeğişikliği = (e: ChangeEvent<HTMLInputElement>): void => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase();
    setAramaAlanı(aramaAlanıDizesi);
  };

  return (
    <div className="App">
      <h1 className="app-title">CANAVARLAR</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder="canavarları ara"
        className="monsters-search-box"
      />
      <CardList canavarlar={filtrelenmişCanavarlar} />
    </div>
  );
};

export default App;
