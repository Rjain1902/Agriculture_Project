import logo1 from "../utils/images/logo1.png";
import logo2 from "../utils/images/logo2.png";
export function Nav() {
  return (
    
      <div className=" relative flex flex-row justify-center">
        <img src={logo1} alt="Logo1" className="absolute top-0 left-0" />
        <div className="text-white  flex flex-col justify-center items-center">
            <h1>PHULE POMEGRANATE PRO</h1>
            <h1>DEPARTMENT OF AGRICULTURAL PROCESS ENGINEERING</h1>
            <h1>DR. ANNASAHEB SHINDE COLLEGE OF AGRICULTURAL ENGINEERING AND TECHNOLOGY,</h1>
            <h1>MPKV, RAHURI</h1>
        </div>
        <img src={logo2} alt="Logo2" className="absolute top-0 right-0" />
      </div>
  );
}
