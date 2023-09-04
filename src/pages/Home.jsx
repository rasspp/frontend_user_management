import ContactList from "../components/ContactList";

export default function Home() {
   return (
      <main>
         <div className="min-h-screen pt-10">
            <h1 className="text-4xl text-center font-semibold text-green-500">CRUD User Management with MERN Stack</h1>

            <ContactList />
         </div>
      </main>
   );
}
