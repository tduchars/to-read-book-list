import React from 'react';
import AddBook from './AddBook';

class Booklist extends React.Component {
  state = {
    list: [
      {
        name: 'Learning Python',
        author: "O'Reily"
      },
      {
        name: 'The God Delusion',
        author: 'Richard Dawkins'
      },
      {
        name: 'Fingerprints of the Gods',
        author: 'Graham Hancock'
      }
    ]
  };
  addBook = bookInfo => {
    this.setState(currentState => {
      return {
        list: [...currentState.list, bookInfo]
      };
    });
  };
  deleteBook = idx => {
    this.state.list.splice(idx, 1);
    this.setState({ list: this.state.list });
  };
  render() {
    const { list } = this.state;
    return (
      <div className="book-shelf">
        {list.map((book, idx) => {
          return (
            <ul key={idx}>
              <li className="books">
                {book.name}
                <br />
                by {book.author}
                <button
                  className="delete-button"
                  onClick={() => {
                    this.deleteBook(idx);
                  }}
                >
                  &#10008;
                </button>
              </li>
            </ul>
          );
        })}
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
}

export default Booklist;
