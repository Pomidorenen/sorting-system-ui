import { useCallback } from "react";

const onChangeWrapper = <E extends HTMLElement & {value:string}>
                        (dispatch:React.Dispatch<string>)=>
                            useCallback((e:React.ChangeEvent<E>)=>
                            dispatch(e.target.value),[dispatch]);


export {
    onChangeWrapper
}