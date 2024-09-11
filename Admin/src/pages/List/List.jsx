// import React from 'react'
import "./List.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const List = () => {

  const url = "http://localhost:4000";
    // Initialize state to store the list of food items
  const [list, setList] = useState([]);
  
  // Function to fetch the list of food items from the API  
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };




  // Function to remove a food item by sending a POST request to the API
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/removeFood`, { id:foodId });
      if (response.data.success) {
        // Update the list by refetching it from the API
        await fetchList();
      } else {
        toast.error("Error removing food item");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error removing food item");
    }
     
  };

  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
