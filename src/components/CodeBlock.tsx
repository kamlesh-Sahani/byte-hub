import { CodeCopyCat } from "code-copy-cat";
const CodeBlock = ({ code, language = "javascript" }:{
    code:any,language?:string
}) => {
  return (
    <CodeCopyCat
          language={language}
          code={code}
          theme="nightOwl"
          isCopy={true}
          isHead={true}
          wrapLines={true}
        />
  );
};

export default CodeBlock;
