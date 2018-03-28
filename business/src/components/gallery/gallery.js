import { h, Component } from 'preact';
import cx from 'classnames';

import style from './style';

export default class Gallery extends Component {
	render() {
		return (
      <div class={style.gallery}>
        <div class={cx(style.background, style.overlay)}>
          <p class={style.description}>“Jobstar has been a great resource to help us meet spikes in our demand during Maha bachat sales - a previously unavailable solution that has allowed us a lot of flexibility in managing the headcount in our stores.”
            <br />
            <span class={style.title}>Zone Head - Future Group</span>
          </p>
        </div> 
    </div>
		);
	}
}
