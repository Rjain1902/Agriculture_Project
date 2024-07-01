import { Link } from "react-router-dom";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import "./Contact.css";
function Contact() {
  const openGmail = (email) => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}`;
    window.open(gmailURL, "_blank");
  };

  return (
    
      <div className='main' >
        <Link to="/" className=" top-2 left-0">
          <ReplySharpIcon fontSize="large" />
        </Link>
        <div className="flex-1 mt-24 ml-52">
          <p style={{ fontFamily: "sans" }}>
            Department of Agricultural Process Engineering <br />
            Dr.ASCAE&T,MPKV,RAHURI 413722
            <br />
            Email-id:{" "}
            <button
              id="email"
              onClick={() => {
                openGmail("aperahuri@gmail.com");
              }}
              style={{ color: "#034694" }}
            >
              aperahuri@gmail.com
            </button>
            <br />
            Contact: 02426 243267
            <br />
          </p>
        </div>
      </div>
    
  );
}

export default Contact;
