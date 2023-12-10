export function TagTech({technology}: {technology: string}) {
    return (
        <span className="bg-red-400 px-4 py-[2px] font-bold rounded-2xl text-sm">{technology}</span>
    )
}

export default function TagList({technologies}: {technologies: string[]}) {
    return (
        <div className="flex gap-2 w-full">
            {
                technologies.map(technology => {
                    return <TagTech key={technology} technology={technology } />
                })
            }
        </div>
    )
}