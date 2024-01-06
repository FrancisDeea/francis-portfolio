import { MouseEventHandler } from "react";

export default function ToolButton({ value, icon, title, handleTools }: { value: string, icon: React.ReactNode, title: string, handleTools: MouseEventHandler<HTMLButtonElement> }) {

    return (
        <button type="button" className="bg-slate-100 rounded-md p-[2px] px-1 border-2 border-medium flex justify-center items-center" onClick={handleTools} value={value} title={title}>
            <i className="pointer-events-none">{icon}</i>
        </button>
    )
}