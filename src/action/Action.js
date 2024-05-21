export const addCart=(item)=>{
    return{
        type:"ADD_CART",
        data: item
    }
}
export const removeCart=(item)=>{
    return{
        type:"REMOVE_CART",
        data: item
    }
}