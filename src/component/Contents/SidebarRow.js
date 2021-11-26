import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected, Icon,title}) {
    

    return (
        <div name="aaa" className={`sidebarRow  ${selected && "selected"}`} >

            <Icon name="sssd" className="sidebarRow_icon" />
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    )
}

export default SidebarRow
