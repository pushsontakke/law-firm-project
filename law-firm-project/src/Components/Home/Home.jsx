import Logo from "../Logo/Logo.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Hero from "./Hero/Hero.jsx";

const Home = () => {

    return (
        <>
            <div className="bg-black p-10">
                <div className="flex place-content-between items-center">
                    <Logo/>
                    <Navigation/>
                    <button className="border-2 border-white text-xs p-1.5 px-5 lg:px-12">Contact Now</button>
                </div>
                <Hero/>
            </div>
        </>
    )
}

export default Home;