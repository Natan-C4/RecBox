import React, {useState , useRef} from 'react'
import {Card, Button , Popover , OverlayTrigger} from 'react-bootstrap'

function RecipleItem(props) {

   if(props.hits == undefined){
       return(
           <div className='container mr-2 '>
              <h1> Let`s search some food!</h1>
           </div>
       )
   }
   else{
    
    return (<div className='container'>
        <div className='row'>{ props.hits !== undefined && props.hits.map(hit =>
            <Card style={{ width: '18rem' }} className='col-3 mr-3'>
                <Card.Img variant="top" src={hit.recipe.image} />
                <Card.Body>
                    <Card.Title>{hit.recipe.label}</Card.Title>
                    <Card.Text >
                    Calories:{hit.recipe.calories}

                    </Card.Text>
                    <Button variant="primary" href={hit.recipe.url}>Recipe</Button>

                    <OverlayTrigger
                        trigger="click"
                        key='right'
                        placement='right'
                        overlay={
                            <Popover id={`popover-positioned-right`}>
                            <Popover.Title as="h3">{`List of ingredients`}</Popover.Title>
                            <Popover.Content>
                                <ul>
                                {hit.recipe.ingredientLines.map(ing => <li>{ing}</li>)}
                                </ul>
                            </Popover.Content>
                            </Popover>
                        }
                        >
                        <Button variant="secondary">Ingredients</Button>
                     </OverlayTrigger>
                    
                </Card.Body>
            </Card>
        )
            }
        </div>
        </div>
    )
        }
}

export default RecipleItem


// {props.hits !== undefined && props.hits.map(rec => <h1>{rec.recipe.label}</h1>)}