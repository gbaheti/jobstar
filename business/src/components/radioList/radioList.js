import { h, Component } from 'preact';
import cx from 'classnames';

import style from './style';

export default class RadioList extends Component {
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
                  <input type='radio' name='radio' value={option} onChange={this.handleChange}/>
                  <label>{option}</label>
                </li>
              )
            })
          }
        </ul>
      </div>
		);
	}
}