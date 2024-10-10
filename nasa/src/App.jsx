import { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './index.css'

function App() {

  const [data, setData] = useState(null)

  const [showModal, setShowModal] = useState(false)
  
  const handleToogleModal = () => {
    setShowModal(prevShowModal => !prevShowModal); // En güncel değeri almak için
  };
  
    
    useEffect(() => {
      async function fetchAPIData(){
      const API_KEY = import.meta.env.API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod?api_key=4MliqZblizYF02ajgiALmk9Njso2LWhq2hOK2LRb'


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try{

        const response = await fetch(url)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log(apiData)
        console.log('Fetched from API today')

      } catch(err){
        console.log(err.message)
      }

    }
    fetchAPIData()
  }, [])

  return (
    <>
     {data && (
       <Main data = {data} /> ) }
     {showModal && (
      <Sidebar  data = {data} handleToogleModal = {handleToogleModal}/>
     )}
     {data && (
      <Footer data = {data}  handleToogleModal = {handleToogleModal}/>)}

    </>
  )
}

export default App
