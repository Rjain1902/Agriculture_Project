import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import maturity from "../../utils/files/maturity.pdf";
import Harvesting from "../../utils/files/Harvesting.pdf";
import Precooling from "../../utils/files/Precooling.pdf";
import Grading from "../../utils/files/Grading.pdf";
import Storage from "../../utils/files/Storage.pdf";
import Washing_Cleaning from "../../utils/files/Washing_Cleaning.pdf";
import AnardanaPdf from "../../utils/files/Anardana_powder.pdf";
import Waxing from "../../utils/files/Waxing.pdf";
import Packaging from "../../utils/files/Packaging.pdf";
import Transportation from "../../utils/files/Transportation.pdf";
import Hazma from "../../utils/files/Hazma.pdf";
import Jam from "../../utils/files/Jam.pdf";
import Jelly from "../../utils/files/Jelly.pdf";
import Peel_powder from "../../utils/files/Peel_powder.pdf";
import RTS from "../../utils/files/RTS.pdf";
import Seed_oil from "../../utils/files/Seed_oil.pdf";
import Wine from "../../utils/files/Wine.pdf";
import "./ListComponent.css";

export default function ListComponent() {
  return (
    <>
      <List>
        <a href={maturity} target="_blank" rel="noreferrer" id='item'>
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Maturity Indices
            </p>
          </ListItem>
        </a>

        <a href={Harvesting} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Harvesting
            </p>
          </ListItem>
        </a>

        <a href={Precooling} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Precooling
            </p>
          </ListItem>
        </a>

        <a href={Grading} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Grading
            </p>
          </ListItem>
        </a>

        <a href={Washing_Cleaning} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Washing and Cleaning
            </p>
          </ListItem>
        </a>

        <a href={Waxing} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Waxing
            </p>
          </ListItem>
        </a>

        <a href={Packaging} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Packaging
            </p>
          </ListItem>
        </a>

        <a href={Storage} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Storage
            </p>
          </ListItem>
        </a>

        <a href={Transportation} target="_blank" rel="noreferrer">
          <ListItem style={{ marginBottom: "-25px" }}>
            <ListItemIcon style={{ padding: "1px" }}>
              <FolderOpenRoundedIcon />
            </ListItemIcon>
            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontSize: "25px",
                marginLeft: "-10px",
              }}
            >
              Transportation
            </p>
          </ListItem>
        </a>

        <ListItem style={{ marginBottom: "-25px" }}>
          <ListItemIcon style={{ padding: "1px" }}>
            <FolderOpenRoundedIcon />
          </ListItemIcon>
          <p
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: "25px",
              marginLeft: "-10px",
            }}
          >
            Processed Products
          </p>
        </ListItem>
      </List>

      <div className="ml-60 mt-5">
        <ul style={{ listStyle: "square" }}>
          <li>
            <a href={AnardanaPdf} target="_blank">
              <p>Anardana Powder</p>
            </a>
          </li>

          <li>
            <a href={Hazma} target="_blank">
              <p>Hazma Hazam</p>
            </a>
          </li>

          <li>
            <a href={Wine} target="_blank">
              <p>Wine</p>
            </a>
          </li>

          <li>
            <a href={Peel_powder} target="_blank">
              <p>Peel Powder</p>
            </a>
          </li>

          <li>
            <a href={Seed_oil} target="_blank">
              <p>Seed Oil</p>
            </a>
          </li>

          <li>
            <a href={Jam} target="_blank">
              <p>Jam</p>
            </a>
          </li>

          <li>
            <a href={Jelly} target="_blank">
              <p>Jelly</p>
            </a>
          </li>
          <li>
            <a href={RTS} target="_blank">
              <p>RTS</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
