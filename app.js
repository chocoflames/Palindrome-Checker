const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");

txtInput.addEventListener("keyup", () => {
    //removing spaces & all special character from entered value
    let filterInput = txtInput.value.replace(/[^A-z0-9]/ig, "")
    if(filterInput){
        return checkBtn.classList.add("active")
    }
    return checkBtn.classList.remove("active")

})