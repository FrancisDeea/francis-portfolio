import { MouseEventHandler } from "react";

export default function ToolButton({ value, icon, title, handleTools }: { value: string, icon: React.ReactNode, title: string, handleTools: MouseEventHandler<HTMLButtonElement> }) {

    return (
        <button className="bg-slate-100 rounded-sm p-1 border border-black" onClick={handleTools} value={value} title={title}>
            <i className="pointer-events-none">{icon}</i>
        </button>
    )
}