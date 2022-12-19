import React from "react";
import { Link } from "react-router-dom";

function RootPage() {
  return (
    <div>
      <p>RootPage</p>

      <Link to={"contacts/2"}>contact</Link>
    </div>
  );
}

export default RootPage;
