import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useCart, useDispatchCart } from "../components/ContextReducer";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div style={{ overflow: "visible" }}>
        <div
          className="m-1 w-100 text-center fs-3 text-center"
          style={{
            color: "rgb(36, 216, 163)",
            overflow: "auto",
          }}
        >
          Your Cart is Empty!
        </div>
        <img
          src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/dribbble.jpg"
          alt="ERROR 404"
          className="border border-5 border-success "
          style={{
            maxWidth: "600px",
            height: "400px",
            margin: "30px 0 0 450px",
            borderRadius: "100%",
          }}
        />
        <div
          className="m-5 w-100 text-center fs-3 text-center"
          style={{ color: "rgb(36, 216, 163)" }}
        >
          Please add something to make me Happy😀
        </div>
      </div>
    );
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    
     console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log(response);
    console.log("JSON RESPONSE:::::", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div  data-spy="scroll">
      <div className="m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="border border-success table table-hover ">
          <thead className=" border border-success fs-4">
            <tr className="border border-success">
              <th style={{ color: "rgb(36, 216, 163)" }} scope="col ">
                #
              </th>
              <th style={{ color: "rgb(36, 216, 163)" }} scope="col">
                Name
              </th>
              <th style={{ color: "rgb(36, 216, 163)" }} scope="col">
                Quantity
              </th>
              <th style={{ color: "rgb(36, 216, 163)" }} scope="col">
                Option
              </th>
              <th style={{ color: "rgb(36, 216, 163)" }} scope="col">
                Amount
              </th>
              <th style={{ color: "rgb(36, 216, 163)" }} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th style={{ color: "rgb(36, 216, 163)" }} scope="row">
                  {index + 1}
                </th>
                <td style={{ color: "rgb(36, 216, 163)" }}>{food.name}</td>
                <td style={{ color: "rgb(36, 216, 163)" }}>{food.qty}</td>
                <td style={{ color: "rgb(36, 216, 163)" }}>{food.size}</td>
                <td style={{ color: "rgb(36, 216, 163)" }}>{food.price}</td>
                <td style={{ color: "rgb(36, 216, 163)" }}>
                  <button type="button" className="bg-dark btn p-0">
                    <DeleteOutlineOutlinedIcon
                      className=" bg-dark text-danger"
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-danger fs-2">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button
            className="btn text-danger fw-bold mt-5 "
            style={{ "background-color": "rgb(36, 216, 163)" }}
            onClick={handleCheckOut}
          >
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
} 