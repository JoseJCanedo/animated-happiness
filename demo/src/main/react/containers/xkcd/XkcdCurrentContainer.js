import React, {useState, useEffect} from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios';


const XkcdCurrentContainer = () => {
    const [xkcdCurrent, setXkcdCurrent] = useState({});

    useEffect(()=>{
        axios.get('/xkcd/current')
          .then(function (response) {
            setXkcdCurrent(response.data)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    },[])

    return(
        <>

            <div>
                <h1>{xkcdCurrent.title}</h1>
            </div>
            <div>
                <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Xkcd image for today"} />
            </div>
            <div>
                <p>
                    {xkcdCurrent.transcript}
                </p>
            </div>
        </>
    )
}

export default XkcdCurrentContainer