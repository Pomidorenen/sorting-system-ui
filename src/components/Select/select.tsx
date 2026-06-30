

function Select({title, options}:Select.ISelectProps){
    return(<div>
            {title?<span>{title}</span>:<></>}
            <select>
                {options.map(()=>{
                    return <option></option>
                })}
            </select>
        </div>
    );
}


export default Select;