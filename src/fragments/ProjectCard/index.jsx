import style from "./style.module.css"
import gitImg from "../../assets/git-icon.png"

export const ProjectCard = (props) => {
    
    return(
        <li className={style.card}>           
            <h3 className="title-3">{props.props.name}</h3>
            <p>{props.props.description}</p>
            
            <img src={gitImg} className={style.icon} alt="" />

            <a href="">Saiba mais</a>            
        </li>
    )
}