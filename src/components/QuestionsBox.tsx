
const QuestionsBox = () => {
    const questions = [
        {
            id: 1,
            type: "short",
            title: "What is Framer Motion and why is it useful in React applications?",
            answer:
                "Framer Motion is a popular animation library for React that provides easy-to-use, declarative animations. It’s useful because it allows for smooth animations with minimal effort, integrates seamlessly with React components, and provides advanced features like layout transitions, drag-and-drop, and gesture support.",
        },
        {
            id: 2,
            type: "short",
            title: "Explain the difference between initial, animate, and exit props in Framer Motion.",
            answer:
                "The `initial` prop defines the starting state of an element before the animation begins. The `animate` prop is used to define the target state for the animation. The `exit` prop defines how an element should animate when it is removed from the DOM.",
        },
        {
            id: 3,
            type: "medium",
            title: "How would you animate a component’s size and opacity at the same time using Framer Motion? Provide an example.",
            answer:
                "You can animate both size and opacity simultaneously by passing both properties in the `animate` prop. Example: <motion.div animate={{ scale: 1.5, opacity: 0.5 }} transition={{ duration: 0.5 }} />.",
        },
        {
            id: 4,
            type: "medium",
            title: "What is the difference between the motion.div and motion.svg components? When would you use each?",
            answer:
                "The `motion.div` is used for animating `div` elements, while `motion.svg` is used for animating SVG (Scalable Vector Graphics) elements. Use `motion.div` for regular DOM elements and `motion.svg` for SVG elements like paths, circles, or polygons.",
        },
        {
            id: 5,
            type: "long",
            title: "Framer Motion provides a declarative API for animations. Explain how its declarative nature differs from traditional imperative animation libraries, and the advantages it offers in React-based applications.",
            answer:
                "Framer Motion's declarative API allows you to define animations directly in your JSX, making them easier to understand, modify, and debug. In contrast, imperative animation libraries require you to manually control each animation step, often resulting in complex code and a less intuitive experience. The declarative nature of Framer Motion simplifies React component logic, improves maintainability, and integrates seamlessly with React's rendering lifecycle.",
        },
        {
            id: 6,
            type: "long",
            title: "How does Framer Motion handle layout animations when an element changes size or position? Explain the role of the layout and layoutId props in achieving smooth transitions for layout changes.",
            answer:
                "Framer Motion's `layout` prop allows elements to animate smoothly when their size or position changes. The `layoutId` prop helps to identify elements across different layouts, ensuring that Framer Motion knows how to animate the transition between elements. Together, these props allow for fluid layout animations that are automatically synchronized with the React component lifecycle.",
        },
        {
            id: 7,
            type: "long",
            title: "Discuss the concept of variants in Framer Motion. How do variants help in managing complex animations, and how would you use them to create a sequence of animations for different states of a component?",
            answer:
                "Variants in Framer Motion allow you to define multiple animation states for a component. Each state can have different properties, such as position, scale, or opacity. By using `animate` with the `variants` prop, you can define multiple animation states and transition between them based on conditions like hover, click, or layout changes. This helps manage complex animations in a clean and scalable way.",
        },
        {
            id: 8,
            type: "long",
            title: "Imagine you want to build a card flipping animation where a card rotates 180 degrees on hover, revealing content on the back. How would you implement this in Framer Motion using whileHover, animate, and transition props?",
            answer:
                "You can use `whileHover` to trigger the card flip on hover, `animate` to set the rotation, and `transition` to control the timing. Example: <motion.div whileHover={{ rotateY: 180 }} animate={{ rotateY: 0 }} transition={{ duration: 0.6 }} />. This would animate the card's rotation when hovered and reset when not hovered.",
        },
        {
            id: 9,
            type: "long",
            title: "Framer Motion's AnimatePresence is essential for animating components that enter and exit the DOM. Explain the different use cases for AnimatePresence, such as for modal windows, list transitions, or page transitions in a React application.",
            answer:
                "`AnimatePresence` allows Framer Motion to track components as they enter and leave the DOM. It’s especially useful for animating modal windows, list items, or page transitions where you want to apply animations as elements are removed or added. For example, you can animate a modal’s fade-out effect when it’s closed, or animate list items sliding in and out as they appear or disappear.",
        },
    ];

    return (
        <div className="">
            <div className="">
                <h1 className="text-4xl font-bold">Questions & Answers</h1>
                <p className="text-lg text-gray-500 mt-2">
                    Learn and explore the answers to common Framer Motion questions.
                </p>
            </div>

            {/* Short Answer Questions */}
            <div className="flex flex-col gap-10 mt-10">
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-gray-700">Short Answer Questions</h2>
                    <ol className="space-y-6 mt-4 list-decimal">
                        {questions
                            .filter((q) => q.type === "short")
                            .map((question) => (
                                <li key={question.id} className="ml-10">
                                    <h3 className="font-semibold text-gray-800">{question.title}</h3>
                                    <p className="text-gray-600 mt-2">{question.answer}</p>
                                </li>
                            ))}
                    </ol>

                </div>

                {/* Medium Answer Questions */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-gray-700">Medium Answer Questions</h2>
                    <div className="space-y-6 mt-4">
                        {questions
                            .filter((q) => q.type === "medium")
                            .map((question) => (
                                <div
                                    key={question.id}
                                    className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800">{question.title}</h3>
                                    <p className="text-gray-600 mt-2">{question.answer}</p>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Long Answer Questions */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-700">Long Answer Questions</h2>
                    <div className="space-y-6 mt-4">
                        {questions
                            .filter((q) => q.type === "long")
                            .map((question) => (
                                <div
                                    key={question.id}
                                    className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800">{question.title}</h3>
                                    <p className="text-gray-600 mt-2">{question.answer}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsBox
