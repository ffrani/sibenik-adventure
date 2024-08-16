import EuroSymbolRoundedIcon from "@mui/icons-material/EuroSymbolRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AlarmRoundedIcon from "@mui/icons-material/AlarmRounded";
// import RoomRoundedIcon from "@mui/icons-material/RoomRounded";

import "../components/BasicInfo.css";

const GridContainer = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div style={{ marginLeft: "15px" }}>
          <EuroSymbolRoundedIcon style={{ color: "white" }} />
        </div>
        <div className="text-elements">
          <div>40€</div>
          <div>per person</div>
        </div>
      </div>
      <div className="grid-item">
        <div style={{ marginLeft: "15px" }}>
          <CalendarMonthRoundedIcon style={{ color: "white" }} />
        </div>
        <div className="text-elements">
          <div>1.5. - 1.11.</div>
          <div>available</div>
        </div>
      </div>
      <div className="grid-item">
        <div style={{ marginLeft: "15px" }}>
          <PeopleRoundedIcon style={{ color: "white" }} />
        </div>
        <div className="text-elements">
          <div>2 - 16</div>
          <div>people</div>
        </div>
      </div>
      <div className="grid-item">
        <div style={{ marginLeft: "15px" }}>
          <AlarmRoundedIcon style={{ color: "white" }} />
        </div>
        <div className="text-elements">
          <div>2:30h</div>
          <div>duration</div>
        </div>
      </div>
      {/* <div className="grid-item">
        <div>
          <RoomRoundedIcon />
        </div>
        <div>
          <div>10:20am</div>
          <div>departure</div>
        </div>
      </div> */}
    </div>
  );
};

export default GridContainer;
