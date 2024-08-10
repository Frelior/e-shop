import "./Button.scss"
export default function Button({title}: {title: string}) {
  return <button className="button">{title}</button>
}
