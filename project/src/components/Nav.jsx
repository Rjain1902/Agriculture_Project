import logo1 from "../utils/images/logo1-removebg-preview.png";
import logo2 from "../utils/images/logo2.png";
import './Nav.css'
export function Nav() {
  return (
    <div className=" relative flex flex-row justify-center">
      <div className="bg-white">
        <img
          src={logo1}
          alt="Logo1"
          className="absolute top-2 left-0 rounded-r-full bg-white p-1"
        />
      </div>
      <div className="text-white  flex flex-col justify-center items-center mt-4 " id='heading'>
        <p >PHULE &ensp;POMEGRANATE &ensp;PRO</p>
        <p style={{fontSize:'25px'}}>DEPARTMENT OF AGRICULTURAL PROCESS ENGINEERING</p>
        <p style={{fontSize:'20px'}}>
          DR. ANNASAHEB SHINDE COLLEGE OF AGRICULTURAL ENGINEERING AND
          TECHNOLOGY,
        </p>
        <p style={{fontSize:'15px'}}>MPKV, RAHURI</p>
      </div>
      <img
        src={logo2}
        alt="Logo2"
        className="absolute top-2 right-0 rounded-l-full bg-white p-1"
      />
    </div>
  );
}
