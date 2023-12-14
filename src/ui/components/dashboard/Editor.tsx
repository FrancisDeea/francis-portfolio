'use client'

import { useState, useRef } from "react";
import { BoldIcon, CodeIcon, ImageIcon, ItalicIcon, LinkIcon, ListIcon, ListNumberIcon, QuoteIcon } from "@/ui/icons";

import ToolButton from "./ToolButton";
import HeadingToolButton from "./HeadingToolButton";

import { marked } from "marked";

export default function Editor() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const checkboxRef = useRef<HTMLInputElement>(null)
    const [md, setMd] = useState("")
    const [html, setHtml] = useState<string | Promise<string>>("")

    console.log(checkboxRef.current)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMd(e.target.value)
        setHtml(marked.parse(e.target.value))
        console.log(e.target)
    }

    const handleTools = (e: React.MouseEvent<HTMLButtonElement>) => {
        const textarea = document.getElementById('area') as HTMLInputElement
        const value = (e.target as HTMLInputElement).value

        switch (value) {
            case "heading1":
                setMd(prevState => prevState + '\n' + '# ')
                break
            case "heading2":
                setMd(prevState => prevState + '\n' + '## ')
                break
            case "heading3":
                setMd(prevState => prevState + '\n' + '### ')
                break
            case "link":
                setMd(prevState => prevState + '\n' + '[title](url)')
                break
            case "quote":
                setMd(prevState => prevState + '\n' + '> ')
                break
            case "code":
                setMd(prevState => prevState + '\n' + "```\n\n```")
                break
            case "ul":
                setMd(prevState => prevState + '\n' + "- ")
                break
            case "ol":
                setMd(prevState => prevState + '\n' + "1. ")
                break
            case "bold":
                setMd(prevState => prevState + " ** **")
                break
            case "italic":
                setMd(prevState => prevState + " * *")
                break
        }
        textareaRef.current?.focus()
    }


    return (
        <div className="text-black">
            <div className="w-full flex flex-row gap-2 mb-1">
                <HeadingToolButton handleTools={handleTools} />
                <ToolButton handleTools={handleTools} value="link" icon={<LinkIcon />} />
                <ToolButton handleTools={handleTools} value="quote" icon={<QuoteIcon />} />
                <ToolButton handleTools={handleTools} value="code" icon={<CodeIcon />} />
                <ToolButton handleTools={handleTools} value="image" icon={<ImageIcon />} />
                <ToolButton handleTools={handleTools} value="ul" icon={<ListIcon />} />
                <ToolButton handleTools={handleTools} value="ol" icon={<ListNumberIcon />} />
                <ToolButton handleTools={handleTools} value="bold" icon={<BoldIcon />} />
                <ToolButton handleTools={handleTools} value="italic" icon={<ItalicIcon />} />
            </div>
            <textarea value={md} onChange={handleChange} id="area" className="w-full h-56 rounded-md" ref={textareaRef} />
            <div dangerouslySetInnerHTML={{ __html: marked.parse(md) }}></div>
        </div>
    )
}