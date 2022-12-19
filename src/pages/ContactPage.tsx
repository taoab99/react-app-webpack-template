import React from "react";
import { useParams } from "react-router-dom";

function ContactPage() {
  const param = useParams();
  console.log(param);
  return <div>contact us : {param?.contactId}</div>;
}

export default ContactPage;
