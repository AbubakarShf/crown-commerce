import React from "react"
import CategoryItem from "../category-item/CategoryItem"
import "./directory.scss"
const Directory = ({ categories }) => {
  return (
    <React.Fragment>
      <div className='directory-container'>
        {categories.map((category) => {
          return <CategoryItem key={category.id} {...category} />
        })}
      </div>
    </React.Fragment>
  )
}

export default Directory
