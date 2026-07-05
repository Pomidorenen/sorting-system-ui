import styles from "./table.module.css";
function Table({header,body,className, ...props}:Table.ITableProps){
    return (<table className={[styles.table,className].join(" ")} {...props}>
            <thead className={styles["table-head"]}>
                <tr>
                    {
                     header.map(({text},i)=>{
                        return (<th key={i}>
                                    <span>{text}</span>
                            </th>);
                        })                          
                    }
                </tr>
            </thead>
            <tbody  className={styles["table-body"]}>
                {
                    body.map((item,i)=>{
                        return (<tr key={i}>
                                {
                                    item.map((el,i)=>{
                                        return (<td key={i}>
                                                    {el}
                                                </td>);
                                    })
                                }
                        </tr>);
                    })
                }
            </tbody>
        </table>);
}


export default Table;