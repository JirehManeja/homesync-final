import './DevicesListItem.css'

function DevicesListItem({ name, category }) {
    return(
        <div className="dev-list-item-container">
            <span className="dev-list-item-name">{name}</span>
            <span className="dev-list-item-category">{category}</span>
        </div>
    )
}

export default DevicesListItem