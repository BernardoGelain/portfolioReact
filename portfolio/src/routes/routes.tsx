import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
      <RRDRouter>
        <Route path="/" element={<Homepage />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
