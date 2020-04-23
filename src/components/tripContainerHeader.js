import React from 'react'
import { useHistory } from 'react-router'
import { Collection, CollectionItem} from 'react-materialize';
import { Navbar } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function TripContainerHeader({title}) {
    const history = useHistory()

    const handelClick = ()=>{
        history.push('/');
    }

    return (
        <>
            <Collection style={{margin: 0}}>
                <CollectionItem>
                    <IconButton onClick={handelClick}> <HighlightOffIcon/> </IconButton>
                     <Navbar.Brand className="ml-5">{title ? title : "Title"}</Navbar.Brand>
                </CollectionItem>
            </Collection>
        </>
    )
}

export default TripContainerHeader
