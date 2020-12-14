import React from "react";
import './Menu.css'

class Menu extends React.Component {

    render() {
        return (
            <div className={'menu-container'}>
                <ul className={'menu-ul'}>
                    <li className={'menu-list-item'} onClick={() => this.props.onClick(0)}>
                        خانه
                    </li>
                    <li className={'menu-list-item'} onClick={() => this.props.onClick(1)}>
                        ثبت خرید
                    </li>
                    <li className={'menu-list-item'} onClick={() => this.props.onClick(2)}>
                        گزارش
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu