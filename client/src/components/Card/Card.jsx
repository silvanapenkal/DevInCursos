import PropTypes from "prop-types";
import "./Card.css";
import { useNavigate } from 'react-router-dom';
import clockImg from "../../assets/clock.png";

function CourseCard({ id, imageUrl, name, category, description, duration }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/${id}`);
  }

  return (
    <div className="cardContainer">
      <div className="cardHeader">
        {imageUrl && <img src={imageUrl} alt={`Imagem curso ${name}`} />}
        <h3>{name}</h3>
      </div>
      <div className="courseCardDuration">
        <img src={clockImg} alt="Ícone de relógio" />
          <p>{duration}h</p>
          <p>{category}</p>
          <p>{description}</p>
      </div>
      <button className="courseCardActionButton" onClick={handleNavigate}>Ver detalhes</button>
    </div>
  );
}

CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

export default CourseCard;