import React, { useEffect, useRef } from "react";
import { useState } from "react";
//import Calculation from "../screen/Calculation";
import { useDispatchCart,useCart } from "./ContextReducer";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  //let foodItem = props.foodItems;
  let data = useCart();
  
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

    const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
   
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
          img: props.ImgSrc,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.ImgSrc,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.ImgSrc,
    });

  }
   useEffect(() => {
     setSize(priceRef.current.value);
   }, []);
  
  let finalPrice = qty * parseInt(options[size]);
  return (
    <div
      className="card mt-3 m-3 bg-dark "
      style={{ width: "250px", maxHeight: "400px", objectFit: "fill" }}
    >
      <img
        src={props.foodItem.img}
        className="card-img-top"
        style={{ width: "250px", maxHeight: "150px", objectFit: "fill" }}
        alt="https://wallpaperaccess.com/full/5912739.jpg"
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold " style={{ color: "white" }}>
          {props.foodItem.name}
        </h5>
        <p className="card-text " style={{ color: "#a19797" }}>
          One of the most lovable Indian dishes
        </p>
        <div className="container w-100 d-flex m-0 p-0">
          <select
            id="plate"
            className="m-1 p-0 h-75  text-dark fw-bold rounded text-start"
            ref={priceRef}
            style={{ width: "3.5rem", "background-color": "#24d8a3" }}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Size</option>
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <select
            className="m-1 p-0 h-100  text-dark fw-bold rounded "
            style={{ width: "6rem", "background-color": "#24d8a3" }}
            onChange={(e) => setQty(e.target.value)}
          >
            <option value="">Quantity</option>
            {Array.from(Array(5), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <div
            id="price"
            className="d-inline m-1 p-0 text-dark fw-bold rounded text-start "
            style={{
              height: "21px",
              width: "60px",
              "background-color": "#24d8a3",
            }}
          >
            ₹{finalPrice}/-
          </div>
        </div>
      </div>
      <button
        className="h-100  text-dark fw-bold rounded"
        style={{
          width: "120px",
          "background-color": "#24d8a3",
          margin: "0 0 0 60px",
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
