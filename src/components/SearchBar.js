import {Button, Form, InputGroup} from "react-bootstrap";
import {useState, useEffect} from "react";
import '../App.css';

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');

    const onSearchTextChange = event => {
        event.preventDefault();
        setSearchText(event.target.value);
    };

    const onSubmitQuery = event => {
        event.preventDefault();
        props.setActiveSearch(searchText);
        props.setActivePage(1);
    }

    return (
        <form onSubmit={onSubmitQuery}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search art by name, type, keyword, etc."
                    aria-describedby="basic-addon2"
                    aria-label="Search query terms"
                    value={searchText || ''}
                    onChange={onSearchTextChange}
                />
                <Button variant="success" id="button-addon2" type="submit">
                    Search
                </Button>
            </InputGroup>
        </form>
    )
}

export default SearchBar;
