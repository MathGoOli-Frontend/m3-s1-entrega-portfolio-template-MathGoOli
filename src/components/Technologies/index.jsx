import style from "./style.module.css"
import {TecnologyCard} from "../../fragments/TecnologyCard/index.jsx"
import {technologies} from "../../data/technologies.js"

export const Technologies = () => {
    return(
        <section id="stack" className={style.stack}>
            <h2 className="title-2">Tecnologias</h2>
            <ul className={style.deck}>
                <TecnologyCard tech={technologies[0]}/>
                <TecnologyCard tech={technologies[1]}/>
                <TecnologyCard tech={technologies[2]}/>
                <TecnologyCard tech={technologies[3]}/>
            </ul>

        </section>
    )
}