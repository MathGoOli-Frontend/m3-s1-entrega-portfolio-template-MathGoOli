import style from "./style.module.css"


export const About = () =>{
    return(
        <section className={style.deck}>
            <div className={style.card}>
            <h2 className="title-2">Sobre mim</h2>
            </div>
            <div className={style.card}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
                </p>

            </div>
        
        </section>
    )
}