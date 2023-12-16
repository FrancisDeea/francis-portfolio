'use client'

import { BoldIcon, CodeIcon, ImageIcon, ItalicIcon, LinkIcon, ListIcon, ListNumberIcon, QuoteIcon } from "@/ui/icons";

import ToolButton from "./ToolButton";
import HeadingToolButton from "./HeadingToolButton";

import { marked } from "marked";
import useEditor from "@/hooks/useEditor";
import { useEffect, useState, useRef } from "react";

export default function Editor() {
    const ref = useRef<HTMLTextAreaElement>(null)
    const { markdown, handleChange, handleTools, nextPosition } = useEditor(ref)
    const [selectStart, setSelectStart] = useState(null)

    useEffect(() => {
        ref.current?.focus()
        ref.current?.setSelectionRange(nextPosition, nextPosition)
    }, [nextPosition])

    return (
        <div className="text-black flex flex-col gap-4 h-full">
            <div className="flex flex-col flex-1">
                <div className="w-full flex flex-row gap-2 mb-1">
                    <HeadingToolButton handleTools={handleTools} title="Heading" />
                    <ToolButton handleTools={handleTools} value="link" title="Link" icon={<LinkIcon />} />
                    <ToolButton handleTools={handleTools} value="quote" title="Quote" icon={<QuoteIcon />} />
                    <ToolButton handleTools={handleTools} value="code" title="Code" icon={<CodeIcon />} />
                    <ToolButton handleTools={handleTools} value="image" title="Image" icon={<ImageIcon />} />
                    <ToolButton handleTools={handleTools} value="ul" title="Unordered list" icon={<ListIcon />} />
                    <ToolButton handleTools={handleTools} value="ol" title="Ordered list" icon={<ListNumberIcon />} />
                    <ToolButton handleTools={handleTools} value="bold" title="Bold" icon={<BoldIcon />} />
                    <ToolButton handleTools={handleTools} value="italic" title="Italic" icon={<ItalicIcon />} />
                </div>
                <textarea ref={ref} value={markdown} onChange={handleChange} id="editor" className="w-full h-full rounded-md p-2 resize-none" />
                <input type="file" id="file" accept="image/*" size={500000} className="hidden"/>
            </div>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} className="flex-1 basis-[200px] rounded-md p-2 bg-white overflow-y-scroll"></div>
        </div>
    )
}