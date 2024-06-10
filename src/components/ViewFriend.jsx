import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

    const ViewFriend=()=>{
        const[data,changeData]=useState([])
        const fetchData =()=>{
            console.log("hello")
            axios.get("https://friendsapi-re5a.onrender.com/view").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.data)
                }
            ).finally()


        }
    useEffect(()=>{
        fetchData()},[])
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <table class="table" className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend Name</th>
                                    <th scope="col">friend Nickname</th>
                                    <th scope="col">Describe your friend</th>
                                    <th scope="col">_v</th>

                                </tr>
                            </thead>
                            <tbody>

                        {data.map(
                            (value,index)=>{
                                return  <tr>
                                <th scope="row">{value._id}</th>
                                <td>{value.name}</td>
                                <td>{value.friendName}</td>
                                <td>{value.friendNickName}</td>
                                <td>{value.DescribeYourFriend}</td>
                                <td>{value.__v}</td>
                                

                              </tr>
                            }
                        )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewFriend