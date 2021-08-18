const List = ({listItems, deleteTask}) => {

    return (
        <div>
            <ul className="listItems">
                {
            listItems && listItems.map( x => {
            return (<li key={x.id}>
            <input type="checkbox" value = {x.id} onChange={() => deleteTask(x.id)}/> {x.name}
            </li>)
            } 
             )
            }
            </ul>
        </div>
    )

}

export default List;