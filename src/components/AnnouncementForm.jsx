import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class AnnouncementForm extends React.Component {
  state = {
    name: '',
    callTitle: 'JS-IPFS Community Call',
    callTime: '18:30 UTC',
    announcmentText: '',
    callLink: '',
  };

//   handleChange = name => event => {
//     this.setState({
//       [name]: event.target.value,
//     });
//   };
  change = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

  onSubmit = e => {
      e.preventDefault()
    //   this.props.onSubmit()
      this.props.onSubmit(this.state)
      console.log(this.state);
      this.setState({
        name: '',
        callTitle: '',
        callTime: '',
        announcmentText: '',
        callLink: '',
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          name = "name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={e => this.change(e)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          name="callTitle"
          label="Title of Call"
          className={classes.textField}
          value={this.state.callTitle}
          onChange={e => this.change(e)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          name="callTime"
          label="Time of Call"
          className={classes.textField}
          value={this.state.callTime}
          onChange={e => this.change(e)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          name="announcementText"
          label="Announcement"
          className={classes.textField}
          value={this.state.announcementText}
          onChange={e => this.change(e)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          name="callLink"
          label="Call Link"
          className={classes.textField}
          value={this.state.callLink}
          onChange={e => this.change(e)}
          margin="normal"
        />
        <br />
        <button onClick = {e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

AnnouncementForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnouncementForm);