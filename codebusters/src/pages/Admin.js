import 'bootstrap/dist/css/bootstrap.css';
import Navbarblack from "../components/TestComponents/Navbarblack";
import { ApiAllAdmin } from '../data/Api';

const imgSize = {
    width: "10rem",
    height: "10rem",
    objectFit: "cover",
    borderRadius: "50%"
};

const backGround = {
    backgroundColor: "#FBF4F4",
    marginTop: "5rem",
};

export default function Admin() {
    const ApiUpdateFurniture = (id, availability) => {
        console.log(id, availability)
      };
    const data = ApiAllAdmin(); 
    console.log(data)
    return (
        <div className="App">
            <Navbarblack />
        {data && data[0] && (
            <div className="container">
            <div className="row" >
                <div className="col-12" style={backGround}>
                    <h1>Admin Page</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Photos</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Availability</th>
                                <th scope="col">Delete / Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((furniture) => (
                            <tr>
                                <td>
                                    <img src={furniture.photos[0].url} style={imgSize} alt="" /> 
                                </td>
                                    <td>{furniture.category}</td>
                                    <td>{furniture.type}</td>
                                    <td>{furniture.description[0].text}</td>
                                    <td>{furniture.price}€</td>
                                <td>
                                    {furniture.availability ? (
                                        <button type="button" className="btn btn-success" onClick={() => ApiUpdateFurniture(furniture._id, {availability: false})}>True</button>
                                        ) : (
                                            <button type="button" className="btn btn-danger" onClick={() => ApiUpdateFurniture(furniture._id, {availability: true})}>False</button>
                                            )}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                    <button type="button" className="btn btn-warning">Modify</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )}
    </div>
    );
  }