
import Card from "../UI/Card"
import { experienceData } from "../data/data"

// import Shape............
import Shape from '../assets/gradientShape.svg'

export default function Experience() {
  return (
    <section id='Experience'>
      <div className="container experience-container">
        <h3>Experience</h3>

        <div className="experience-cards">
          {
            experienceData.map(({ icon, cardInfo, cardLink, cardName }, index) => {
              return (
                <Card CardIcon={icon} CardName={cardName} CardInfo={cardInfo} CardLink={cardLink} key={index} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

