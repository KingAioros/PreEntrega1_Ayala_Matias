
const ListaNav = ({name, class1, class2}) => {
  return (
    <li className={class1}>
        <a className={class2} href="#">{name}</a>
    </li>
  )
}
// nav-item
// nav-link
export default ListaNav