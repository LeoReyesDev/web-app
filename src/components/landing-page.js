import "../css/styles.css";
import "../css/custom.css";
import VideoBg from "../assets/mp4/bg.mp4";
import { useEffect, useState } from "react";
import axios from "axios";

const ModalWindow = (props) => {
  return (
    <div id="lightBox">
      <div>
        <h1>{props.username}</h1>
        <h5>{props.title}</h5>
        <button onClick={props.close} className="btn btn-danger">
          Close X
        </button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const getResponse = {
    implType: "CollectEmail",
    id: "Q5O3U9H3KRs6M54X",
    thumbnail: "KEAn38tFEPd4xkyC/dbc2c7971fd6b78d.png",
    title: "Join the list & receive 15% off your first order",
    description: "Sign up for our newsletter",
    dataPostURL: null,
    js: null,
    formIntegration: {
      implType: "URLPostFormIntegration",
      url: "https://postman-echo.com/post",
      paramsMap: {
        EMAIL: email,
        NAME: name,
      },
      type: "URL_POST",
    },
    integration: "COLLECT_EMAIL",
  };

  const closeWin = () => {
    setModal(false);
  };

  const getDataApi = () => {
    console.log("getApi");
    axios.get("http://localhost:3001/api").then((response) => {
      console.log("Get API INFO", response.data);
    });
  };

  const submitData = () => {
    //console.log(getResponse);

    setDisableBtn(true);

    const Url1 = "http://localhost:3001/signup";
    const Url2 = "https://jsonplaceholder.typicode.com/posts";

    //Note please read

    /* NOTE PLEASE READ
     I tried to run the app in local variables Url1 and getResponse, but on the browser
     doesnt received 200 on signup processs, you can review on local run up server/index.js
     could tracking response once time change and field form
    */

    let getResponse2 = {
      userId: 12,
      id: 12,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: { name: name, email: email }, //checkout if objects send to post
    };

    axios
      .post(Url1, getResponse) // you can change for this -> .post(Url12 getResponse2)
      .then((response) => console.log("data:", response.data))
      .then(setModal(true), console.log("window"))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
    enabledBtn();
  };

  const inputName = (e) => {
    setName(e.target.value);
    enabledBtn();
  };

  useEffect(() => {
    getDataApi();
  }, []);

  const message = "Join the list & receive 15% off your first order";

  const enabledBtn = () => {
    if (email !== null && name !== null) {
      setDisableBtn(false);
    }
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
          {modal ? (
            <ModalWindow close={closeWin} title={message} username={name} />
          ) : null}
          <div className="col-md-6">
            <h2> Corsair Real Estate</h2>
            <p>
              See the power of extra principal payments or refinancing at the
              right time.
            </p>

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
              onClick={submitData}
              className="btn btn-primary fullwidthbtn"
              type="submit"
              disabled={disableBtn}
            >
              Submit
            </button>

            <p className="disclaimer">
              By submitting this form, you agree to receive recurring automated
              promotional and personalized marketing text messages (e.g. cart
              reminders) from Skechers at the cell number used when signing up.
              Consent is not a condition of any purchase. Reply HELP for help
              and STOP to cancel. Msg frequency varies. Msg and data rates may
              apply. View Terms & Privacy.
            </p>
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
};

export default LandingPage;
