import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <nav className="bg-green-900 fixed w-full shadow-md">
         <div className="flex justify-between container mx-auto py-5">
            <Link to={"/"}>
               <h1 className="main-button m-0">Rass</h1>
            </Link>

            <div>
               <Link to={"/"}>My Github</Link>
            </div>
         </div>
      </nav>
   );
}
