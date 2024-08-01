import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewCompnayEmployee = () => {
  const[data, changeData] = useState([])
   
  const fetchData=()=>{
    axios.get("https://testapi.devtoolsdaily.com/users").then(
      (response)=>{
      changeData(response.data)
      }
    )
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            {data.map(
              (value,i)=>{
                return <div className="col col-3 col-sm-3 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card" >
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{value.id}</li>
                    <li class="list-group-item">{value.firstName}</li>
                    <li class="list-group-item">{value.lastName}</li>
                    <li class="list-group-item">{value.companyId}</li>
                    <li class="list-group-item">{value.countryCode}</li>
  
                  </ul>
                </div>
              </div>
  
              }
            )}
</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewCompnayEmployee