import axios from "axios";
import { useEffect, useState } from "react";
import SearcherStyle from "./Searcher.scss"

function App() {
  const [people, setPeople] = useState([])
  const [searchItem, setSearchItem] = useState("")

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(resp => {
      setPeople(resp.data.results)
    })
  }, [])
  return (
    <div className="searcher" >
      <div className="searcher__top">
        <h1>Live User Filter</h1>
        <p>Search by user name and/or location</p>
        <input placeholder="Search" onChange={(e) => setSearchItem(e.target.value)} />
      </div>
      <div className="searcher__content">
        {
          people.filter((value) => {
            let name = `${value.name.title} ${value.name.first} ${value.name.last}`
            let city = `${value.location.country} ${value.location.city}`
            if (value === "") return
            else if (name.toLowerCase().includes(searchItem.toLowerCase()) || city.toLowerCase().includes(searchItem.toLowerCase())) {
              return value
            }
          }).map((value, index) => {
            return (
              <div key={index} className="searcher__content__person">
                <div className="searcher__content__person__image">
                  <img src={value.picture.medium} />
                </div>
                <div className="searcher__content__person__detail">
                  <h2>{value.name.title} {value.name.first} {value.name.last}</h2>
                  <h4>{value.location.country}, {value.location.city}</h4>
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
