import style from "./style.module.css"
import whatsappImg from "../../assets/whatsapp-icon.png"
import linkedinImg from "../../assets/linkedin-icon.png"
import githubImg from "../../assets/github-icon.png"

export const Contact = () => {
    return(
        <section id="contact" className={style.contact__section}>
            <div className={style.contact}>
                <div className={style.contact_card}>
                    <h2 className="title-2">Contato</h2>
                    <div className={style.contactIcons}>
                        <img src={whatsappImg} alt="" />
                        <img src={linkedinImg} alt="" />
                        <img src={githubImg} alt="" />
                    </div>
                </div>
                
            </div>
            <div className={[style.contact_right]}>
                <p>Todos os direitos reservados - José da Silva</p>
            </div>
        </section>
    )
}