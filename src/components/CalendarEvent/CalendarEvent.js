import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  client: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};


class Event extends Component {
  render() {
    const {
      start,
      end,
      client,
      service
    } = this.props;
    return (
      <div className="event">
        <span>{`${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>
        <br /><br />
        {client} - {service}
      </div>
    );
  }
}

Event.propTypes = propTypes;
export default Event;