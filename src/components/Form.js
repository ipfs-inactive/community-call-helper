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
    name: 'JavaScript Working Group',
    callTitle: 'JS-IPFS Community Call',
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
    this.props.onSubmit(this.state);
      // this.props.onSubmit(this.state)
      // console.log(this.state);
      // this.setState({
      //   name: '',
      //   callTitle: '',
      //   callTime: '',
      //   announcmentText: '',
      //   callLink: '',
      // })
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
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

AnnouncementForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnouncementForm);