import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "./Hero.scss";

// images


export default function Hero() {

    const { t } = useTranslation()

    return(
        <section className="bg-img1 bg-cover bg-center w-[100%] h-[600px] pt-5">
            <div className="container">
                <div className="hero">
                        <h1 className="text-[50px] font-bold text-white text-center mt-40">{t("heroTitle1")}</h1>

                        <Link className="border-solid border-2 border-white p-4 font-bold rounded-lg flex justify-center text-center mt-24 mb-10 m-auto w-56 text-white" to={"/order"}>Online buyurtma berish</Link>
                    </div>
                </div>
        </section>
    )
}