function List({children, ...props}){
    return <ul>{children}</ul>
}


function ListItem({name, children, onClick, ...props}) {
    return (
        <li onClick={onClick}>
            {name}
            {children}
        </li>
    )
}

export {List, ListItem}