function Userslist(props){
const {userObj}=props
    return(
        
        <div className="shadow-2xl pr-1 pl-1 pt-5 pb-5 rounded-2xl border-2" >
            <img src={userObj.image} alt="img here" className="block mx-auto rounded-full"/>
            <h2 className="font-bold text-center">{userObj.name}</h2>
            <p className="text-m text-center">{userObj.email}</p>
            
        </div>
    )

}


export default Userslist