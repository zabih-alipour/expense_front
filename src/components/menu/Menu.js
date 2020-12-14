import React from "react";
import './Menu.css'

function Menu() {
    return (
        <div className={'menu-container'}>
            <ul className={'menu-ul'}>
                <li className={'menu-list-item'}>
                    <a className={'active'}
                       href="/">
                        خانه
                    </a>
                </li>
                <li className={'menu-list-item'}>
                    <a className={'active'}
                       href="/">
                        ثبت خرید
                    </a>
                </li>
                <li className={'menu-list-item'}>
                    <a className={'active'}
                       href="/">
                        گزارش
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Menu