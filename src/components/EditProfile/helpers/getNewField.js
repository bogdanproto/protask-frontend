export const getNewField = (values)=>{
  const {userName, email} = values
  let changeField;
if (userName) {
  changeField = { userName: userName };  }
if (email) {
  changeField = { ...changeField, email };
}  
if(changeField){
   return changeField; 
}
}

