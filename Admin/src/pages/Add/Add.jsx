// import React from 'react'
import "./Add.css";
import { useState } from "react";
import { assets } from '../../assets/assets.js'
import axios from "axios"
import { toast } from "react-toastify";

const Add = () => {

      const url = "http://localhost:4000";
      const [image,setImage] = useState(false);
      

/* creating a object where we store the data(like:-name,description,price,category )  */


      const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })

/** onchangeHandler is used  when we changed anything in the input field of product name
 *  then it will updated in the state variable.
 * 
 *  in other words onChangeHandler is used for controlling the input field
 * 
 */
      const onChangeHandler =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
      }
/** we used the use effect to check that our data is updated or not which is optional */

        // useEffect(()=>{
        //     console.log("Data is updated",data);
        // },[data])

        const onSubmitHandler = async(event) => {
              event.preventDefault();
              const formData = new FormData();
              formData.append("name",data.name);
              formData.append("description",data.description);
              formData.append("price",Number(data.price));
              formData.append("category",data.category);
              formData.append("image",image);
             
              const response = await axios.post(`${url}/api/food/add`,formData)
        
// to call the api used axios
//check our response is success or not
            if(response.data.success){
              // alert("Product Added Successfully")
              setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
              })
                setImage(false)
                toast.success(response.data.message);
            }

            else{
              // alert("Failed to add product")
              toast.error(response.data.message);
            }
        }
  /** uses onSubmitHandler to prevent the data from reload */
  return (
    <div className="add">

      <form className="flex-col" onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
        
          <p>Upload Image</p>

          <label htmlFor="image">
            <img id="upload" src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
              {/* <FontAwesomeIcon id="upload" icon={faUpload} /> */}
          
          </label>

          <input onChange={(e)=> setImage(e.target.files[0])} type="file" id="image" hidden required />

        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler}  value={data.name} type="text" name="name" placeholder="Type Here" />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler}  value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p> Product Category</p>

            <select name="category" onChange={onChangeHandler}  value={data.category}>

                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>

            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler}  value={data.price} type="number" name="price" placeholder="Rs.100" />
          </div>

  
        </div>

            <button type="submit" className="add-button">ADD</button>
      </form>
    </div>
  );
};

export default Add;
