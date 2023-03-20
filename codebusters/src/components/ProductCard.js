import {Api} from '../data/Api.js'

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

const imgUnique = {
  width:"100%",
  height:"100%",
  // border top radius
  borderTopLeftRadius:"1em",
  borderTopRightRadius:"1em",
}

export default function Cards() {
  const data = Api();
  //console.log(data);
    return(
      <div style={cardStyle}>
       (
        <div class="card" style={cardUnique} key={data[0].id}>
          <img src={data[0].photos[0].url} class="card-img" style={imgUnique} alt="..." />
        </div> 
      )
      </div>
    );
}