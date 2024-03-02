
type ButtonProps = {
  text : string,
  link ?: string,
  className ?: string
}
export default function Button(props: ButtonProps){
  return(
    <a href={props.link}><button className={props.className}>{props.text}</button></a>
  )
}