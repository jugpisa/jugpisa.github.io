
const parseDateTime = (date, time) => {
    return new Date(date+'T'+time+':00');
}

const parseAstroURL = (fileName) => {
    const subPaths = fileName.split("/");
    const eventsFolderIndex = subPaths.findIndex((sub) => sub === 'eventi');
    const pageName = subPaths[subPaths.length-1].replace(/\.[^/.]+$/, "");
    const URLPaths = subPaths.slice(eventsFolderIndex, subPaths.length);
    URLPaths[URLPaths.length-1] = pageName;
    return "/"+URLPaths.join("/");
}

const mapEvents = (AstroEventsArray) => {
    const mappedEvents = AstroEventsArray.map((ev) => {
            return {
                id: ev.file, 
                title: ev.frontmatter.title,
                description: ev.frontmatter.description,
                start: parseDateTime(ev.frontmatter.date, ev.frontmatter.start),
                end: parseDateTime(ev.frontmatter.date, ev.frontmatter.end),
                url: parseAstroURL(ev.file)
            }
        });
    return mappedEvents;
}

export {mapEvents};