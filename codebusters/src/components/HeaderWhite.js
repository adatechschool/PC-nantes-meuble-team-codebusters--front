import ImageAccueil from './ImageAccueil'
import Navbarwhite from './Navbarwhite'

function Headerwhite () {
    return (
        <header>
         <div>
         <div>
         <Navbarwhite style={{zIndex:'1'}}/>
         </div>
            <ImageAccueil/>
         </div>    
        </header>
    )
}

export default Headerwhite;