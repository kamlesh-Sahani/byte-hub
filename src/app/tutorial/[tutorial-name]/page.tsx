"use client";
import McqsBox from "@/components/McqsBox";
import QuestionBankBox from "@/components/QuestionPaperBox";
import QuestionsBox from "@/components/QuestionsBox";
import TutorialBox from "@/components/TutorialBox";
import TutorialHeader from "@/components/TutorialHeader";
import { useState } from "react";
const TutorialDetailPage = () => {
    const [contentType, setContentType] = useState("tutorial");
  return (
    <div className="flex flex-col gap-20">
        <TutorialHeader setContentType={setContentType} contentType={contentType}/>
        {
            contentType==="questions"? <QuestionsBox />:contentType==="mcq"?  <McqsBox />:contentType==="question-paper"?<QuestionBankBox /> :<TutorialBox />
        }
    </div>
  )
}

export default TutorialDetailPage;
