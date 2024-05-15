import "../UI/UserI.css";

export default function Card({ CardIcon, CardName, CardNameSecond, CardInfo, CardLink }) {
  return (
    <article className='card'>
      <div className="card-icon">
        <img src={CardIcon} alt="" />
      </div>
      <div className="card-content">
        <h4>{CardName}</h4>
        <h5>{CardNameSecond}</h5>
        <small style={{ paddingTop: "5px" }}>{CardInfo}</small>
        <a href={CardLink} className='card-btn'>Learn More</a>
      </div>
    </article>
  );
}
