import { MouseEventHandler } from "react";
import ToolButton from "./ToolButton";
import { HeadingIcon, Heading1Icon, Heading2Icon, Heading3Icon } from "@/ui/icons";

export default function HeadingToolButton({ handleTools, title }: { title: string, handleTools: MouseEventHandler<HTMLButtonElement> }) {

    const handleCheckbox = () => {
        const input = document.getElementById('heading-input') as HTMLInputElement;
        if (input) {
            input.checked = false
        }
    }

    return (
        <div className="bg-slate-100 rounded-md p-[2px] px-1 border-2 border-text cursor-pointer relative" title={title} >
            <label htmlFor="heading-input" className="cursor-pointer h-full"><i className="h-full flex items-center"><HeadingIcon /></i></label>
            <input type="checkbox" id="heading-input" className="peer hidden"></input>

            <div className="hidden flex-col gap-1 absolute top-8 inset-0 peer-checked:flex" onClick={handleCheckbox}>
                <ToolButton handleTools={handleTools} value="heading1" icon={<Heading1Icon />} title="Heading 1" />
                <ToolButton handleTools={handleTools} value="heading2" icon={<Heading2Icon />} title="Heading 2" />
                <ToolButton handleTools={handleTools} value="heading3" icon={<Heading3Icon />} title="Heading 3" />
            </div>
        </div>
    )
}