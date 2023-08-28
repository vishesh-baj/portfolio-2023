import { Button, Spin } from "antd";
import { useState } from "react";
const Spinner = () => {
  const [toggleSpinning, setToggleSpinning] = useState(false);
  return (
    <div>
      <Spin spinning={toggleSpinning} />
      <Spin spinning={toggleSpinning}>
        <p>wrapped inside spin</p>
      </Spin>
      <Button onClick={() => setToggleSpinning((prevState) => !prevState)}>
        Toggle Spinning
      </Button>
    </div>
  );
};

export default Spinner;
