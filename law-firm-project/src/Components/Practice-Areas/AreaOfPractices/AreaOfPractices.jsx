import Business from "../../../assets/Business.png";
import Partnership from "../../../assets/Partnership.png";
import RealEstate from "../../../assets/Real-Estate.png";
import BusinessLaw from "../../../assets/BusinessLaw.png";
import LandlordDisputes from "../../../assets/Landlord-Disputes.png";
import ElderAbuse from "../../../assets/Elder-Abuse.png";

const AreaOfPractices = () => {
    return (
        <>
            <div>
                <div className="text-4xl font-medium text-center m-7">
                    Area of Practices
                </div>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    <div className="relative col-span-2">
                        <img src={Business} alt="BUSINESS" className=""/>
                        <div className="absolute inset-5 flex items-end justify-center">
                            BUSINESS LAW
                        </div>
                    </div>

                    <div className="relative">
                        <img src={Partnership} alt="PartnerShip" className=""/>
                        <div className="absolute inset-5 flex items-end justify-center">
                            PARTNERSHIP LAW
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    <div className="relative">
                        <img src={RealEstate} alt="Real Estate Law" className=""/>
                        <div className="absolute inset-5 flex items-end justify-center">
                            REAL ESTATE LAW
                        </div>
                    </div>

                    <div className="relative col-span-2">
                        <img src={BusinessLaw} alt="Business Law" className=""/>
                        <div className="absolute inset-5 flex items-end justify-center">
                            BUSINESS LAW
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    <div className="relative col-span-2">
                        <img src={LandlordDisputes} alt="Landlord Disputes" className=""/>
                        <div className="absolute inset-5 flex items-end justify-center">
                            LANDLORD DISPUTES
                        </div>
                    </div>

                    <div className="relative">
                        <img src={ElderAbuse} alt="Elder Abuse" className=""/>
                        <div className="absolute inset-5 flex items-end justify-center">
                            ELDER ABUSE
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AreaOfPractices;

