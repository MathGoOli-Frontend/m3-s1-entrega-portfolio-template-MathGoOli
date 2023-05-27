import style from "./style.module.css"
import {AncorButton} from "../../fragments/AncorButton/index.jsx"
import img from "../../assets/banner-img.png"

export const Welcome = () =>{
    return(
        <section id="welcome" className={style.welcome}>
            <div className={style.card}>
               <h2 className={style.autor__name}>JOSEDASILVA</h2>
               <h1 className="title-1">Bem Vindo ao meu portfólio</h1>
               <p>Uma Frase interessante sobre mim</p>
               <AncorButton url="#">Saiba Mais</AncorButton>
            </div>
            <div className={style.card}>
                <img className={style.welcome__image} src={img} alt="" />
            </div>
        </section>
    )
}