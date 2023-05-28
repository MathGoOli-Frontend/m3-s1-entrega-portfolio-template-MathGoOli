import style from "./style.module.css"
import logo from  "../../assets/portfolio.svg"

import {AncorButton} from "../../fragments/AncorButton/index.jsx"

export const Header = () => {
    
    return(
        <header className={style.header__container}>
            <img className={style.header__logo} src={logo} alt="" />
            <nav>
                <ul className={style.list__container}>
                    <li className={style.list__item}><a href="#about" className={style["list__item-a"]}>Sobre</a></li>
                    <li className={style.list__item}><a href="#stack" className={style["list__item-a"]}>Stack</a></li>
                    <li className={style.list__item}><a href="#projects" className={style["list__item-a"]}>Projetos</a></li>
                </ul>
            </nav>
            <AncorButton url="#contact" >Contato</AncorButton>
        </header>
    )
}