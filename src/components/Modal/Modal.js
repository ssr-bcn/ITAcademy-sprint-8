import ReactDOM from 'react-dom';
import { useStarshipsIMGEndPoint } from '../../application/hooks/useSWApi';
import StyledModal from "./Modal.styles";
import Loader from '../Loader/Loader';

const Modal = ({ data, setModal }) => {
  const section = data[0].title ? 'films' : 'characters';
  const img = useStarshipsIMGEndPoint(data[0].id, section);

  let date;
  if (data[0].release_date){
    date = new Date(data[0].release_date).toLocaleDateString('en-UK');
  }

  const handleClick = e => {
    e.stopPropagation();

    setModal(false);
  }

  return ReactDOM.createPortal(
    <StyledModal>
      <div>
        <button className="close" onClick={handleClick}>X</button>
        {
          data[0].title &&
            <>
              <figure>
              {
                img && <img src={img} alt={data[0].title} />
              }
              {
                !img && <Loader bg="#282727" />
              }
              </figure>
              <article>
                <h3>{data[0].title}</h3>
                <p>{data[0].opening_crawl}</p>
                <ul>
                  <li><span>Episode:</span> {data[0].episode_id}</li>
                  <li><span>Release date:</span> {date}</li>
                  <li><span>Director:</span> {data[0].director}</li>
                  <li><span>Producer:</span> {data[0].producer}</li>
                </ul>
              </article>
            </>
        }
        {
          data[0].name &&
            <>
              <figure>
              {
                img && <img src={img} alt={data[0].name} />
              }
              {
                !img && <Loader bg="#282727" />
              }
              </figure>
              <article>
                <h3>{data[0].name}</h3>
                <ul>
                  <li><span>Height:</span> {data[0].height}</li>
                  <li><span>Mass:</span> {data[0].mass}</li>
                  <li><span>Hair color:</span> {data[0].hair_color}</li>
                  <li><span>Skin color:</span> {data[0].skin_color}</li>
                  <li><span>Eye color:</span> {data[0].eye_color}</li>
                  <li><span>Birth year:</span> {data[0].birth_year}</li>
                  <li><span>Gender:</span> {data[0].gender}</li>
                </ul>
              </article>
            </>
        }
      </div>
    </StyledModal>,
    document.body
  );
}

export default Modal;
