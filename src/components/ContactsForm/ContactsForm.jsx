import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css'


class ContactsForm extends Component {

  static propTypes = {
    addNewContact: PropTypes.func.isRequired
  }


  state = {
    name: '',
    number: ''
  }

  handlerOnChange = (e) => {
    const {name, value } = e.target
    this.setState({[name]: value})
  }

  hendlerOnSubmit = (e) => {
    e.preventDefault();
    this.props.addNewContact({ ...this.state })
    this.reset()
  }

  reset = () => {
    this.setState({name: '', number: ''})
  }



  render() {
    return (
      <form onSubmit={this.hendlerOnSubmit} className={s.form}>
        <label className={s.inputTitle}> Name
          <input className={s.inputField}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handlerOnChange}
          />
        </label>

        <label className={s.inputTitle}> Number
          <input className={s.inputField}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handlerOnChange}
          />
        </label>

        <button className={s.addContactBtn} type='submit'>Add Contact</button>
      </form>
    )
  }
}

export default ContactsForm;