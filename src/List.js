import React, { Component } from 'react';

require('./List.css');

class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map(item => {
            return <li key={item}>{item}</li>;
          })
        }
      </ul>);

  }
}

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      initialItems: [
        'Apples',
        'Broccoli', 
        'Chicken', 
        'Duck', 
        'Eggs', 
        'Fish', 
        'Granola', 
        'Hash Browns', 
      ],
      items: []
    };
    this.filterList = this.filterList.bind(this);

  }

  filterList(e) {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(item => {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      items: updatedList

    });
  }

  componentWillMount() {
    this.setState({ items: this.state.initialItems });
    
  }

  render() {
    return (
      <div className='filter-list'>
        <input type='text' placeholder='Search' onChange={this.filterList}/>
        <List items={ this.state.items }/>        
      </div>
      
    );
  }
};

export default FilteredList;
