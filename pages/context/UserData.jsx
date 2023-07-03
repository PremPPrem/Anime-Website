import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const handleSubmit = (e) => {
        e.preventDefault();
        if (isChecked && userName !== "") {
          localStorage.userName = userName;
          localStorage.password = password;
          localStorage.checkbox = isChecked;
        } 
        axios
        .post("https://reqres.in/api/login", {
          email: userName,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          if (userName === "eve.holt@reqres.in" && password === "cityslicka") {
            setSuccessLogin(true);
            setTimeout(() => {
              router.push("/components/AfterLogin");
            }, 500);
          }
        })
        .catch(() => {
          setErrorLogin(true);
          setTimeout(() => {
            setErrorLogin(false);
          }, 1500);
        });
  };

  useEffect(() => {
    if (localStorage.checkbox && localStorage.userName !== "") {
      setUserName(localStorage.userName);
      setPassword(localStorage.password);
      !!setIsChecked
    //   setIsChecked({
    //     isChecked: true
    //   });
    } 
  }, []);


  const onChangeCheckbox = (e) => {
    setIsChecked({
      isChecked: e.target.checked
    });
 
  };

  return (
    <UserDataContext.Provider
      value={{
        loading,
        handleSubmit,
        setUserName,
        userName,
        setPassword,
        password,
        errorLogin,
        successLogin,
        onChangeCheckbox,
        isChecked,
        
       
        
        
       
        
       
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
