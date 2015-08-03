import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import CalendarMonthView from './Calendar/MonthView';
import CalendarDay from './Calendar/Day';
class Calendar extends React.Component {
  render() {
    return(
      <div className="calendar">
        <CalendarMonthView initial_month={this.current_month} day_component={CalendarDay} />
      </div>
    );
  }

  get current_month() {
    return [new Date().getFullYear() , new Date().getMonth()];
  }
}

export default AuthenticatedComponent(Calendar)
