import { Button, FormControlLabel, Slider, Switch } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {

  const [isCheck,setIsCheck]=useState(false);
  const [sliderValue, setSliderValue] = useState(10);

  const HandleSwitchClick=(ev)=>{
    setIsCheck((val)=>!val);
  }

  const HandleOnButtonClick=(ev)=>{
    const selectedMark = marks.find(mark => mark.value === sliderValue);
    console.log(`Slider Value: ${sliderValue}`);
    console.log(`Credit: ${selectedMark.credit}`);
  }

  const marks = [
    {
      value: 5,
      label: "$5",
      credit:"500 credits"
    },
    {
      value: 10,
      label: "$10",
      credit:"1200 credits"
    },
    {
      value: 15,
      label: "$15",
      credit:"1700 credits"
    },
    {
      value: 20,
      label: "$20",
      credit:"2500 credits"
    },
    {
      value: 25,
      label: "$25",
      credit:"3900 credits"
    },
    {
      value: 30,
      label: "$30",
      credit:"5000 credits"
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className="body">
      <div className="box-container">
        <div className="container">
          <div>
            <div className="switchbox">
              <FormControlLabel
                control={<Switch onChange={HandleSwitchClick} />}
                label="Setup Auto Top-up"
                labelPlacement="start"
              />
            </div>
          </div>
          {!isCheck ? (
            <div className="text">
              Once the credit goes below the threshold value, credits can be auto
              purchased. Setup auto top-up to enjoy uninterrupted services. You
              can disable this anytime to stop auto top-up.
            </div>
          ) : (
            <div>
              <div className="text2">
                Once the credit goes below a minimum threshold 50, we will
                auto-purchase 1200 credits and add them to your account. Learn more
              </div>
              <div>
                <Slider
                  aria-label="amount"
                  defaultValue={10}
                  color="secondary"
                  value={sliderValue}
                  onChange={(event, newValue) => setSliderValue(newValue)}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  marks={marks}
                  shiftStep={5}
                  step={5}
                  min={5}
                  max={30}
                />
                <div className="credit">
                  <div className="creditbox">500 credits</div>
                  <div className="creditbox">1200 credits</div>
                  <div className="creditbox">1700 credits</div>
                  <div className="creditbox">2500 credits</div>
                  <div className="creditbox">3900 credits</div>
                  <div className="creditbox">5000 credits</div>
                </div>
              </div>
              <div className="btn">
                <Button onClick={HandleOnButtonClick} color='secondary' variant="contained" disableElevation>
                  Confirm auto-purchase
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
