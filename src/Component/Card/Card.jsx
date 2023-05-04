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
          <button class="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
              <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
            </svg>

          </button>
        </div>
      </article>
    </div>
  )
}

export default Card;