import "../css/styles.css";
import "../css/custom.css";
import VideoBg from "../assets/mp4/bg.mp4";
import { useState } from "react";

function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendJsonObject = [
    {
      implType: "CollectEmail",
      id: "0010212",
      title: "Join the list ' receive 15% off your first order",
      description: "Sign up for our newsletter",
      dataPostURL: null,
      js: null,
      formIntegration: {
        implType: "URLPostFormIntegtration",
        url: "https://postman-echo.com/post",
        paramsMap: {
          EMAIL: email,
          NAME: name,
        },
        type: "URL_POST",
      },
      integration: "COLLECT_EMAIL",
    },
  ];

  const getDataFromApi = () => {
    console.log("POST DATA OBJECT", sendJsonObject);
    const requestOptions = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ sendJsonObject }), // body data type must match "Content-Type" header
    };
    fetch(
      "https://api.lightboxlive.com/v0/lb/ltXtK535b9DkPozH/page",
      requestOptions
    )
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
          alert("Join the list ' receive 15% off your first order");
        }
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }; //Get Email

  const inputEmail = (e) => {
    setEmail(e.target.value);
    console.log("email: ", email);
  };

  const inputName = (e) => {
    setName(e.target.value);
    console.log("email: ", name);
  };

  return (
    <div className="container">
      <video
        className="bg-video"
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={VideoBg} type="video/mp4" />
      </video>

      <div className="container wrap">
        <div className="row">
          <div className="col-md-6">
            <h2> Corsair Real Estate</h2>
            <p>
              See the power of extra principal payments or refinancing at the
              right time.
            </p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={inputName}
                  required
                />

                <br />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={inputEmail}
                  required
                />

                <small id="emailHelp" className="form-text textMute">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <button
                onClick={getDataFromApi}
                className="btn btn-primary fullwidthbtn"
                type="submit"
              >
                Submit
              </button>

              <p className="disclaimer">
                By submitting this form, you agree to receive recurring
                automated promotional and personalized marketing text messages
                (e.g. cart reminders) from Skechers at the cell number used when
                signing up. Consent is not a condition of any purchase. Reply
                HELP for help and STOP to cancel. Msg frequency varies. Msg and
                data rates may apply. View Terms & Privacy.
              </p>
            </form>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              alt="Corsair Real Estate"
              src="https://media.istockphoto.com/photos/male-architect-hands-making-model-house-picture-id823322674?k=20&m=823322674&s=612x612&w=0&h=mt7tQAJquJvJzon4V1OQ5E6ReqbJ2nc1zfsxZgvlyfA="
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
