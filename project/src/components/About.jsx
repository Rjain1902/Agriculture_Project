import { Link } from "react-router-dom";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import AboutPdf from '../utils/files/About.pdf'
function About() {
  return (
    <>
      <div>
        
        <object width="100%" height="650px" data={AboutPdf} type="application/pdf"> </object>
        <Link to="/" className="absolute top-14 left-0">
          <ReplySharpIcon fontSize="large" />
        </Link>  
       
       
      </div>
    </>
  );
}

export default About;
