import { Container } from 'react-bootstrap';
import './ErrorAPI.css'
import errorImage from '../../images/errorImage.png';

const ErrorAPI = () => {
    return ( 
        <Container
            className="error-container"
        >
            <p className="error-text">Estamos presentando problemas con el servidor, intenta más tarde</p>
            <img className="error-img" src={errorImage} alt="Error"/>
            
        </Container>
    );
}
 
export default ErrorAPI;