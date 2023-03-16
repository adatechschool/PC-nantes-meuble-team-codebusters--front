
import chair from '../assets/chair.jpg'
import {Api} from '../data/Api.js'

export default function Cards() {
  const data = Api();
  console.log(data);
  const result = data.map((furniture) => (furniture.category))

    return(
      <div class="card bg-dark text-white" >
        <img src={chair} class="card-img" alt="..." />
        <div class="card-img-overlay">
        <h5 class="card-title fs-2 fw-bold">{result}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    );
}
