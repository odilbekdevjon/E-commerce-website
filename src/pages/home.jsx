// components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Main from '../components/Main/Main';


export default function Home() {
    return(
        <>
            <header>
                <Header/>
            </header>
            <div>
                <Hero/>
            </div>
            <main>
                <Main/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}