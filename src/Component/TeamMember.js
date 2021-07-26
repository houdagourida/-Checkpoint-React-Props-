import React from 'react'

const TeamMember = (props) => {
    return (
        <div className="col-md-4 border">
            <div className="card">
                <div className="card-header">
                <img src={props.p.img} alt={props.media} /> 
                  <div className="card-body">
                  
                    <h1>{props.p.name}</h1>
                    <h2>{props.p.profession}</h2>
                    <h3>{props.p.bio}</h3>
                  </div>
                </div>
            </div>   
               
       </div>
    )
}

export default TeamMember
