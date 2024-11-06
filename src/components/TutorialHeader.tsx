const TutorialHeader = ({contentType,setContentType}:{
    contentType:string;
    setContentType:(type:string)=>void;
}) => {
  
    return (
        <div className="flex gap-5 justify-center items-center mr-auto mt-5 ">
            <button className={`px-5 py-1 outline-none border-none ] shadow-md font-semibold rounded cursor-pointer ${contentType === "tutorial" ? "bg-[#1038bbe8] text-white" : "bg-[#f3f2f2]  text-black"}`} onClick={() => setContentType("tutorial")}>Tutorial</button>
            <button className={`px-5 py-1 outline-none border-none ] shadow-md font-semibold rounded cursor-pointer ${contentType === "mcq" ? "bg-[#1038bbe8] text-white" : "bg-[#f3f2f2]  text-black"}`} onClick={() => setContentType("mcq")}>MCQ</button>
            <button className={`px-5 py-1 outline-none border-none ] shadow-md font-semibold rounded cursor-pointer ${contentType === "questions" ? "bg-[#1038bbe8] text-white" : "bg-[#f3f2f2]  text-black"}`} onClick={() => setContentType("questions")}>Questions</button>
            <button className={`px-5 py-1 outline-none border-none ] shadow-md font-semibold rounded cursor-pointer ${contentType === "question-bank" ? "bg-[#1038bbe8] text-white" : "bg-[#f3f2f2] text-black"}`} onClick={() => setContentType("question-bank")}>Question Bank</button>
        </div>
    )
}

export default TutorialHeader
