var Ipl=()=>{
    const arr=["Faf du Plessis","Virat Kohli ","Glenn Maxwell","Mohammed Siraj","Dinesh Karthik","Vyshak Vijaykumar"]
    const arr1 = [
        "Abdul Samad", "Abhishek Sharma", "Aiden Markram", "Marco Jansen", "Rahul Tripathi",
        "Washington Sundar", "Glenn Phillips", "Sanvir Singh", "Heinrich Klaasen", "Bhuvneshwar Kumar",
        "Mayank Agarwal" ];
    const arr2 =["MS Dhoni (c)","Devon Conway","Ruturaj Gaikwad","Ajinkya Rahane","Ajay Mandal","Nishant Sindhu"]    
    
return (
        
        <>
        <h1>IPL TEAMS </h1>

        <h2>TEAM NAME:RCB(ROYAL CHALLENGE BANGOLRE) </h2>

        <img src="https://i.pinimg.com/736x/27/8f/08/278f08cce7595964a738380ee21c0f22.jpg " height={300} width={300} ></img>
        <h2>PLAYERS:</h2>{
            arr.map(
                (value,index)=><ul>
                    <li>{value}</li>
                   

                </ul>
            )
        }
        
        <h2>TEAM NAME:SRH(SUNRISES HYDERABAD) </h2>
        <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png"></img>
        {
            arr1.map(
                (value,index)=><ul>
                    <li>{value}</li>
                   

                </ul>
            )
        }
        <h2>TEAM NAME:CSK(CHENNAI SUPER KINGS) </h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tiHv3LPb20IXWndfNyqD6Y-zOvRtUXwskyfUf4toSw&s"></img>  
        {
            arr2.map(
                (value,index)=><ul>
                    <li>{value}</li>
                   

                </ul>
            )
        }
        </>
        
         
        
    
    )


}

export default Ipl