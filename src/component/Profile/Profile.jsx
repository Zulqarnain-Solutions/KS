import { useEffect, useState } from "react";
import { updateUserDetails } from "../../api/authApi";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const [formData, setFormData] = useState({
    userName: "",
    email: ""
  });
  const [fileName, setFileName] = useState("none");
  const [avatar, setAvatar] = useState(null); // store file object
  const [isEditing, setIsEditing] = useState(false);
  const {user} = useAuth();


  useEffect(() => {
  if (user?.data) {
    setFormData({
      userName: user.data.userName,
      email: user.data.email
    });
  }
}, [user]); 


  const handleChange = (e) => {

    if(e.target.files?.length > 0){
      let file = e.target.files?.[0];
      // let file = e.target.files?.[0].name;
      console.log(file);
      // console.log(e.target.files[0].name)
      console.log(URL.createObjectURL(file));
      // setFileName(e.target.files[0].name);
      setAvatar(file);
      setFileName(URL.createObjectURL(file));
      return
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);

    try {
      // console.log({...formData, avatar: fileName});
      const form = new FormData();
      form.append("userName", formData.userName);
      form.append("email", formData.email);

      if (avatar) {
        form.append("avatar", avatar); // ✅ THIS is what multer needs
      }
      // form.append("name", "Hi")
console.log([...form.entries()])
// for (let pair of form.entries()) {
//   console.log(pair);
// }
      const response = updateUserDetails(form);
      
    } catch (error) {
      console.log("EEEEEEEEE", error)
    }
    setIsEditing(false);
  };
// https://i.pravatar.cc/150
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

{/* || user?.data?.avatar */}
        {/* Header */}
        <div className="bg-green-600 h-32 relative">
          <div className=" flex items-center justify-center absolute -bottom-12 left-6 bg-green-50 rounded-full w-24 h-24 border-4 border-white object-cover">
            {
              user?.data?.avatar?
              <img
              src={`${user?.data?.avatar || fileName } `}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-white object-cover relative"
            /> :
              <i className="fi fi-rs-user text-3xl " style={{color:"gray"}}></i>
            }
            {/* <img
              src={`${user?.data?.avatar || fileName } `}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-white object-cover relative"
            /> */}
            <div className="w-8 h-8 rounded-full bg-green-100 absolute top-15 right-0 flex justify-center">
              <input type="file" id="fileInput" hidden name="fileName" onChange={handleChange}/>
              <label htmlFor="fileInput" >📷</label>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 pb-8 px-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {formData.userName}
              </h2>
              <p className="text-gray-500 text-sm">{formData.email}</p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Username */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Username
              </label>
          
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:bg-gray-100"
              />
            </div>

    
            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}









// const input = document.getElementById("fileInput");
// const fileName = document.getElementById("fileName");

// input.addEventListener("change", function () {
//   if (this.files.length > 0) {
//     fileName.textContent = this.files[0].name;
//   } else {
//     fileName.textContent = "None";
//   }
// });























// import { useState } from "react";

// export default function ProfileDashboard() {
//   const [activeTab, setActiveTab] = useState("account");

//   const [formData, setFormData] = useState({
//     userName: "John Doe",
//     email: "john@example.com",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">

//       {/* Sidebar */}
//       <div className="w-80 bg-white border-r p-6">
//         <div className="flex flex-col items-center text-center">
//           <img
//             src="https://i.pravatar.cc/150"
//             alt="avatar"
//             className="w-24 h-24 rounded-full mb-4"
//           />
//           <h2 className="text-lg font-semibold">{formData.userName}</h2>
//           <p className="text-gray-500 text-sm">{formData.email}</p>
//         </div>

//         {/* Menu */}
//         <div className="mt-8 space-y-2">
//           {["account", "security"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`w-full text-left px-4 py-2 rounded-lg capitalize ${
//                 activeTab === tab
//                   ? "bg-indigo-100 text-indigo-600"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-10">

//         {/* ACCOUNT TAB */}
//         {activeTab === "account" && (
//           <div className="max-w-xl">
//             <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="userName"
//                 value={formData.userName}
//                 onChange={handleChange}
//                 placeholder="Username"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//               />

//               <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         )}

//         {/* SECURITY TAB */}
//         {activeTab === "security" && (
//           <div className="max-w-xl">
//             <h1 className="text-2xl font-semibold mb-6">Security</h1>

//             <div className="space-y-4">
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="New Password"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//               />

//               <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
//                 Update Password
//               </button>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }