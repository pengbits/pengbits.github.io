type VideoProps = {
  aspect: string,
  src: string
}
interface AspectRatio {
  [key: string]: string
}
const aspect_ratios:AspectRatio = {
  landscape: '56.25%',
  tallboy: '215.98360655737702%'
}

export const Video = ({aspect,src}:VideoProps) => {
  const paddingBottom:string = aspect_ratios[aspect]
  const srcWithParams = `${src}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`

  return (<div style={{'position': 'relative', 'paddingBottom': paddingBottom, 'height': '0'}}>
  <iframe src={srcWithParams} frameBorder="0" allowFullScreen 
    style={{'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%'}}
  ></iframe>
</div>)
}