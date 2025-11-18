import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || 10000, () => {
  console.log("🍰 BakeBuddy server running on port", process.env.PORT || 10000);
});
