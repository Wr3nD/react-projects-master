import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =["all",...new Set(items.map((item)=> item.category))] 
console.log(allCategories)

function App() {
  const [item,setItem] = useState(items)
  const [categories,setCategories] = useState(allCategories)
  
  const filterItems = (category) =>{
    if(category === "all"){
      setItem(items)
      return
    }
    const newItems = items.filter((item)=> item.category === category

    )
    setItem(newItems)
  }

  return ( <main>

    <section className='menu section'>
    <div className="title">
      <h2>our Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={item}/>
    
  
  </section>
  </main>
  )
}

export default App;
