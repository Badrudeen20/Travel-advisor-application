import React,{ createRef } from 'react'
import Filter from '../filter/Filter'
import PlaceDetail from '../placeDetail/PlaceDetail'
import Skeleton from '../skeleton/Skeleton'

import './style.scss'
const List = ({places,childClicked,selectRating,setSelectRating,selectType,setSelectType,isLoading}) => {
    const [type]  = React.useState(['hotels','restaurants','attractions'])
    const [rating] = React.useState([2,3,4])
    const [elRefs,setElRefs] = React.useState([])
    console.log(places)
    
    React.useEffect(()=>{
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    },[places])

    return (
        <div id="list">
            <div className="heading">
                <h2>Food and Dining</h2>
                <div className="filter">
                    <Filter
                      name={selectType}
                      select={setSelectType}
                      option={type}
                    />
                    <Filter 
                     name={selectRating ? selectRating:'Select All' } 
                     select={setSelectRating}
                     option={rating}
                    />
                </div>
            </div>
            {isLoading ? (
            <div className="list">
                <li>
                    <Skeleton />
                </li>
                <li>
                    <Skeleton />
                </li>
                <li>
                    <Skeleton />
                </li>
            </div>
            ) : (
            <>

               <ul className="list">
                    {places?.map((place,i)=>(
                        <li ref={elRefs[i]} key={i}>
                            <PlaceDetail
                                selected={Number(childClicked) === i}
                                refProp={elRefs[i]}
                                place={place} 
                            />
                        </li>
                    ))}
                </ul>

            </>
            )}
           
        </div>
    )
}

export default List
