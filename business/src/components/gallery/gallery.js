import { h, Component } from 'preact';
import cx from 'classnames';

import style from './style';
import logo from '../../assets/logo.svg';

export default class Gallery extends Component {
	render() {
		return (
      <div class={style.gallery}>
        <div class={cx(style.background, style.overlay)}>
          <div class={style.logoWrapper}>
            <img src={logo} class={style.logo} alt="" />
            <p class={style.logoText}>
              <span class={style.flag}>🇮🇳 </span>Made in India
            </p>
          </div>
          <p class={style.description}>“Jobstar has been a great resource to help us meet spikes in our demand during Maha bachat sales - a previously unavailable solution that has allowed us a lot of flexibility in managing the headcount in our stores.”
            <br />
            <span class={style.title}>Zone Head - Future Group</span>
          </p>
        </div> 
    </div>
		);
	}
}
