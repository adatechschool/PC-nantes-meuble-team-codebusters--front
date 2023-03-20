import {Api} from '../data/Api.js'
import Searchwhite from './buttons/Searchwhite';

const cardStyle = {
  display:"flex",
  flexWrap:"wrap",
  width:"90%",
  // center middle of the page
  margin:"auto",
  justifyContent:"center",
  
}

const cardUnique={
  width:"20rem",
  height:"28rem",
  margin:"1em",
  borderRadius:"1em",
}

const textUnique = {
  textTransform:"uppercase",
  color:"white",
  textShadow:"0 0 0.2em #000000",
  textAlign:"center",
  padding:"0",
}

const imgUnique = {
  width:"100%",
  height:"100%",
  // border top radius
  borderTopLeftRadius:"1em",
  borderTopRightRadius:"1em",
}

const test ={
  display: "flex",
  alignItem : "center",
}

export default function Cards() {
  const data = Api();
  //console.log(data);
    return(
      <div style={cardStyle}>
      {data.map((furniture) => (
        <div class="card" style={cardUnique} key={furniture.id}>
          <img src={furniture.photos[0].url} class="card-img" style={imgUnique} alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title" style={textUnique}>{furniture.category}</h5>
            <p class="card-text" style={textUnique}>{furniture.price}€</p>
              <div class="go-to-description" style={test} href= ""><Searchwhite/></div>
          </div>
        </div> 
      ))}
      </div>
    );
}
