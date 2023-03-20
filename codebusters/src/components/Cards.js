import {Api} from '../data/Api.js'
import Searchblack from './buttons/Searchblack';

const cardStyle = {
  display:"flex",
  flexWrap:"wrap",
  width:"90%",
  margin:"auto",
  justifyContent:"center",
  
}

const cardUnique={
  width:"20rem",
  height:"28rem",
  margin:"1em",
  borderRadius:"1em",
}

const titleUnique = {
  textTransform:"uppercase",
  color:"black",
  textAlign:"center",
  padding:"0",
  paddingTop:"0.5em",
}

const textUnique = {
  textTransform:"uppercase",
  color:"black",
  textAlign:"center",
  padding:"0",
  paddingTop:"0.4em",
}

const imgUnique = {
  width:"100%",
  height:"80%",
  // border top radius
  borderTopLeftRadius:"1em",
  borderTopRightRadius:"1em",
}

const cardImgBody = {
 display: "flex",
 flexDirection: "row",
 justifyContent: "space-around"
}

const search = {
  alignSelf: "center"
}

export default function Cards() {
  const data = Api();
    return(
      <div style={cardStyle}>
      {data.map((furniture) => (
        <div class="card" style={cardUnique} key={furniture._id}>
          <img src={furniture.photos[0].url} class="card-img-top" style={imgUnique} alt="..." />
          <div class="card-img-body"style={cardImgBody}>
            <h6 class="card-title" style={titleUnique}>{furniture.type}</h6>
            <p class="card-text" style={textUnique}>{furniture.price}€</p>
          </div>
          <a href={`/product?${furniture._id}`}>
          <div class="go-to-description" style={search}><Searchblack/></div>
          </a>
        </div> 

      ))}
      </div>
    );
}
