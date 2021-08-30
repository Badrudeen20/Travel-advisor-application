import React from 'react'
import './style.scss'
const Filter = ({name,option,select}) => {
    const [toggle,setToggle] = React.useState(false)
    
    return (
        <>
            <ul className={`select ${toggle ? 'active':''}`} onClick={()=> setToggle(!toggle)}>
                <li className="item">
                    <span className="filter_item">{typeof name != "string" ? `Above ${name}.0` : name}</span>
                    <button >
                        <span className="icon">
                            <span className={`rec rec1 ${toggle ? 'open':''}`}></span>
                            <span className={`rec rec2 ${toggle ? 'open':''}`}></span>
                        </span>
                    </button>
                    <ul className="option">
                        {option.map((data,i)=>(
                            <li key={i} onClick={()=>select(data)}>{typeof data != "string" ? `Above ${data}.0`:data}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Filter
