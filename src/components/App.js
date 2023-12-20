import React, { useState} from "react";
import '../styles/App.css';

let arr=["Siblings","Friends","Love","Affection","Marriage","Enemy",];

const App=()=> {

    const [name1,setName1]=useState("");
    const [name2,setName2]=useState("");
    const [relationship,setRelationship]=useState("");

    function calculateRelationship(e){
        e.preventDefault();

        if(name1.trim()==="" || name2.trim()===""){
            setRelationship("Please Enter valid input");
        }

        else{
            let str1=name1;
            let str2=name2;

            for(let t of str1){
                if(str2.includes(t)){
                    str1=str1.replace(t,"");
                    str2=str2.replace(t,"");
                }
            }
            setName1(str1);
            setName2(str2);

            setRelationship(arr[(str1.length+str2.length)%6]);
        }
    }


    return(
        <div id="main">
            <form>
                <input type="text" data-testid="input1" 
                  onChange={(e)=>setName1(e.target.value)}
                  value={name1}
                 />
                <input type="text" data-testid="input2" onChange={(e)=>setName2(e.target.value)}/>
                <button data-testid="calculate_relationship" type="submit" 
                value={name2}
                    onClick={calculateRelationship}
                >Calculate Relationship Future</button>
                <button data-testid="clear" type="reset"
                    onClick={
                        ()=>{
                            setName1="";
                            setName2="";
                        }
                    }
                >Clear</button>
            </form>

            <h3 data-testid="answer">{relationship}</h3>

        </div>
    )
}


export default App;
