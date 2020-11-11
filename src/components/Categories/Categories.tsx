import { link } from 'fs';
import React from 'react'

const Categories = (props:any) => {

const categoriesList = props.items.map((name:string, index:number) => (<li key={`${name}_${index}`}>{name}</li>))

    return (
        <div className="categories">
            <ul>
            <li className="active">Все</li>
            {categoriesList}
            </ul>
        </div>
    )
}

export default Categories
