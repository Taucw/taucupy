import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import CalendarMonth from './Calendar/Month';

class Calendar extends React.Component {
  render() {
    return(
      <div className="calendar">
        <CalendarMonth month="2015-07" />
      </div>
    );
  }
}

export default AuthenticatedComponent(Calendar)
