var express = require('express');


var app = express();

var data = [
    {ID:'1',Fname:'Rahul',Lname:'Rao',Mob: 9852145632,Add:'23/24,Kolathur',City:'Chennai',zip:'600018',email:'rrahul97@gmail.com'},
    {ID:'2',Fname:'Rohit',Lname:'Sharma',Mob: 1234567890,Add:'M.G. Road',City:'Bangalore',zip:'400016',email:'rsharma7@gmail.com'},
    {ID:'3',Fname:'Kunal',Lname:'Kamra',Mob: 9874563210,Add:'58,Indira Nagar',City:'Bangalore',zip:'400058',email:'KunalK01@gmail.com'},
    {ID:'4',Fname:'Shawn',Lname:'Mendes',Mob: 1593578520,Add:'Mysore Road',City:'Bangalore',zip:'400048',email:'shawn0152@gmail.com'},
    {ID:'5',Fname:'Merlin',Lname:'Manroe',Mob: 7896541230,Add:'Bannurgetta Road',City:'Bangalore',zip:'400068',email:'merlinK@gmail.com'},
    {ID:'6',Fname:'Sanjana',Lname:'Krish',Mob: 148523690,Add:'WhiteField',City:'Bangalore',zip:'400018',email:'sanjkay@gmail.com'},

];

var contact = [];
for(i in data){
    contact.push(data[i].Fname);
    contact.push(data[i].Lname);
    contact.push(data[i].Mob);
    
}
 

app.get("/all", function(req,res){
    
    res.send(JSON.stringify(contact));   
})


//Express running on port 3000
app.listen(3000, function (req,res) {
    console.log('Express server listening on port 3000');    
  });