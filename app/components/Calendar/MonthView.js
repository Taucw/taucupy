import React from 'react';
import CalendarMonth from './Month';
class CalendarMonthView extends React.Component {

  constructor(props) {
    super(props);
    this._initState();
  }

  _initState() {
    this.state = {
      current_month: this.props.initial_month
    }
  }

  toNextMonth(e) {
    e.preventDefault();
    this.setState({current_month: [this.next_date().getFullYear(), this.next_date().getMonth()]});
  }

  toPreviousMonth(e) {
    e.preventDefault();
    this.setState({current_month: [this.previous_date().getFullYear(), this.previous_date().getMonth()]});
  }

  previous_date() {
    return new Date(this.current_date() - (60*24*60*60*1000));
  }

  next_date() {
    return new Date(this.current_date() + (30*24*60*60*1000));
  }

  current_date() {
    return new Date(this.state.current_month[0],(this.state.current_month[1]+1),15, 0, 0, 0);
  }
  render() {
    return (
      <div className="calendar_month_view">
        <div className="btn btn-group btn-block">
          <a className="btn btn-default" onClick={this.toPreviousMonth.bind(this)}>Previous</a>
          <a className="btn btn-default" onClick={this.toNextMonth.bind(this)}>Next</a>
        </div>
        <CalendarMonth current_month={this.state.current_month} day_component={this.props.day_component} />
      </div>
    );
  }
}

export default CalendarMonthView;
