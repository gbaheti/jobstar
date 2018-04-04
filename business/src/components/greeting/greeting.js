import { h, Component } from 'preact';
// import cx from 'classnames';

import style from './style';
import checkmarkIcon from '../../assets/checkmark.png';

export default class TextField extends Component { 
	render() {
		return (
      <div class={style.wrapper}>
        <p class={style.title}>{this.props.title}</p>
        <img class={style.check} src={checkmarkIcon} />
      </div>
		);
	}
}