import React from "react"
import "./CategoryItem.scss"

const CategoryItem = ({id,title,imageUrl}) => {
  return (
    <React.Fragment>
      <div key={id} className='category-container'>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className='background-image'
        />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shope Now</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CategoryItem
