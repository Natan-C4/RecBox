import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import RecipleItem from './RecipleItem'
import {Card, Button} from 'react-bootstrap'


const RecipleList = () => {
 

  const reciples = useSelector((state) => state.search.data);
   const data = {}
   Object.assign(data,reciples)
   const hits = data.hits
 
   console.log(hits)

    return(
        <div>
          <RecipleItem hits={hits}/>
        </div>
    )
}

{/* <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul> */}
  
export default RecipleList
