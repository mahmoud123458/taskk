import express from "express";
const app=express();
const students=["Mahmoud","Ahmed","Mostafa","Tarek","Marwan"]
const studentfunction =(request,response)=>{
 let output="<ul>";
 for(let i=0;i<students.length;i++){
    const student=students[i];
    output+="<li>"+student+"</li>"
 }

 output+="</ul>";
 response.send(output);

};


app.get("/students",studentfunction);
app.listen(3000);