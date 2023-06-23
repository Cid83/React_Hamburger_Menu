import React from 'react'
import {MenuList} from '../helpers/MenuList'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>OUR MENU</h1>
        <div className="menuList">
            {MenuList.map((menuItem)=>{
                return <div className='menuItem'> 
                     <div> <img src={menuItem.image}  /></div>
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.price} $</p>
                

                </div>
            })}
        </div>
    </div>
  )
}

export default Menu