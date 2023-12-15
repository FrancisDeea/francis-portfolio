import { RefObject, useState } from "react";

const useEditor = (ref: RefObject<HTMLTextAreaElement>) => {
  const [markdown, setMarkdown] = useState("");
  const [nextPosition, setNextPosition] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleTools = (e: React.MouseEvent<HTMLButtonElement>) => {
    const position = ref.current?.selectionStart ?? 1
    const finalPosition = ref.current?.selectionEnd ?? 0
    const length = markdown.length
    const value = (e.target as HTMLInputElement).value;

    const checkHeadingRules = length !== 0 && (markdown[position - 2] && markdown[position - 1] !== '\n')
    const checkCodeRules = markdown[position + 1] === '`' && markdown[position - 1] === '\n'
    console.log(markdown)
    console.log("end", finalPosition)
    console.log("Markdown en position: ", markdown[position - 2])
    console.log("Markdown en position - 1: ", markdown[position - 1])
    console.log("Markdown en position + 1: ", markdown[position + 1])
    console.log("caret position: ", position)

    switch (value) {
      case "heading1":
        checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n# " + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "# " + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 3) : setNextPosition(position + 2)
        break;
      case "heading2":
        checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n## " + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "## " + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 4) : setNextPosition(position + 3)
        break;
      case "heading3":
        checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n### " + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "### " + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 5) : setNextPosition(position + 4)
        break;
      case "link":
        setMarkdown((prevState) => prevState.substring(0, position) + "[title](url) " + prevState.substring(position))
        setNextPosition(position + 13)
        break;
      case "quote":
        checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n> " + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "> " + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 3) : setNextPosition(position + 2  )
        break;
      case "code":
        checkCodeRules ? setMarkdown((prevState) => prevState.substring(0, position + 4) + "\n```\n\n```" + prevState.substring(position + 4)) : checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n```\n\n```" + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "```\n\n```" + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 5) : setNextPosition(position + 4)
        break;
      case "ul":
        checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n- " + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "- " + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 3) : setNextPosition(position + 2)
        break;
      case "ol":
        checkHeadingRules ? setMarkdown((prevState) => prevState.substring(0, position) + "\n1. " + prevState.substring(position)) : setMarkdown((prevState) => prevState.substring(0, position) + "1. " + prevState.substring(position))
        checkHeadingRules ? setNextPosition(position + 3) : setNextPosition(position + 2)
        break;
      case "bold":
        finalPosition !== position ? setMarkdown((prevState) => prevState.substring(0, position) + "**" + prevState.substring(position, finalPosition) + "**" + prevState.substring(finalPosition)) : setMarkdown((prevState) => prevState.substring(0, position) + "****" + prevState.substring(position))
        finalPosition !== position ? setNextPosition(finalPosition + 4) : setNextPosition(position + 2)
        break;
      case "italic":
        finalPosition !== position ? setMarkdown((prevState) => prevState.substring(0, position) + "*" + prevState.substring(position, finalPosition) + "*" + prevState.substring(finalPosition)) : setMarkdown((prevState) => prevState.substring(0, position) + "**" + prevState.substring(position))
        finalPosition !== position ? setNextPosition(finalPosition + 2) : setNextPosition(position + 1)
        break;
    }
  };

  return {
    markdown,
    handleChange,
    handleTools,
    nextPosition
  };
};

export default useEditor;
