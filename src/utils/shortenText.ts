export const shortenText = (text: string, max = 80) => {
    if (!text) return "No description found.";
    return text.length > max ? text.slice(0, max).trim() + "..." : text;
}
