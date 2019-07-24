import { useState } from "react";

const Toggle = initState => {
  const [state, setState] = useState(initState);
  return [state, () => setState(!state)];
};

export default Toggle;
