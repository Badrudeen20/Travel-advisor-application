import React from 'react'
import { GetPlaces } from './component/api/GetPlaces'
//import {places} from './database/Data'
import List from './component/list/List'
import Map from './component/map/Map'
import './App.scss'
import Nav from './component/nav/Nav'
const App = () => {
  const [places,setPlaces] = React.useState([])
  const [filterPlace,setFilterplace] = React.useState([])
  const [coordinates,setCoordinates] = React.useState({})
  const [bounds,setBounds] = React.useState({})
 const  [childClicked,setChildClicked] = React.useState(null)
 const [selectType, setSelectType] = React.useState('restaurants');
 const [selectRating, setSelectRating] = React.useState('');
 const [isLoading, setIsLoading] = React.useState(false);
  React.useState(()=>{
    setCoordinates({lat:23.1815,lng:79.9864})
  },[])

  React.useEffect(()=>{
  const filterPlace = places.filter((place)=>place.rating > selectRating)
  setFilterplace(filterPlace) 

},[selectRating])

  React.useEffect(()=>{
     if(bounds.sw && bounds.ne){
        setIsLoading(true);
         GetPlaces(selectType,bounds.sw,bounds.ne).then((data)=>{
         setPlaces(data?.filter((place)=> place.name && place.price))
         setFilterplace([]);
         setSelectRating('');
       setIsLoading(false);
      })

     }
  },[selectType,bounds])

  return (
   <>
     <Nav />
     <div className="grid">
       <List
        places={filterPlace.length ? filterPlace : places}
        childClicked={childClicked}
        selectType={selectType}
        setSelectType={setSelectType}
        selectRating={selectRating}
        setSelectRating={setSelectRating}
        isLoading={isLoading}
      />
     <Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={filterPlace.length ? filterPlace : places}
        setChildClicked={setChildClicked}
      />
     </div>
   </>
  )
}

export default App

