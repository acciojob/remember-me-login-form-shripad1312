//your JS code here. If required.
const user=document.getElementById("username");
const pass=document.getElementById("password");
const check=document.getElementById("checkbox");
const btn=document.getElementById("submit");
const exist=document.getElementById("existing");
// console.log(user,pass,check,btn);
let d=localStorage.getItem("values");
let y=JSON.parse(d);
if(d){
	exist.style.display="flex"
	// btn.setAttribute('id','existing ');
	// btn.value="Login as existing user";
}
// console.log(btn.id);
btn.addEventListener("click",()=>{
	
	let u=user.value;
	let p=pass.value;
	let obj={
		name:u,
		 ps:p
	}
	let x=JSON.stringify(obj);

	if(check.checked){
		localStorage.setItem("values",x);
	}else{
		localStorage.removeItem("values");
	}
	let y=JSON.parse(x);
	alert(`Logged in as ${y.name}`);
	
	
})

exist.addEventListener("click",()=>{
	alert(`Logged in as ${y.name}`)
})



