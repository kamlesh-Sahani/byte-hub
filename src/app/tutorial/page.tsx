import Card from "@/components/Card"
const TutorialPage = () => {
    const academicCourses = [
        { title: "Computer Graphics", description: "Explore the principles and techniques behind computer-generated imagery." },
        { title: "Computer Networks", description: "Learn the fundamentals of network architecture, protocols, and data communication." },
        { title: "Operating Systems", description: "Understand the workings of operating systems and resource management." },
        { title: "Data Structures and Algorithms", description: "Master essential data structures and algorithms for efficient coding." },
        { title: "Database Management Systems", description: "Dive into relational databases, SQL, and data modeling." },
        { title: "Software Engineering", description: "Gain insights into software development methodologies and best practices." }
      ];
    
      const trendingTechStack = [
        { title: "Machine Learning", description: "Explore machine learning algorithms and models." },
        { title: "Blockchain Development", description: "Learn how blockchain works and how to develop decentralized applications." },
        { title: "DevOps with Docker & Kubernetes", description: "Understand DevOps practices and tools like Docker and Kubernetes." },
        { title: "Cybersecurity Basics", description: "An introduction to security principles and best practices." },
        { title: "Cloud Computing with AWS", description: "Learn cloud deployment with Amazon Web Services." },
        { title: "Full Stack Development", description: "Comprehensive course on full stack web development." }
      ];

    return (
        <div className="flex flex-col gap-20 justify-center  mt-16 xl:w-[80%] max-xl:w-full max-xl:p-4">


            <div className="flex flex-col gap-2 ">
                <h1 className=" font-semibold text-2xl">Academic Subjects</h1>
                <p className="text-gray-500">Build a strong foundation with core computer science subjects, essential for understanding advanced technologies.</p>
                <div className="flex flex-wrap gap-5  justify-center items-center mt-4">
                    {
                        academicCourses.map(({title,description})=>(
                            <Card key={title} title={title} description={description} redirectTo={title}/>
                        ))
                    }
                </div>

            </div>




            <div className="flex flex-col gap-2 ">
                <h1 className=" font-semibold text-2xl">Explore Trending Tech Fields</h1>
                <p className="text-gray-500">Stay current with the latest technologies and frameworks that drive modern software development.</p>
                <div className="flex flex-wrap gap-5 justify-center items-center ">
                {
                        trendingTechStack.map(({title,description})=>(
                            <Card key={title} title={title} description={description}  redirectTo={title}/>
                        ))
                    }
                </div>

            </div>




        </div>
    )
}

export default TutorialPage
