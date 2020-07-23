import React ,{useState , useEffect} from 'react'
import { Form , Button , FormControl} from 'react-bootstrap'
import searchIcon from '../assets/search-black-18dp.svg'
import {useSelector , useDispatch} from 'react-redux'
import loadData from '../store/search/SearchAction'

function Search() {

    
    const [query,setQuery] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(loadData(query))
        setQuery('')
    }

    return (
        <>
        <Form inline 
        onSubmit={onSubmit} 
         >
        <FormControl
         type='text'
         placeholder='Search reciple'
         className='mr-sm-2'
         value={query}
         onChange={(e) => {setQuery(e.target.value)} }
         
         />
         <Button variant='light' type='submit' ><img alt='search' src={searchIcon}></img></Button>
    </Form>
    
    </>
    )
}

export default Search
