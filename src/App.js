import React from 'react';
import Profile from './Profile/Profile'
let Bio="étudiant en informatique de gestion qui a chager de passage aux devloppoment web "
const styleObjet={
  textAlign: "center",
  backgroundColor:"#282c34",
  minHeight: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 38,
  color: "orange",
}
const App=()=> {
  const handleName = (name)=>{
    alert(`Thank you for your visit to the profile of ${name}`);
  }
  return (
    <div style={styleObjet} >
      <Profile
      fullName ="Wassim Barhoumi"
      Profession="Devloppeur web FS js"
      Bio={Bio}
      handleName={handleName}
      >
        < img src = "/Photo.jpg" alt="Profilephoto" className="Photo" style={{width: 120,}}/>
      </Profile>  
    </div>
  );
}

export default App;



