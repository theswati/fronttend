//Spinners can be used to show the loading state in your projects.
import Spinner from "react-bootstrap/Spinner"

function LoadingBox(){
    return(
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading....</span>
        </Spinner>
        )
}

export default LoadingBox;

