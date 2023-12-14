import { MouseEventHandler } from "react";
import ToolButton from "./ToolButton";
import { HeadingIcon, Heading1Icon, Heading2Icon, Heading3Icon } from "@/ui/icons";

export default function HeadingToolButton({ handleTools }: { handleTools: MouseEventHandler<HTMLButtonElement> }) {

    const handleCheckbox = () => {
        const input = document.getElementById('heading-input') as HTMLInputElement;
        if (input) {
            input.checked = false
        }
    }

    return (
        <div className="bg-slate-100 rounded-sm p-1 border border-black cursor-pointer relative">
            <label htmlFor="heading-input" className="cursor-pointer"><HeadingIcon /></label>
            <input type="checkbox" id="heading-input" className="peer hidden"></input>

            <div className="hidden flex-col gap-1 absolute top-7 inset-0 peer-checked:flex" onClick={handleCheckbox}>
                <ToolButton handleTools={handleTools} value="heading1" icon={<Heading1Icon />} />
                <ToolButton handleTools={handleTools} value="heading2" icon={<Heading2Icon />} />
                <ToolButton handleTools={handleTools} value="heading3" icon={<Heading3Icon />} />
            </div>
        </div>
    )
}