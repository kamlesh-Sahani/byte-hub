import { CodeCopyCat } from "code-copy-cat";

const Section = ({ title, content, codeSnippet, hrefid }: {
    title: string;
    content: string;
    codeSnippet: any;
    hrefid: number
}) => {
    return (
        <section className="mb-8" id={`section-${hrefid + 1}`}>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-700 mb-4">{content}</p>
            {codeSnippet && (


                <CodeCopyCat
                    language={"javascript"}
                    code={codeSnippet}
                    theme="nightOwl"
                    isCopy={true}
                    isHead={true}
                    wrapLines={true}
                />
            )}
        </section>
    );
};

export default Section;
