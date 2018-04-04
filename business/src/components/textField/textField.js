import { h, Component } from 'preact';
// import cx from 'classnames';

import style from './style';

export default class TextField extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.updateChange(e.target.value);
  } 
	render() {
		return (
      <div class={style.wrapper}>
        <h2 class={style.title}>{this.props.title}</h2>
        <ul class={style.list}>
          {
            this.props.options.map(option => {
              return (
                <li class={style.listItem}>
                  <label>{option}</label>
                  <input type='text' name='radio' onChange={this.handleChange}/>
                </li>
              )
            })
          }
        </ul>
      </div>
		);
	}
}