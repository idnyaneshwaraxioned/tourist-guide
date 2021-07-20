import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link, useLocation, useParams } from "react-router-dom"

const Guidelist = () => {
  const [allGuide, setAllGuide] = useState([])
  const param = useParams().guidelist;
  const state = useSelector(state => state.homeReducer.searchplace);
  const path = useLocation().pathname;

  useEffect(() => {
    getGuideList()
  }, [])

  const getGuideList = () => {
    try {
      const filterList = state.filter(val => val.trourPlace === param)
      setAllGuide(filterList[0].guide)
    } catch (e) {
      alert("Guide not found")
    }
  }
  return (
    <section className="guide-list">
      <div className="wrapper">
        <h1>Guide List</h1>
        <div className="all-guides">
          {
            (allGuide) ?
              allGuide.map((val, index) =>
                <div className="place-card" key={index}>
                  <Link to={`${path}/${val.name}`} className="card-inner">
                    <figure>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/${val.img}`} />
                    </figure>
                    <h2 className="card-heading">{val.name}</h2>
                  </Link>
                </div>)
              : null
          }
        </div>
      </div>
    </section>
  )
}

export default Guidelist