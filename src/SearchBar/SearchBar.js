import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
import { Row, Col, Button , Card } from 'react-bootstrap';
import {usersList , emptyList} from './DummyData'



function emptySearchCheck(usersList , searchTerm)
{
    let emptyCheck = false
    usersList.filter((data) => {
        if(data.name.toLowerCase()
        .includes(searchTerm.toLowerCase()) 
        || 
        data.id.toLowerCase()
        .includes(searchTerm.toLowerCase())  
        || 
        data.address.toLowerCase()
        .includes(searchTerm.toLowerCase()))
        {
            emptyCheck = true
        }
    })
    return emptyCheck
}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [opsToRender, setOpsToRender] = useState([]);


    useEffect(() => {
        if (usersList.length && emptySearchCheck(usersList, searchTerm)) {
            setOpsToRender(
                usersList
                    .filter((data) => {
                        if (searchTerm == null) return data;
                        else if (
                            data.id
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) 
                            ||
                            data.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) 
                            ||
                            data.address
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) 
                        ) {
                            return data;
                        }
                    })
                    .map((data, index) => {
                        return (
                            <Col key={index}>
                                <div>
                                    <Button
                                        size="sm"
                                        id="custom-margin"
                                        className={
                                            'display-texts'
                                        }
                                        block
                                    >
                                        {data.id}
                                        <br/>
                                        <br/>
                                       {data.name}
                                       <br/>
                                       <br/>
                                       {data.address}
                                    </Button>
                                </div>
                            </Col>
                        );
                    })
            );
        }
        else
        {
            setOpsToRender(
                emptyList.map((data , index) => {
                    return (
                        <Col key={index}>
                        <div
                        >
                                <Button
                                    size="sm"
                                    id="custom-margin"
                                    className={
                                        'display-texts'
                                    }
                                    block
                                >
                                {data.name}
                                </Button>
                            </div>
                        </Col>
                    )
                })
            )
        }
    }, [usersList, searchTerm]);

    return (
        <>
            <div className="operation-cards">
                <Card>
                    <Row className="card-header">
                        <Col sm={4} xs={4} className="panel-heading">
                            <Row>
                                <strong>Search Bar</strong>
                            </Row>
                        </Col>
                        <Col sm={8} xs={8}>
                            <div className="panel-controls">
                                <div className="search-in-operations ml-auto">
                                    <form className="form-inline">
                                        <input
                                            id="search-box-operations"
                                            type="text"
                                            className="search-box-operations rounded"
                                            placeholder="Search users by ID and name and address..."
                                            name="q"
                                            value={searchTerm}
                                            autoComplete="off"
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="operations-panel-menu custom-scrollbars">
                        <div id="operations">
                            <Row className="no-gutters">{opsToRender}</Row>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default SearchBar;
