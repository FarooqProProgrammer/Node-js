import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from 'antd';
import { Input } from 'antd';
import Button from 'react-bootstrap/Button';
import "./index.css";
import app from "../config/FB"
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {getFirestore,addDoc,collection} from "firebase/firestore";

function Navbar() {
  const auth = getAuth(app);
  // const db = getFirestore(app);
  const [click, setClick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Credential,setCredential] = useState(false);
  const [userName,setUserName] = useState(null);
  const [Password,setPassword] = useState(null);
  const [Email,setEmail] = useState(null);


  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => setClick(!click);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // Add(Email,userName)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  // const Add = async (Email,userName) =>{
  //   const docRef = await addDoc(collection(db, "Users"), {
  //     Email:Email,
  //     Name:userName
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           Sylani
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Donations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <button onClick={showModal} className="w-[100px] h-[49px] border-2 border-[#ffdd40] text-[#ffdd40] hover:decoration-[#ffdd40] hover:border-black hover:text-black">Login</button>
        </div>


        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="w-full h-[400px] border-2 border-black">
          <div className="BTN-GROUP flex">
              <button className="w-[50%] bg-[#3498db] text-white" onClick={()=> setCredential(false)}>LOGIN</button>
              <button className="w-[50%] bg-[#3498db] text-white" onClick={()=> setCredential(true)}>SIGNUP</button>
          </div>
          <div className="w-full h-[348px] border-2 border-black flex flex-col justify-around items-center">

            {Credential === false ?
              <>
              <Input onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" className="w-[80%] h-[50px] " />
              <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" className="w-[80%] h-[50px] " />
              <Button variant="secondary">Login</Button>  
              </>
              :
              <>
                <Input onChange={(e)=> setUserName(e.target.value)} placeholder="Enter User Name" className="w-[80%] h-[50px]"/>
                <Input onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" className="w-[80%] h-[50px] " />
                <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" className="w-[80%] h-[50px] " />
              <Button variant="secondary" onClick={createUser}>Signup</Button>  
              </>
              
            }
          </div>

          </div>
        </Modal>
      </nav>
    </>
  );
}

export default Navbar;