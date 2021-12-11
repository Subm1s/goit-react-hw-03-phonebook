import s from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contactsArr, deleteContact }) => {
  return (
    contactsArr.length < 1 ? <p className={s.emptyTitle}>Contact list is empty</p> :
     <ul className={s.contactsList}>
      {contactsArr.map(({ name, number, id}) =>
        <li key={id} className={s.contactItem}>
          <p className={s.contactsName}> {name}</p> : <p className={s.contactsNumber}>{number}</p>
          <button className={s.delBtn} onClick={()=> deleteContact(id)} type="button">Delete</button>
        </li>)
      }
      
    </ul>
  )
}

Contacts.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
      
  ).isRequired,
  deleteContact: PropTypes.func.isRequired
  
}

export default Contacts;