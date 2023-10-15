import React from 'react'

const Categories = ({filterItems, Categories}) => {
  return 
  <div className = 'Categories'
  <div className = 'row'>
      <div className = 'col-8 mx-auto'
      <div>
          categories.map((category)=>{
              return(
                  <button onClick={() => filterItems(category)} > {category} </button>
              )
          }
      </div>
  </div>
  </div>
}

export default Categories
