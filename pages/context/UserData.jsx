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

  const baseURL = "https://www.melivecode.com/api/users";

  const [user, setUser] = useState([]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [usernameCreate, setUsernameCreate] = useState("");
  const [avatar, setAvatar] = useState("");

  const [fnameEdit, setFnameEdit] = useState('');
  const [lnameEdit, setLnameEdit] = useState('');
  const [usernameEdit, setUsernameEdit] = useState('');
  const [avatarEdit, setAvatarEdit] = useState('');
  const { id } = router.query;


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
            router.push("/components/Login");
            clearTimeout(setSuccessLogin(false));
          }, 1000);
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
      !!setIsChecked;
      // setIsChecked({
      //   isChecked: true
      // });
    }
    setTimeout(() => {
      window.localStorage.clear();
    }, 600000);
  }, []);

  const onChangeCheckbox = (e) => {
    setIsChecked({
      isChecked: e.target.checked,
    });
  };
  // Login
  const userList = async () => {
    setLoading(true);
    try {
      const { data: res } = await axios.get(baseURL);
      setUser(res);
      console.log(res);
      setLoading(false);
      
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    userList();
  }, []);

  const deleteUser = async (id) => {
    let data = {
      id: id,
    };
    if (window.confirm("Do you want to delete")) {
      await axios
        .delete(`${baseURL}/delete`, {
          data: data,
        })
        .then(() => {
          userList();
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const logOut = () => {
    // window.localStorage.clear();
    router.push("/SignIn");
  };

  //create User
  const createUserSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/create`, {
        fname: fname,
        lname: lname,
        username: usernameCreate,
        password: fname,
        email: usernameCreate,
        avatar: avatar,
      })
      .then((res) => {
        alert("Create User");
        router.push("/components/Login");
        console.log(res);
        userList()
      })
      .catch((err) => {
        console.log(err);
      });
  };


  //Edit User
  const EditSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${baseURL}/update`, {
        id: id,
        fname: fnameEdit,
        lname: lnameEdit,
        username: usernameEdit,
        password: fnameEdit,
        email: usernameEdit,
        avatar: avatarEdit,
      })
      .then((res) => {
        alert("Update Data");
        router.push("/components/Login");
        userList();


        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
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
        user,
        logOut,
        deleteUser,
        createUserSubmit,
        setFname,
        setLname,
        setUsernameCreate,
        setAvatar,
        fname,
        lname,
        usernameCreate,
        avatar,
        EditSubmit,
        fnameEdit,
        lnameEdit,
        usernameEdit,
        avatarEdit,
        setAvatarEdit,
        setUsernameEdit,
        setFnameEdit,
        setLnameEdit,
        
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
