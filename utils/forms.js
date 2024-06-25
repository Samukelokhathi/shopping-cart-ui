
export function getFormData(id,submitHandler){
    const form =document.querySelector(`#${id}`);
    const inputs = form.querySelectorAll('input');

    form.addEventListener("submit",(event)=>{
        event.preventDefault();

        let dataObj={}

        for (let input of inputs){
            dataObj[`${input.name}`]=input.value;
        }

        submitHandler(dataObj)
        
    })
}

export function setFormData(id,data){
    const form = document.querySelector(`#${id}`)
    const inputs = form.querySelectorAll("input")
    
    for(let input of inputs){
        input.value=data[input.name]
    }


}