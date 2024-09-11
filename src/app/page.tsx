
import Header from "@/components/header"
import KeyFeatures from "@/components/features"


export default function Home() {

  return (
    <div className=" poppins">
   <Header/>
   <div className=" flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className=" font-bold text-2xl text-center">
        Manage and Create You React Components
        <span className="text-sky-500 ml-2">Effortlessly</span>
      </h2>
      <p className="text-center text-[15px] w-[510px] max-sm:w-full text-slate-500">
        Save time by reusing your favourite compoennts.Store them in a centralized database and create new components with ease. Enhance ypur development workflow by having quick access to a library of reusable compoenets and  ensure consistency across your projects.
      </p>
      <button 
      className=" block bg-sky-500 rounded-md px-9 py-3 textsm font-medium text-white hover:bg-sky-600"
      type="button"
      >
        
        Lets get started
      </button>
   </div>
     <KeyFeatures/>
    
    </div>
  );
}
