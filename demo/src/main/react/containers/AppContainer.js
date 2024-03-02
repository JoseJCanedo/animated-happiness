import React, {useState, useEffect} from 'react'
import Nav from '../components/nav/Nav'
import axios from 'axios';


const AppContainer = (props) => {
    const [count2, setCount2] = useState(0);
    const [xkcdCurrent, setXkcdCurrent] = useState({});
    const [xkcdPast, setXkcdPast] = useState(null);
    const [userDefComicNum, setUserDefComicNum] = useState('')

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

    const fetchPastComic = (pastNum) => {
        // no matter what we have a default
        const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
        // did user define a number ? user number : random comic num between 0 and defaultNum
        const count = pastNum || userDefComicNum ? pastNum || userDefComicNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/xkcd/past/${count}`)
          .then(function (response) {
            setXkcdPast(response.data)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    return(
        <>
            <Nav />
            <h1>Hello, world!</h1>

        </>
    )
}

export default AppContainer