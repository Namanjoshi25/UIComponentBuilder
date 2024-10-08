import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
function features() {
    
    const features = [
        {
        id: 1,
        name: "Centralized Component Library",
        icon: <StorageIcon  className="text-sky-500 text-[32px]" />,
        description: `Organize all your React components in a centralized library.
        Easily browse, search, and access your saved components whenever
        you need them`
        },
        {
        id: 2, 
        name: "Reusable Components",
        icon: <CodeIcon className="text-sky-500 text-[32px]" />,
        description: `Create and edit your React components directly within our
        intuitive editor. Write JSX code with syntax highlighting and
        instant previews.`
        },
        {
        id: 3,
        name: "Version Control and History",
        icon: <ChangeHistoryIcon Icon className="text-sky-500 text-[32px]" />,
        description: `Track changes and maintain different versions of your
        components. Revert to previous versions if needed and keep a
        history of modifications.`
        }
        ]
        

    return (
        <section className=" py-12 lbg-slate-50 mt-12">
        <div className=" mx-auto px-4">
        <h2 className="text-2x1 font-bold text-center">Key Features</h2>
        {/* */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
        <div
        key={index}
        className=" p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
        >
        <div className="w-20 h-20 rounded-full items-center justify-center flex bg-sky-100">
        {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-sky-500 mt-6 text-center">
        {feature.name}
        </h3>
        <p className="text-slate-600 text-[13px] mt-2 text-center w-[80%]">
        {feature.description}
        </p>
      
        </div>
        ))}
        </div>
        </div>
        
        </section>
  )
}

export default features