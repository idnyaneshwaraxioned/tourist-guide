import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGuides, getSearchPlace } from "./duck/action";

const Home = () => {
  const [placename, setPlacename] = useState('');
  const [allPlaces, setAllPlaces] = useState([]);
  
  const dispatch = useDispatch();
  const searchplace = useSelector(state => state.homeReducer.searchplace)

  useEffect(() => {
    fetchAllPlacesData()
  }, [])

  const inputHandler = (e) => {
    setPlacename(e.target.value)
  }

  const fetchAllPlacesData = async () => {
    const apiData = await axios("placedata.json");
    const apiData2 = await axios("guidesdata.json");
    setAllPlaces(apiData.data)
    dispatch(getAllGuides(apiData2.data))
  }

  const filterSearchInputData = (e) => {
    e.preventDefault()
    try{
      const filterPlace = allPlaces.filter(val => val.visitlocation.toLowerCase() === placename.toLowerCase());
    dispatch(getSearchPlace(filterPlace[0].places))
    setPlacename('')
    } catch(e){
      alert("City name not found")
    }
  }
  return (
    <section>
      <div className="wrapper">
        <form className='home-form' onSubmit={filterSearchInputData}>
          <div className="input-control">
            <input type="text" name="username" className='search-input' value={placename} placeholder="Please enter place name here..." onChange={inputHandler} />
          </div>
        </form>
        <div className="all-place">
          {
            (searchplace) ?
              searchplace.map((val, index) =>
                <div className="place-card" key={index}>
                  <Link to={`/guide/${val.trourPlace}`} className="card-inner">
                    <figure>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/${val.img}`} />
                      {/* <img src={`https://picsum.photos/536/354`} /> */}
                    </figure>
                    <h2 className="card-heading">{val.name}</h2>
                    <p>{val.discription}</p>
                  </Link>
                </div>)
              : null
          }
        </div>
      </div>
    </section>
  )
}
export default Home