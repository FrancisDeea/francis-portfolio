'use client'

import { BoldIcon, CodeIcon, ImageIcon, ItalicIcon, LinkIcon, ListIcon, ListNumberIcon, QuoteIcon } from "@/ui/icons";

import ToolButton from "./ToolButton";
import HeadingToolButton from "./HeadingToolButton";
import Preview from "./Preview";

import useEditor from "@/hooks/useEditor";
import { useEffect, useRef } from "react";

export default function Editor() {
    const ref = useRef<HTMLTextAreaElement>(null)
    const { markdown, handleChange, handleTools, nextPosition } = useEditor(ref)

    useEffect(() => {
        ref.current?.focus()
        ref.current?.setSelectionRange(nextPosition, nextPosition)
    }, [nextPosition])

    return (
        <>
            <div className="h-full flex flex-col flex-1">
                <div className="w-full flex flex-row gap-2 mb-2 text-black">
                    <HeadingToolButton handleTools={handleTools} title="Heading" />
                    <ToolButton handleTools={handleTools} value="link" title="Link" icon={<LinkIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="quote" title="Quote" icon={<QuoteIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="code" title="Code" icon={<CodeIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="image" title="Image" icon={<ImageIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="ul" title="Unordered list" icon={<ListIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="ol" title="Ordered list" icon={<ListNumberIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="bold" title="Bold" icon={<BoldIcon style="w-4 h-4" />} />
                    <ToolButton handleTools={handleTools} value="italic" title="Italic" icon={<ItalicIcon style="w-4 h-4" />} />
                </div>
                <textarea ref={ref} value={markdown} onChange={handleChange} id="editor" name="description" placeholder="Enter description" className="w-full flex-1 rounded-md bg-background2 text-text p-2 resize-none" />
                <input type="file" id="file" accept="image/*" size={500000} className="hidden"/>
            </div>
            <Preview markdown={markdown} />
        </>
    )
}