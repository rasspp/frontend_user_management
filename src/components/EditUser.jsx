import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
   const [userData, setUserData] = useState({
      name: "",
      email: "",
      gender: "Male",
   });
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      const getUserById = async () => {
         try {
            const { data } = await axios.get(`http://localhost:5000/users/${id}`);
            setUserData(data);
         } catch (error) {
            console.log(error);
         }
      };

      getUserById();
   }, [id]);

   const updateUser = async () => {
      setLoading(true);

      try {
         await axios.patch(`http://localhost:5000/users/${id}`, userData);
         navigate("/");
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div>
         <div className="pt-20">
            <form className="form">
               <h2 className="form-title">Update profile</h2>

               <label htmlFor="name">Name</label>
               <input type="text" placeholder="name" id="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />

               <label htmlFor="email">Email</label>
               <input type="text" placeholder="email" id="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

               <label htmlFor="gender">Gender</label>
               <select id="gender" className="select" value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </select>

               <button type="button" className="main-button" onClick={updateUser} disabled={loading}>
                  {loading ? "Updating..." : "Update"}
               </button>
            </form>
         </div>
      </div>
   );
}
