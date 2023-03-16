import Cards from "./Cards"
import Cards2 from "./Cards2"

export default function Gallery() {  
    return(  
        <div class="container">

            <div class="row justify-content-around mb-5">
                <div class="col-4">
                    <Cards />
                </div>
                <div class="col-4">
                    <Cards />
                </div>
                <div class="col-4">
                    <Cards />
                </div>
            </div>

            <div class="row justify-content-around mb-5 lg-5">
                <div class="col-4">
                    <Cards2 />
                </div>
                <div class="col-4">
                    <Cards2 />
                </div>
            </div>

            <div class="row justify-content-around mb-5">
                <div class="col-4">
                    <Cards />
                </div>
                <div class="col-4">
                    <Cards />
                </div>
                <div class="col-4">
                    <Cards />
                </div>
            </div>

        </div>
    )
}