// import Projects data..............
import { projectsData } from "../data/data"

// import React Icon...............
import { LuMousePointerClick } from "react-icons/lu";

export default function Project() {
  return (
    <section id='Projects'>
      <div className="container projects-container">
        <h3>Example Projects</h3>

        <div className="projects-content">
          {
            projectsData.map(({ img, des, projectLink, name }, index) => {
              return (
                <article className="project-card" key={index}>
                  <img src={img} alt="" />
                  <h4>{name}</h4>
                  <small>{des}</small>
                  <a href={projectLink}>Open<LuMousePointerClick /></a>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

