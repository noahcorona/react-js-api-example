import SearchResult from "./SearchResult";
import Pagination from "react-js-pagination";
import Gallery from 'react-grid-gallery';
import {useState} from "react";
import '../App.css'
import {Button} from "react-bootstrap";

const Results = (props) => {
    const lowestPage = (props.page - 1) * 10 + 1;
    const highestPage = (props.page) * 10;
    const {data, pagination} = props.data;

    console.log(props.data);

    const images = data.map(item => ({
        src: "https://www.artic.edu/iiif/2/" + item.image_id  + "/full/843,/0/default.jpg",
        thumbnail: "https://www.artic.edu/iiif/2/" + item.image_id + "/full/400,/0/default.jpg",
        caption: item.description
    }))


    return (
        <>
            <p className="dim-text">Showing results {lowestPage} through {highestPage > pagination.total ? pagination.total : highestPage} of {pagination.total > 100 ? 100 : pagination.total} results for "{props.activeSearch}"</p>
            {props.galleryMode === '2' && data && data.map(item => {
                return(
                    <SearchResult key={item.image_id} title={item.title} description={item.description} imageID={item.image_id} />
                )
            })}
            <div className="d-flex align-items-center justify-content-center text-center">
                <Pagination
                    activePage={props.page}
                    totalItemsCount={pagination.total > 100 ? 100 : pagination.total}
                    itemsCountPerPage={10}
                    onChange={props.setPage}
                    itemClass="page-item"
                    linkClass="page-link"
                    innerClass="pagination"
                />
            </div>
            {props.galleryMode === '1' && <Gallery images={images}/>}
        </>
    )
}

export default Results;
