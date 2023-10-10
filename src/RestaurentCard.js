import './App.css'




function RestaurentCard(props){
    const {name,cuisines,rating,price,time,imageUrl}=props.restaurent_details;
  return(
  <div className="res-cards">
     <img src={imageUrl} alt="res-card">
     </img>
     <div className="res-card-details">
      <div>
        <h2>{name}</h2>
        <span>{cuisines}</span>
      </div>
      <div>
        <h3>{rating}</h3>
        <span>{price}</span>
        <h4>{time}</h4>
      </div>
    </div>
  </div>
  )
}

export default RestaurentCard;
