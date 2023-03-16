import kitchen from '../assets/kitchen.jpg'
import meubles from '../assets/photoAccueil.jpg'

export default function Cards2() {
    return(
      <div class="card bg-dark text-white">
        <img src={meubles} class="card-img h-25" alt="..." />
        <div class="card-img-overlay">
        <h5 class="card-title fs-2 fw-bold">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      
    );
}