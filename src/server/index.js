const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));
// add router in express app
app.use("/", router);

app.use(express.json());
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
      EMAIL: "post_email",
      NAME: "post_name",
    },
    type: "URL_POST",
  },
  integration: "COLLECT_EMAIL",
};

router.get("/api", (req, res) => {
  res.json(getResponse);
});

app.post("/signup", (request, response) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log("DATA POSTED:", request.body);
});

app.listen(3001, () => {
  console.log("Started on PORT 3001");
});
