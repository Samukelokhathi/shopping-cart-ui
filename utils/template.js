export default function drawTemplate(id, data) {
    const template = document.querySelector(`#${id}.template`);
    const parent = template.parentElement;
    template.classList.add("hidden");
    
    const templateStr = template.innerHTML;
    
    for (let d of data) {
        let newTemplateStr =templateStr;
        
        for (let key in d) {
            newTemplateStr = newTemplateStr.replace(new RegExp(`data.${key}`, 'g'), d[key]);
        }
        
        let t = template.cloneNode(); // Deep clone the template
        t.innerHTML = newTemplateStr;
        t.classList.remove("hidden");
        parent.appendChild(t);
    }
}

export function clearTemplate(id){
    const template = document.querySelector(`#${id}.template`)
    const parent =template.parentElement;
    parent.innerHTML=''; 
    parent.appendChild(template);
}

export function addListenerToTemplate(templateId,listenerClass,listenCallback){
    const template=document.querySelector(`#${templateId}.template`);
    const parent=template.parentElement;
    const templates=parent.querySelectorAll(".template")
    
    for(let template of templates){
        let listeners=template.querySelectorAll(`.${listenerClass}`);

        for (let listener of listeners){
        
            listener.addEventListener("click",(event)=>{
                listenCallback(event.target.id);
            })
        }
    }
}