import React from 'react'

class ListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: null,
        content: null,
        status: null,
        dependentItems: []
      };
    }
}

export default ListItem;
  