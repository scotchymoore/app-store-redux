import React from 'react';
import { connect } from 'react-redux';
import { updateApp, addApp} from '../actions/apps'

// import nextId from './reducers/nextId';

  class Form extends React.Component {
  defaultValues = {
    name: '', description: '', category: '', price: '', version: '', author: '', logo: '', featured: ''
  }

  state = { ...this.defaultValues }


  handleSubmit = (e) => {
    e.preventDefault();
    let app = { ...this.state }
    this.props.dispatch(addApp(app));
    this.setState({ ...this.defaultValues })
    this.props.history.push('/apps');
  }

  handleChange = (e) => {
    let {  target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    let { name, price, description, category, version, author, logo, featured } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          id="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="category"
          placeholder="Category"
          value={category}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="version"
          placeholder="Version"
          type="number"
          value={version}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="featured"
          placeholder="featured"
          type="boolean"
          value={featured}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="author"
          placeholder="Author"
          value={author}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="logo"
          placeholder="Logo"
          value={logo}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }
}

const mapStatetoProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStatetoProps)(Form);
