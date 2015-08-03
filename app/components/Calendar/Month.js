import React from 'react';

class CalendarMonth extends React.Component {
  render() {
    return (
      <div className="calendar_month">
      <h3>{this.month_title}</h3>
      <table>
        {this.rows}
      </table>
      </div>
    );
  }
  get rows() {
    var rows = [];
    for(var rowNum=0;rowNum<5;rowNum++) {
      rows.push(this.row_at(rowNum));
    }
    return rows;
  }

  get month_title() {
    return this.props.current_month[1]+1 + '/' + this.props.current_month[0];
  }

  row_at(rowNum) {
    var days = [];
    for(var i=0; i<7;i++) {
      var date = this.date_at_index(rowNum, i);
      days.push(
        React.createElement('td', null,
          React.createElement(this.props.day_component, {day: date})
          )
        );
    }
    return (<tr>{days}</tr>);
  }

  date_at_index(row, col) {
    return this.month_days.filter((date) => {
      return this.week_day(date) == col;
    })[row];
  }

  week_day(date) {
    return date.getDay() == 0 ? 6 : date.getDay()-1;
  }

  get month_days() {
    var month_length = new Date(this.props.current_month[0], this.props.current_month[1]+1, 0).getDate();
    var output = [];
    for(var i=0;i < month_length; i++) {
      output.push(new Date(this.props.current_month[0], this.props.current_month[1], i+1));
    }
    var first_day = new Date(this.props.current_month[0], this.props.current_month[1], 1);
    for(var i=0; i < this.week_day(first_day); i++) {
      output.unshift(new Date(this.props.current_month[0], this.props.current_month[1], -i));
    }
    for(var i=output.length; i < 35; i++) {
      output.push(new Date(this.props.current_month[0], this.props.current_month[1], i));
    }
    return output;
  }
}

export default CalendarMonth;
