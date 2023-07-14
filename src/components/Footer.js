import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div>
      <div>
        <footer
          className=" text-center w-100 text-black "
          style={{
            "background-color": "black",
          }}
        >
          {/* <!-- Grid container --> */}
          <div className="container p-2 ">
            {/* <!-- Section: Social media --> */}
            <section
              className="mb-4 mt-1 d-flex justify-content-center"
              style={{ height: "25px" }}
            >
              <div>
                {/* <!-- Facebook --> */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.facebook.com/"
                  role="button"
                >
                  <SocialIcon
                    url="https://facebook.com/"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>

                {/* <!-- Twitter --> */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.twitter.com"
                  role="button"
                >
                  <SocialIcon
                    url="https://twitter.com/"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>

                {/* <!-- Whatsapp--> */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.whatsapp.com/"
                  role="button"
                >
                  <SocialIcon
                    url="https://whatsapp.com/"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>

                {/* <!-- Instagram --> */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.instagram.com"
                  role="button"
                >
                  <SocialIcon
                    url="https://www.instagram.com/"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>

                {/* <!-- EMAIL --> */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.google.com/intl/en_in/gmail/about/"
                  role="button"
                >
                  <SocialIcon
                    url="https://google.com/intl/en_in/gmail/about/"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
                {/* <!-- Tiktok--> */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.tiktok.com/about"
                  role="button"
                >
                  <SocialIcon
                    url="https://tiktok.com/about"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
                {/* Telegram */}
                <Link
                  class="x"
                  className="btn text-white btn-floating bg-white border border-primary border-3 rounded-circle mx-2"
                  to="https://www.telegram.org/di"
                  role="button"
                >
                  <SocialIcon
                    url="https://telegram.org/di"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
              </div>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center text-dark p-2 fw-bold"
            style={{
              "background-color": "rgb(36, 216, 163)",
              fontSize: "15px",
            }}
          >
            © 2023 Copyright:
            <Link className="text-dark text-decoration-none" to="/">
              GrabFood.com
            </Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    </div>
  );
}
