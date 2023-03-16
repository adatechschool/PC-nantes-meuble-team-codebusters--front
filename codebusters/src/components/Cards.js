
import chair from '../assets/chair.jpg'

import {Api} from '../data/Api.js'

const cardStyle = {
  display:"flex",
  width:"80%",
  margin:"auto",
}

const cardBorder={
  border:"none",
  margin:"1em",
  borderRadius:"1em",
}

export default function Cards() {
  const data = Api();
  //console.log(data);
    return(
      <div style={cardStyle}>
      {data.map((furniture) => (
        <div class="card text-white" style={cardBorder} key={furniture.id}>
          <img src={furniture.photos[0].url} class="card-img" alt="..." />
          <div class="card-img-overlay">
          <h5 class="card-title fs-2 fw-bold">{furniture.category}</h5>
          <p class="card-text">{furniture.description[0].text}</p>
          <p class="card-text">{furniture.price}</p>
          </div>
      </div> 
      ))}
      </div>
    );
}
