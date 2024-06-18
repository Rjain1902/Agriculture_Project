import { Link } from "react-router-dom";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
function About() {
  return (
    <>
      <div>
        <Link to="/" className="absolute top-2 left-0">
          <ReplySharpIcon fontSize="large" />
        </Link>
        <div className="flex-1 mt-24 ml-52">
          <p style={{ fontFamily: "sans" }}>
            Welcome to Phule Pomegranate Pro,
            <br />
            your go-to resource for mastering <br />
            pomegranate post-harvest processing <br />
            and marketing. Discover the best <br />
            practices in harvesting, sorting, <br />
            grading, packaging, and storage to <br />
            ensure your pomegranates are top
            <br />
            quality and market- ready. Stay <br />
            updated with the latest trends and <br />
            expert tips to maximize the value of
            <br />
            your produce. Let’s bring the finest
            <br />
            pomegranates from your orchard to <br />
            consumers,worldwide!
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
