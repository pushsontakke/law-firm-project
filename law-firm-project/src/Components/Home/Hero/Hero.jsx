import HeroImage from "../Hero-Image/Hero-Image.jsx";
import Message from "../../../assets/Message.png";

const Hero = () => {
    return (
        <div className="flex place-content-between mt-12 mb-24">
            <div className="md:w-3/4 w-3/5 mt-5">
                <div>
                    <p className="text-[44px]">You don&apos;t have to</p>
                    <p className="text-[44px] font-bold">Fight them Alone.</p>
                </div>
                <p className="text-xs mt-3 text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos
                    faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                </p>
                <div className="flex bg-[#383838] mt-5 h-12 rounded-full text-sm w-[372px]">
                    <img src={Message} alt="img" className="opacity-25 h-5 mt-3.5 ml-6 mr-3"/>
                    <input placeholder={"Enter your email address"} className="bg-[#383838] focus:outline-none "/>
                    <button className="bg-orange-300 text-black rounded-full w-28">Let&apos;s Talk</button>
                </div>
            </div>
            <div>
                <HeroImage />
            </div>
        </div>
    )
}
export default Hero;