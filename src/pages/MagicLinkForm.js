import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PersonalInfoForm from "./PersonalInfoForm";

const MagicLinkForm = () => {
  const [searchParams] = useSearchParams();
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    // Validate token with backend
    const validateToken = async () => {
      try {
        // const response = await axios.post("/api/validate-token", { token });
        // if (response.data.valid) {
        //   setIsValid(true);
        // } else {
        //   setIsValid(false);
        // }
        setIsValid(true);
      } catch (error) {
        setIsValid(false);
      }
    };

    validateToken();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md text-center">
        {isValid ? (
          <PersonalInfoForm /> // Show the form if the token is valid
        ) : (
          <p>Invalid or expired link. Please request a new magic link.</p>
        )}
      </div>
    </div>
  );
};

export default MagicLinkForm;
