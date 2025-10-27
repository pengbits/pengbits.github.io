// psuedo-markdown helpers

const markdown_regex = {
  'link'      : /\[([^\]]+)\]\((.+)\)/g,
  'bold'      : /\*\*([^*]+)\*\*/g,
  'italic'    : /\*([^*]+)\*/g,
}

export const applyLink = (text:string) => (
  text.replace(markdown_regex.link, (match, url, label) => {
    return `<a href="${url}" target="_blank">${label}</a>` 
  })
)

export const applyItalic = (text:string) => (
  text.replace(markdown_regex.italic, (match, i) => {
    return `<em>${i}</em>` 
  })
)

export const applyBold = (text:string) => (
  text.replace(markdown_regex.bold, (match, b) => {
    return `<strong>${b}</strong>` 
  })
)

export const applyFormatting = (text:string) => {
  return applyItalic(applyBold(applyLink(text)))
}