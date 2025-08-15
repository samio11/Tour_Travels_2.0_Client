import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [email] = useState(location.state);
  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, []);
  return <div>This is Verify Page</div>;
};

export default Verify;
