import React, { useEffect, useState } from 'react'
import Test from './Test';


function TestContainer() {

    const [univ, setUniv] = useState([]);

    useEffect(() => {
        
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://universities.hipolabs.com/search?country=United+States&cant=100", requestOptions)
            .then(response => response.json())
            .then(result => setUniv(result))
            .catch(error => console.log('error', error));


        return () => {
            
        }
  }, [])
  
  
  
    return (
    <>
        <Test univ={univ}/>
    </>
  )
}

export default TestContainer