
import { moveTo } from "./utils/navigation";
import { getFormData, setFormData} from "./utils/forms";
import { post } from "./utils/axios";
import { get,del } from "./utils/axios";
import drawTemplate, {addListenerToTemplate, clearTemplate} from "./utils/template";

getFormData('register-form',async (data)=>{
  try{
    const resp=await post('/api/register',data)
  }catch(err){
    alert(err.response.data.message)
  }
  
})

getFormData('login-form',async (data)=>{
  try{
    const resp=await post('/api/login',data)
    localStorage.setItem('token',resp.data.token)
    moveTo("home")
  }catch(err){
    alert(err.response.data.message)
  }
})

getFormData('add-product-form',async (data)=>{
  try{
    const resp=await post('/api/products',data)
    
    moveTo("home")

    clearTemplate("product-template")

    getProducts();

  }catch(err){

  }
})

const  getProduct = async(id)=>{
  try{
    const resp = await get(`/api/products/${id}`)
    console.log(resp.data)
    setFormData("edit-product",resp.data)

    }catch (err){
      console.log(err)
  }
}

const getProducts=(async () => {
  try {
    const resp = await get('/api/products')
    // console.log(resp.data.data)

    clearTemplate('product-template')

    drawTemplate('product-template',resp.data)

    addListenerToTemplate("product-template","delete-product",(id)=>{
      removeProduct(id)
      getProducts();
    })


    addListenerToTemplate('product-template','edit-product',(id)=>{
      // console.log(id)
      moveTo("edit-product")
      getProduct(id)
      

    })

    return resp.data.data;

  } catch (error) {
    console.error(error)
  }
});

getProducts();

const removeProduct = async (id) => {
  try{

    const resp = await del(`/api/products/${id}`)
    // console.log(resp)

  }catch(err){
    console.error(err)
  }
}

if(localStorage.getItem('token')){
  moveTo('home')
}else{
  moveTo('login')
}

