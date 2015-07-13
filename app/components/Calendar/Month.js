import React from 'react';

class CalendarMonth extends React.Component {
  render() {
    return (
      <div className="month" month="{this.props.month}">
        {this.props.month}
      </div>
    );
  }
}

export default CalendarMonth;
