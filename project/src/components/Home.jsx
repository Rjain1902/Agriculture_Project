import { Link } from "react-router-dom";
import HomeImage from "../utils/images/Home.png";
import ListComponent from "./List/ListComponent";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div>
        <h1 className="font-bold text-lg mt-5 ">
          POST HARVESTING MANAGEMENT OF POMEGRANATE FRUIT
        </h1>
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex-1">
          <img src={HomeImage} alt="" />
        </div>
        <div  className="flex-1" style={{justifyContent:'center',alignItems:'center',display:'flex', flexDirection:'column'}} >
         
          <ListComponent />
         
        </div>
      </div>
      <Link to="/" className="absolute top-2 left-0">
        <ReplySharpIcon fontSize="large" />
      </Link>
    </div>
  );
}

export default Home;
