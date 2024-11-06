"use client";
import McqsBox from "@/components/McqsBox";
import QuestionsBox from "@/components/QuestionsBox";
import TutorialHeader from "@/components/TutorialHeader";
import { useState } from "react";
const TutorialDetailPage = () => {
    const [contentType, setContentType] = useState("tutorial");
  return (
    <div className="flex flex-col gap-20">
        <TutorialHeader setContentType={setContentType} contentType={contentType}/>
        {
            contentType==="questions"? <QuestionsBox />:contentType==="mcq"?  <McqsBox />:""
        }
    </div>
  )
}

export default TutorialDetailPage;
