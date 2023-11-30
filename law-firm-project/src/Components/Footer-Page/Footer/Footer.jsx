// import Navigation from "../../Home/Navigation/Navigation";
import Logo from "../../Logo/Logo";
import SocialMedia from "../Social-Media/SocialMedia";

const Footer = () => {
    return (
      <div className="bg-black p-10 pt-28 lg:px-32 mt-20">
        <div className="flex place-content-between items-center">
          <div className="px-6">
            <Logo />
          </div>
          <div className="flex gap-10 text-sm">
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
          </div>
          {/* <Navigation /> */}
          <SocialMedia />
        </div>
        <div className="flex gap-6 justify-center text-[11px] mt-12 pb-12 text-neutral-400">
          <p>&copy; 2023 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    );
}

export default Footer;