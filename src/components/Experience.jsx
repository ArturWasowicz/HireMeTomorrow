import Card from "../UI/Card"
import { experienceData } from "../data/data"

export default function Experience() {
  return (
    <section id='Experience'>
      <div className="container experience-container">
        <h3>Experience</h3>

        <div className="experience-cards">
          {
            experienceData.map(({ icon, cardInfo, cardLink, cardName, cardNameSecond }, index) => {
              return (
                <Card
                  CardIcon={icon}
                  CardName={cardName}
                  CardNameSecond={cardNameSecond}
                  CardInfo={cardInfo}
                  CardLink={cardLink}
                  key={index}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
