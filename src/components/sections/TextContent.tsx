import React from "react";
import Button from "../ui/Button";

// Define the types for the props
interface TextContentProps {
  subtitle: string;
  title: string;
  description: string;
  list: string[];
  cta: {
    text: string;
    link: string;
  };
}

const TextContent: React.FC<TextContentProps> = ({
  subtitle,
  title,
  description,
  list,
  cta,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-blue-800">{subtitle}</p>
      <h2 className="text-2xl text-black font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <ul className="list-disc pl-5 space-y-1">
        {list.map((item, i) => (
          <li key={i} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-left ">
        <a
          href={cta.link}
          className="mt-4 align-center text-xl text-black px-4 py-2 rounded-lg  transition"
        >
          <Button>{cta.text}</Button>
        </a>
      </div>
    </div>
  );
};

export default TextContent;
