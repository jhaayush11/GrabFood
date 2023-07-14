import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
export default function Home() {
  const [search, setSearch] = useState(""); 
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    
  }
  useEffect(() => {
      loadData()
    },[])



  return (
    <div className="bg-dark text-light">
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain!important " }}
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption " style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  className="btn btn-outline-success text-white mx-3"
                  type="submit"
                >
                  Search
                </button>
                <button
                  className="btn text-white bg-danger"
                  onClick={() => {
                    setSearch("");
                  }}
                >
                  X
                </button>
              </div>
            </div>
            <div className="carousel-item active ">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="d-block w-100 h-100"
                style={{ filter: "brightness(50%)", }}
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src=" https://thumbs.dreamstime.com/b/food-ingredients-spices-cooking-delicious-italian-pizza-mushrooms-tomatoes-cheese-onion-oil-pepper-salt-basil-grater-olive-114683943.jpg?w=1200"
                className="d-block  w-100 h-100"
                style={{ filter: "brightness(50%)",  }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/93/821/247/cuisine-food-india-indian-wallpaper-preview.jpg"
                className="d-block  w-100 h-100"
                style={{ filter: "brightness(50%)", }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpaperaccess.com/full/767048.jpg"
                className="d-block w-100 h-100"
                style={{ filter: "brightness(50%)", }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3 fw-bold ">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3 border border-success"
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                            //ImgSrc={filterItems.img}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No Such Data Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>hi</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
