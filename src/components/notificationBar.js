import React from 'react'
import { Icon } from 'react-materialize';

function NotificationBar() {
    const handleClick = () => {
        document.documentElement.requestFullscreen()
    }

    return (
        <div className='notification-bar'>
            <div className="d-flex justify-content-end">
                <span style={{cursor: "pointer"}} onClick={handleClick}>
                    <Icon>zoom_out_map</Icon>
                </span>
            </div>
        </div>
    )
}

export default NotificationBar
