import React from 'react'

export default function FoodList( {catFoods}) {


  return (
    <>
    
      <div>
        {catFoods.map((oneFood) => (
            <div key={oneFood.id}>
            <p>{oneFood.food_name}</p>
            <p>{oneFood.brand}</p>
            <p>{oneFood.status}</p>
            <p>{oneFood.notes}</p>
          </div>
        ))}
      </div>
        </>
  )
}

