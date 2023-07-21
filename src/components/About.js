import React from "react";
import { ReactDOM } from "react";
import './About.css';
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <Link
              className="text-blk heading fst-italic text-decoration-none "
              to="/"
              style={{"cursor":"pointer"}}
            >
              Grab Food
            </Link>
            {/* <a className="text-blk heading fst-italic">Grab Food</a> */}
            <p className="text-blk subHeading" style={{ color: "#48e848" }}>
              Grab Food is a chain of restaurants currently operating across all
              major cities of India. <br />
              Apart from dining at our restaurant you can even order food at any
              time. <br />
              We are available for you 24x7 at <br />
              major cities like <br /> Mumbai,Delhi,Banglore,Pune,Chennai,{" "}
              <br />
              Hyderabad,Nagpur and the list continues....
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <img
              className="number1img"
              src="https://img.freepik.com/premium-photo/bowl-food-with-smoke-coming-out-it_197463-2406.jpg?w=740"
            />
            <img
              className="number2img"
              src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg"
            />
            <img
              className="number3img"
              src="https://img.freepik.com/free-photo/delicious-goulash-stew-table_23-2149371737.jpg?size=626&ext=jpg&ga=GA1.1.1301108659.1688882515&semt=sph"
            />
            <img
              className="number5img"
              src="https://img.freepik.com/premium-photo/photo-traditional-indian-food-with-spices_162568-1306.jpg?size=626&ext=jpg&ga=GA1.1.1301108659.1688882515&semt=sph"
            />
            <img
              className="number4vid"
              src="https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?size=626&ext=jpg&ga=GA1.1.1301108659.1688882515&semt=sph "
            ></img>
            <img
              className="number7img"
              src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg&ga=GA1.1.1301108659.1688882515&semt=sph"
            />
            <img
              className="number6img"
              src="https://img.freepik.com/free-photo/burritos-wraps-with-minced-beef-vegetables-wooden-surface_2829-8275.jpg?size=626&ext=jpg&ga=GA1.1.1301108659.1688882515&semt=sph"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
