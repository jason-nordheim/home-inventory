import { error } from "console"

const baseUrl = 'http://localhost:3000'

class ActionResult{
    constructor(success=true, data){
        this.success = success 
        this.data = data 
    }
}

export const login = async (username, password) => {
    try{
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({username, password})
        })
        const data = await response.json() 
        
        if (response.status != 201){
            return new ActionResult(false, data)
        } else {
            return new ActionResult(true, data)
        }
    } catch (err) {
        return new ActionResult(false, err)
    }
}