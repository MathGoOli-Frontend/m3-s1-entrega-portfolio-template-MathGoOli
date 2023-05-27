import style from "./style.module.css"

export const TecnologyCard = (tech) => {
    return(
        <li className={style.card}>
            <img src={tech.tech.img} alt={tech.tech.name} />
            <h3 className="title-3">{tech.tech.name}</h3>
        </li>
    )
}