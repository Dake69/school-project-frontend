import React from 'react';
import '../../styles/navigationBar.css'
import {navBar} from "../../constants/navigationBtns";
import {NavLink} from "react-router-dom";




const NavBar = () => {

    const handleClick = (e:any) => {
        const id = e.currentTarget.id
        const nextID = Number(id) + 1
        navBar.map((item) => {
            item.display = 'none'
        })
        navBar.filter(item =>  item.id > id && item.id < nextID).map((item) => {
            item.display = 'flex'
        })
    }

    const navButtons = navBar.map((item) => {

        if(Number.isInteger(item.id)){
            return (
                <NavLink className='nav_button section'
                     to={item.link}
                     id={item.id.toString()}
                     onClick={handleClick}>{item.label}
                </NavLink>
            )}
        else {
            return (
                    <NavLink className='nav_button subSection' to={item.link} id={item.id.toString()}
                            style={{display: item.display}}>
                        {item.label}
                    </NavLink>
            )}
            // style={{display: isActive ? 'flex' : 'none'}}
    })
    return (
        <section className='nav_container'>
            <div className='nav_categories'>
                <>
                    {navButtons}
                </>
            </div>

        </section>
    )
}

export default NavBar;