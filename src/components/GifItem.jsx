import PropTypes from 'prop-types';

export const GiftItem = ({ id, title, url }) =>{

    return(
        <div className="card">
            <img src={ url } alt= { title } />
            <p> {title} </p>
          

        </div>
    )
}

GiftItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

// GiftItem.defaultProps = {
//     tittle: "No hay titulo",
//     url: "No encontrado",
    
// }