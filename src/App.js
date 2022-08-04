import './App.css';
import Results from "./components/Results";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./components/SearchBar";
import axios from "axios";
import {Button, ButtonGroup, ToggleButton} from "react-bootstrap";

function App() {
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [searchResponse, setSearchResponse] = useState();
    const [galleryMode, setGalleryMode] = useState('1');

    const apiUrl = 'https://api.artic.edu/api/v1/artworks/search';

    useEffect(() => {
        window.scrollTo(0, 0)

        axios.get(apiUrl, {
            method: 'get',
            responseType: 'json',
            params: {
                q: searchText,
                page: page,
                fields: 'id,title,description,image_id',
            }
        }).then(response => {
                if(response.status === 200) {
                    console.log('JSON response:', response)
                    setSearchResponse(response.data);
                } else {
                    console.log('The response was an error:', response)
                }
            }
        )
    }, [searchText, page])

    const radios = [
        { name: 'Gallery View', value: '1' },
        { name: 'Reading View', value: '2' },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Art Institute of Chicago Search</h1>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="outline-light"
                            name="radio"
                            value={radio.value}
                            checked={galleryMode === radio.value}
                            onChange={(e) => setGalleryMode(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </header>
            <div className="Body">
                <SearchBar setActiveSearch={setSearchText}
                           setActivePage={setPage} />
                {
                    searchText && <Results galleryMode={galleryMode}
                                           activeSearch={searchText}
                                           page={page}
                                           setPage={setPage}
                                           data={searchResponse} />
                }
            </div>
        </div>
    );
}

export default App;
