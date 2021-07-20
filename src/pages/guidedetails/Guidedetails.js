import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Guidedetails = () => {
  const [guide, setGuide] = useState([])
  const [totalCharges,setTotalCharges] =useState(0);

  const AllGuides = useSelector(state => state.homeReducer.allGuideDetail);
  const param = useParams().guidename

  useEffect(() => {
    fetchGuideData()
  }, [])

  const fetchGuideData = async () => {
    const filterGuide = AllGuides.filter(val => val.name.toLowerCase() === param.toLowerCase())
    setGuide(filterGuide)
    console.log(filterGuide[0])
  }

  const checkBoxHandler = (e)=>{
    // e.target.checked&&console.log(e.target.value)
    e.target.checked?setTotalCharges(totalCharges+parseInt(e.target.value)):
    setTotalCharges(totalCharges-parseInt(e.target.value))
  }
  return (
    <div className="guide">
      <div className="wrapper">
        <h1>Guide Details</h1>
        <div className="guide-details">
          {
            (guide) ?
              guide.map((val,index) =>
                <div className="place-card" key={val.name}>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${val.img}`} />
                  </figure>
                  <h2 className="card-heading">Name: {val.name}</h2>
                  <p>Experience: {val.experience}</p>
                  <p>Guide Charges: {val.guidCharges}</p>
                  <p className="guide-place">GUIDE PLACES:</p>
                  {
                    val.guidPlace.map(val =>
                      <div>
                        <input type="checkbox" value={val.charges} id={val.place} onChange={checkBoxHandler}/>
                    <label htmlFor={val.place}>{val.place}- Charges: Rs.{val.charges}</label>
                      </div>
                    )
                  }
                  <p className="guide-place">Total Charges:{totalCharges}</p>
                </div>)
              : null
          }
        </div>
      </div>
    </div>
  )
}
export default Guidedetails