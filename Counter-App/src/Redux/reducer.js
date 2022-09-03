import { ADD, DOUBLE, HALF, REDUCE, RESET, SQUARE } from "./actionType";

const reducer = (oldState,action)=>{
    const {type,payload}=action;
    switch(type){
        case ADD:
            return {...oldState,count: oldState.count+payload};
            case REDUCE:
                return {...oldState,count: oldState.count-payload};
                case RESET:
                    return {...oldState,count: oldState.count=0};
                    case DOUBLE:
                        return {...oldState,count: (oldState.count*payload)};
                        case HALF:
                            return {...oldState,count: oldState.count/payload};
                            case SQUARE:
                                return {...oldState,count: oldState.count*oldState.count};
        default:
            return oldState
    }
}
export {reducer}