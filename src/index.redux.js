
const ADD_GUAN = '加机关枪';
const REMOVE_GUAN = '减机关枪'

// reducer
export function counter(state=0,action){
    switch(action.type){
        case ADD_GUAN:
            return state+1; 
        case REMOVE_GUAN:
            return state-1;
        default:
            return 10;
    }
}

// action creator
export function addGuan() {
    return {type:ADD_GUAN};
}
export function removeGuan() {
    return {type:REMOVE_GUAN};
}
// 异步
export function addGuanAsync(){

}