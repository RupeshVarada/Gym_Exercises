import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const HorizontalScrollbar = ({ data, bodyPart, setbodyPart }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", overflow: "scroll" }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <BodyPart item={item} bodyPart={bodyPart} setbodyPart={setbodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
