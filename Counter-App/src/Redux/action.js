import { ADD, DOUBLE, HALF, REDUCE, RESET, SQUARE } from "./actionType"

const handleAddActionObj = (payload)=>{
    return{
        type:ADD,
        payload,
    }
}

const handleReduceActionObj = (payload)=>{
    return{
        type:REDUCE,
        payload,
    }
}
    const handleResetActionObj = (payload)=>{
        return{
            type:RESET,
            payload,
        }
    }
        const handleDoubleActionObj = (payload)=>{
            return{
                type:DOUBLE,
                payload,
            }
        }
            const handleHalfActionObj = (payload)=>{
                return{
                    type:HALF,
                    payload,
                }
            }
                const handleSquareActionObj = (payload)=>{
                    return{
                        type:SQUARE,
                        payload,
                    }
}

export {handleAddActionObj,handleReduceActionObj,handleResetActionObj,handleDoubleActionObj,handleHalfActionObj,handleSquareActionObj}   