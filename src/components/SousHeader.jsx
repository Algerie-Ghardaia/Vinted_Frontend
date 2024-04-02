import React, { useState } from 'react'
import RangeSlider from "./Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
export const SousHeader = () => {
    const [click, setClick] = useState(false);
    const [value, setValue] = useState([10, 200]);
  return (
    <div className="toggle_slider ">
        <div className="toggle ">
          <h4>Trier par prix :</h4>
          <FormControlLabel
            control={
              <Switch
                checked={click}
                onChange={(event) => {
                  setClick(event.target.checked);
                }}
              />
            }
          />
        </div>
        <div className="slider">
          <h4
            style={{
              fontSize: "17px",
              marginTop: "5px",
              marginLeft: "8px",
            }}
          >
            Prix entre :
          </h4>
          <RangeSlider value={value} setValue={setValue} />
        </div>
      </div>
  )
}
