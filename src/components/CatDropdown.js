import {NavDropdown} from 'react-bootstrap'

const CatDropdown = (props) => {
    return (
    <>
    {props.categories.map(category => {
        return <NavDropdown.Item href={`/categories/${category.id}/cases`}>{category.name}</NavDropdown.Item>
    }
        )}
        
    </>
    )
} 

export default CatDropdown;