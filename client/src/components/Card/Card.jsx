import propTypes from 'prop-types';
import './Card.css';

function Card({children}){
    return<div className="card">{children}</div>
}

Card.propTypes = {
    children: propTypes.node.isRequired
}

export default Card;