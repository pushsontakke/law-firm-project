import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandIcon from "../../../assets/ExpandMoreIcon.png";

export function ExpandMoreIcon() {
  return <img src={ExpandIcon} alt="Expand" />;
}

const FAQs = () => {
  const [isOpenOne, setIsOpenOne] = useState(true);
  const [isOpenTwo, setIsOpenTwo] = useState(true);
  const [isOpenThree, setIsOpenThree] = useState(true);
  const [isOpenFour, setIsOpenFour] = useState(true);

  return (
    <div>
      <p className="text-4xl font-semibold mt-24 mb-5">FAQ</p>
      <div className="flex place-content-between gap-32">
        <p className="text-neutral-500 text-xs w-[100%] mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div>
          <Accordion
            style={{ boxShadow: "none", borderBottom: "1px solid #3d3d3d" }}
          >
            <AccordionSummary
              onClick={() => setIsOpenOne(!isOpenOne)}
              expandIcon={isOpenOne && <ExpandMoreIcon />}
              aria-controls="panel1a-content"
              style={{ backgroundColor: "#1D1D1D" }}
            >
              <Typography className="text-lg font-medium text-white">
                Do I need a personal injury report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1D1D1D]">
              <Typography className="text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ boxShadow: "none", borderBottom: "1px solid #3d3d3d" }}
          >
            <AccordionSummary
              onClick={() => setIsOpenTwo(!isOpenTwo)}
              expandIcon={isOpenTwo && <ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ backgroundColor: "#1D1D1D" }}
            >
              <Typography className="text-lg font-medium text-white">
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1D1D1D]">
              <Typography className="text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ boxShadow: "none", borderBottom: "1px solid #3d3d3d" }}
          >
            <AccordionSummary
              onClick={() => setIsOpenThree(!isOpenThree)}
              expandIcon={isOpenThree && <ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ backgroundColor: "#1D1D1D" }}
            >
              <Typography className="text-lg font-medium text-white">
                What should I do right after car accident?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1D1D1D]">
              <Typography className="text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ boxShadow: "none", borderBottom: "1px solid #3d3d3d" }}
          >
            <AccordionSummary
              onClick={() => setIsOpenFour(!isOpenFour)}
              expandIcon={isOpenFour && <ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ backgroundColor: "#1D1D1D" }}
            >
              <Typography className="text-lg font-medium text-white">
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1D1D1D]">
              <Typography className="text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
