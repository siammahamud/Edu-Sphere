import React from "react";
import SignupForm from "../_components/signup-form";

const signUpPage = async ({ params }) => {  
  const { role } = await params;
  return (
    <div>
      <SignupForm role={role} />
    </div>
  );
};

export default signUpPage;
