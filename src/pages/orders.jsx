import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ConstructionProducts from "../database/data";

export default function Orders() {

    const { id } = useParams()
    
    return(
        <>
        <Header/>
        <div className="container">
            <ul className="flex justify-between flex-wrap mb-10">
                {
                    (ConstructionProducts ? ConstructionProducts.filter(i => i.id === Number(id)): ConstructionProducts).map(item => {
                        return(
                            <li id="cars" key={item.id} className="p-5 border-solid border-2 rounded mt-5 hover:shadow-lg ">
                                <img className="mb-4" src={item.image} width={250} height={250} alt=""/>
                                <h2 className="mb-2 font-bold">{item.name}</h2>
                                <div className="mb-2">{item.massa}</div>
                                <span className="text-blue-600 block mb-1 line-through">{item.price}</span>
                                <span className="text-blue-600">{item.discount}</span>
                                <Link className="w-40 p-2 rounded-lg block mt-4 bg-cyan-700 text-white font-bold" to={'/order'}>Buyurtma berish</Link>
                            </li>
                                )
                            })
                }
            </ul>
        </div>
            <Footer/>
        </>
    )
}