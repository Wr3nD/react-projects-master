import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading,data} = useFetch()

  return <main>
    <div className="section-title">
      <h1>{loading? "loading.." : "pagintion"}</h1>
      <div className="underline"></div>
    </div>
    <section className='followers'>
      <div className="container">
        {data.map((person)=>{
          
         return ( <Follower key={person.id} {...person}/>
            )
        })}
      </div>
    </section>
  </main>
}

export default App
