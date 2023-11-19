import Ellipse from "../../../assets/Ellipse.png"
const SuccessData = () => {
    return (
        <>
            <div className="mt-20">
                <div className="font-medium text-4xl text-center">
                    Why Choose us?
                </div>
                <div className="flex gap-4">
                    <div className="mt-12 p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
                        <img className=" w-16" src={Ellipse} alt="EllipseIcon" />
                        <p className="font-medium mt-4">98% Success Rate</p>
                        <p className="mt-2 text-neutral-500 text-xs">Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button className="bg-orange-300 text-black text-sm rounded-full w-[108px] h-8 mt-4">Read More</button>
                    </div>
                    <div className="mt-12 p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
                        <img className=" w-16" src={Ellipse} alt="EllipseIcon" />
                        <p className="font-medium mt-4">100% Success Rate</p>
                        <p className="mt-2 text-neutral-500 text-xs">Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button className="bg-orange-300 text-black text-sm rounded-full w-[108px] h-8 mt-4">Read More</button>
                    </div>
                    <div className="mt-12 p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
                        <img className=" w-16" src={Ellipse} alt="EllipseIcon" />
                        <p className="font-medium mt-4">100% Success Rate</p>
                        <p className="mt-2 text-neutral-500 text-xs">Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button className="bg-orange-300 text-black text-sm rounded-full w-[108px] h-8 mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccessData;