import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "./Hero.scss";

// images


export default function Hero() {

    const { t } = useTranslation()

    return(
        <section className="bg-img2 bg-cover bg-no-repeat bg-center w-[100%] h-[600px] pt-5">
            <div className="container">
                <div className="hero">
                        <div className="hero__wrapper">
                            <h1 className="hero__heading w-[500px] text-[50px] font-bold text- mt-40 text-white">{t("heroTitle1")}</h1>
                            <p className="hero__text w-96 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque ipsam inventore ratione. Eligendi eum quia fugit, delectus quaerat expedita harum deleniti ad repellendus tempora magni libero quae esse. Eaque.</p>
                            <button className="border-2 border-solid border-white p-3 rounded-lg mt-5 text-white">Buyurtma berish</button>
                        </div>

                        {/* <Link className="border-solid border-2 border-white p-4 font-bold rounded-lg flex justify-center text-center mt-24 mb-10 m-auto w-56 text-white" to={"/order"}>Online buyurtma berish</Link> */}
                    </div>
                </div>
        </section>
    )
}