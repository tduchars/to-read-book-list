import React, { Component } from 'react';

class AddBook extends Component {
  state = {
    bookName: '',
    bookAuthor: '',
    prompt: false
  };
  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.bookName.length === 0 ||
      this.state.bookAuthor.length === 0
    ) {
      this.setState({
        prompt: true
      });
    } else {
      const bookInfo = {
        name: this.state.bookName,
        author: this.state.bookAuthor
      };
      this.props.addBook(bookInfo);
      this.setState({ bookName: '', bookAuthor: '' });
    }
  };
  render() {
    const { bookAuthor, bookName, prompt } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="add-book-form">
          <br />
          <input
            type="text"
            value={bookName}
            onChange={e => {
              this.handleInput('bookName', e.target.value);
            }}
            name="bookName"
            className="add-book-input"
            placeholder="Book Name..."
          />
          <input
            type="text"
            value={bookAuthor}
            onChange={e => {
              this.handleInput('bookAuthor', e.target.value);
            }}
            name="authorName"
            className="add-author-input"
            placeholder="Author..."
          />
          <br />
          <button className="submit-book" type="submit">
            Add Book
          </button>
        </form>
        {prompt && (
          <h5 className="empty-prompt">Make sure no fields are left empty!</h5>
        )}
      </>
    );
  }
}

export default AddBook;
