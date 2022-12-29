import axios from "axios";
import { useEffect, useState } from "react";
import { Value } from "sass";
import SearcherStyle from "./Searcher.scss"
function App() {
  const [people, setPeople] = useState([])
  const [searchItem, setSearchItem] = useState("")

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(resp => {
      setPeople(resp.data.results)
      // console.log();
    })
  }, [])

  return (
    <div className="searcher" >
      <div className="searcher__top">
        <h1>Live User Filter</h1>
        <p>Search by user name and/or location</p>
        <input placeholder="Search" />
      </div>
      <div className="searcher__content">
        {
          people.filter((item) => {
            if (item == "") {
              return value
            }
            else if (item.name.first.toLowerCase().includes(searchItem.toLowerCase()))
          })
          people.map((item) => {
            return (
        <div className="searcher__content__person">

          <div className="searcher__content__person__image">
            <img src={item.picture.medium} />
          </div>
          <div className="searcher__content__person__detail">

            <h2>{item.name.title}{item.name.first}{item.name.last}</h2>
            <h4>{item.location.country}{item.location.city}</h4>
          </div>
        </div>
        )
          })
        }
      </div>
    </div >
  );
}

export default App;
