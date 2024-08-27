// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function About() {
    
    return(
        <>
            <Header />
                <section className="mt-20 mb-96">
                    <div className="container">
                        <div className="about mt-52 ">
                            <div className="mx-36 flex justify-between items-center">
                                <h1 className="font-bold text-[45px]">About Us</h1>
                                <p className="w-[500px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In veritatis, nihil qui voluptatem dolore perferendis ad sint a, dignissimos ullam temporibus eligendi. Quibusdam, distinctio doloremque.</p>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}