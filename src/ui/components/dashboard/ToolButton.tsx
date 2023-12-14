import { MouseEventHandler } from "react";

export default function ToolButton({ value, icon, handleTools }: { value: string, icon: React.ReactNode, handleTools: MouseEventHandler<HTMLButtonElement> }) {

    return (
        <button className="bg-slate-100 rounded-sm p-1 border border-black" onClick={handleTools} value={value}>
            <i className="pointer-events-none">{icon}</i>
        </button>
    )
}