import style from "./style.module.css"
import {projects} from "../../data/projects.js"
import {ProjectCard} from "../../fragments/ProjectCard/index.jsx"

export const Projects = () => {
    return (
        <section id="projects" className={style.projects} >
            <h2 className="title-2">Projetos</h2>
            <div>
                <ul className={style.deck}>
                    <ProjectCard props={projects[0]}></ProjectCard>
                    <ProjectCard props={projects[1]}></ProjectCard>
                    <ProjectCard props={projects[2]}></ProjectCard>
                    <ProjectCard props={projects[3]}></ProjectCard>
                </ul>
            </div>
        </section>
    )
} 