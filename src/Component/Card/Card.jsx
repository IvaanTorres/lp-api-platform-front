import './Card.css'

const Card = (props) => {

  return (
    <div class="card-list">
      <article class="card">
        <figure class="card-image">
          <img src={props.data.imagePath} />
        </figure>
        <div class="card-header">
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <a href="#">{props.data.name}</a>
            <p>
              {props.data.types?.map((t, i) => (
                <span key={i}>
                  {t.name}
                  {i < props.data.types.length - 1 && ', '}
                </span>
              ))}
            </p>
            <p>
              {props.data.abilities?.map((t, i) => (
                <span key={i}>
                  {t.name}
                  {i < props.data.abilities.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card;