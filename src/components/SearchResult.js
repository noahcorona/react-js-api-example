import ModalImage from "react-modal-image";
import 'bootstrap/dist/css/bootstrap.css';

const SearchResult = (props) => {
    const thumbnailUri = "https://www.artic.edu/iiif/2/" + props.imageID + "/full/400,/0/default.jpg";
    const fullSizeUri = "https://www.artic.edu/iiif/2/" + props.imageID + "/full/843,/0/default.jpg";

    return(
        <div className="search-result-container">
            <div className="search-result-info-area">
                <h2>{props.title}</h2>
                {props.description ?
                    <div dangerouslySetInnerHTML={{__html: props.description}}/> :
                    <p>A description has not yet been provided</p>
                }
            </div>
            <ModalImage
                small={thumbnailUri}
                large={fullSizeUri}
                alt={props.title}
            />
        </div>
    )
}

export default SearchResult;
