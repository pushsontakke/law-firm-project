import DanielDef from "../../../assets/DanielDef.png";
import Sanfole from "../../../assets/Sanfole.png";
import Cesforila from "../../../assets/Cesforila.png";
import Colleen from "../../../assets/Colleen.png";
import Haldone from "../../../assets/Haldone.png";
import NikJeo from "../../../assets/NikJeo.png";

const OurTeam = () => {
  return (
    <div>
      <div className="text-4xl font-medium text-center m-8">Our Team</div>

      <div className="grid grid-cols-4 gap-5">
        <div className="flex gap-5 p-5 rounded-xl">
          <img src={DanielDef} alt="DanielDefIcon" className="w-10 h-10" />
          <div className="h-10">
            <p className="font-semibold text-base">Daniel Def</p>
            <p className="text-neutral-500 text-xs">301 Cases</p>
          </div>
        </div>

        <div className="flex gap-5 col-start-2 col-span-2 p-5 mx-12 bg-[#E3B748] text-[#373737] rounded-xl">
          <img src={Sanfole} alt="SanfoleIcon" className="w-10 h-10" />
          <div className="h-10">
            <p className="font-semibold text-base">Sanfole</p>
            <p className="text-neutral-500 text-xs">850 Cases</p>
          </div>
        </div>

        <div className="flex gap-5 p-5 rounded-xl">
          <img src={Cesforila} alt="CesforilaIcon" className="w-10 h-10" />
          <div className="h-10">
            <p className="font-semibold text-base">Cesforila</p>
            <p className="text-neutral-500 text-xs">470 Cases</p>
          </div>
        </div>

        <div className="flex gap-5 p-5 rounded-xl col-start-1">
          <img src={Colleen} alt="ColleenIcon" className="w-10 h-10" />
          <div className="h-10">
            <p className="font-semibold text-base">Colleen</p>
            <p className="text-neutral-500 text-xs">180 Cases</p>
          </div>
        </div>

        <div className="flex gap-5 p-5 rounded-xl col-start-2 mx-12 col-span-2">
          <img src={Haldone} alt="HaldoneIcon" className="w-10 h-10" />
          <div className="h-10">
            <p className="font-semibold text-base">Haldone</p>
            <p className="text-neutral-500 text-xs">212 Cases</p>
          </div>
        </div>

        <div className="flex gap-5 p-5 rounded-xl right-0 w-44 col-start-4">
          <img src={NikJeo} alt="NikJoeIcon" className="w-10 h-10" />
          <div className="h-10">
            <p className="font-semibold text-base">Nik Joe</p>
            <p className="text-neutral-500 text-xs">350 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;