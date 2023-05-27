import { Children } from "react"
import style from "./style.module.css"

export const AncorButton = ({children, url}) =>{
    return (
    <a className={style.btn} href={url}>
        {children}
    </a>
    )
}