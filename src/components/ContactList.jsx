import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContactList() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      getUsers();
   }, []);

   const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
   };

   const deleteUser = async (id) => {
      try {
         await axios.delete(`http://localhost:5000/users/${id}`);
         getUsers();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <main>
         <div className="pt-10">
            <div className="flex justify-center bg-green-900 flex-col items-center border w-1/2 mx-auto rounded-md p-5 pt-0 ">
               <h1 className="form-title w-full">List Users</h1>

               <Link to={"/add"}>
                  <button className="main-button mb-5">Add New User</button>
               </Link>

               <table className="table-auto border-collapse  border-2">
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((user, index) => (
                        <tr key={user._id}>
                           <td>{index + 1}</td>
                           <td>{user.name}</td>
                           <td>{user.email} </td>
                           <td>{user.gender}</td>
                           <td className="w-40">
                              <Link to={`/edit/${user._id}`}>
                                 <button className="main-button bg-blue-700 mx-1 my-0 py-0 hover:bg-blue-800 active:bg-blue-700">edit</button>
                              </Link>

                              <button className="main-button bg-red-700 mx-1 my-0 py-0 hover:bg-red-800 active:bg-red-700" onClick={() => deleteUser(user._id)}>
                                 delete
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
}
