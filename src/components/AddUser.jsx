import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
   const [userData, setUserData] = useState({
      name: "",
      email: "",
      gender: "Male",
   });

   const navigate = useNavigate();

   const saveUser = async (e) => {
      e.preventDefault();
      try {
         // jgn lupa URL ke db ganti ke environment variables (.env) saat menggunakan mongodb atlas
         // contoh ada di folder backend
         await axios.post("http://localhost:5000/users", userData);
         navigate("/");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <div className="pt-20">
            <form action="" className="form" onSubmit={saveUser}>
               <h2 className="form-title">New user profile</h2>

               <label htmlFor="name">Name</label>
               <input type="text" placeholder="name" id="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />

               <label htmlFor="email">Email</label>
               <input type="text" placeholder="email" id="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

               <label htmlFor="gender">Gender</label>
               <select id="gender" className="select" value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </select>

               <button type="submit" className="main-button">
                  Save
               </button>
            </form>
         </div>
      </div>
   );
}
