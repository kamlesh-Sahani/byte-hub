const TableOfContents = ({ sections }: {
  sections: {
    title: string;
    content: string;
    codeSnippet: any;
  }[]
}) => {
  return (
    <nav className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Table of Contents</h2>
      <ul className="space-y-2 text-gray-600 flex flex-col gap-2">
        {sections.map((section, index) => (
          <li key={index} className="hover:text-blue-700 hover:drop-shadow-md transition duration-150 text-gray-700 ml-2 list-decimal">
            <a href={`#section-${index + 1}`} className="block">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
