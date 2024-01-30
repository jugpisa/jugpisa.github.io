const ArchiveListItem = ({url, title, tags}) => {
    const getIcon = (tags) => {
        if(tags.some(tag => tag.toLowerCase() === "meeting")) return "list-image-[url(/icons/calendar.svg)]";
        return "list-image-[url(/icons/filetext.svg)]";
    }

    const isItemHidden = (tags) => {
        return tags.some(tag => tag.toLowerCase() === ".postignore") ? "hidden" : "";
    }
    return (
        <li className={`${getIcon(tags)} ${isItemHidden(tags)}`}>
            <div className="flex flex-1 gap-x-2 align-baseline">
                <a href={url}>{title}</a>
                <span className="hidden sm:block">-</span>
                <div className="hidden sm:flex sm:flex-row">
                    <span className="pr-2 font-medium">tags:</span>
                    <div className="flex flex-row gap-x-1">
                        {tags.map(tag => <span className="bg-zinc-500 text-neutral-200 font-medium py-1 px-2 rounded-md text-xs align-baseline">{tag}</span>)}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ArchiveListItem