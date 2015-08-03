import React from 'react';

class CalendarDay extends React.Component {
  render() {
    return (
      <div>{this.dayNum}
      <div>AM</div>
      <div>PM</div>
      </div>
    );
  }

  get dayNum() {
    return new Date(this.props.day).getDate();
  }
}

export default CalendarDay;
