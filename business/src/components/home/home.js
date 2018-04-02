import { h, Component } from 'preact';

import style from './style';
import arrowRight from '../../assets/arrow-right.svg';

export default class Home extends Component {
  redirect = (e) => {
    window.location.href = '/hire'; 
  }

	render() {
    const options = [{
      title: 'Let me help you find someone to audit!!',
      category: 'audit'
    }, {
      title: 'Title 2',
      initiator: 'service 2'
    }, {
      title: 'Title 3',
      initiator: 'service 3'
    }];

		return (
      <div class={style.container}>
        <div class={style.main}>
          <div class={style.content}>
            <h1 class={style.head}>Hire part-time/temp workers who get the job done.</h1>
            <ul class={style.featuresList}>
              <li onClick={() => {this.props.openModal(options[0])}}>
                <p>👫</p>
                <div class={style.featuresDesc}>
                  <h4>Quality first.</h4>
                  <p>Pre-screened workers only</p>
                </div>
              </li>
              <li onClick={() => {this.props.openModal(options[1])}}>
                <p>⏱️</p>
                <div class={style.featuresDesc}>
                  <h4>Fast service.</h4>
                  <p>Hire only for your urgent needs</p>
                </div>
              </li>
              <li onClick={() => {this.props.openModal(options[2])}}>
                <p>💯</p>
                <div class={style.featuresDesc}>
                  <h4>Zero hassle.</h4>
                  <p>Get the jobs done</p>
                </div>
              </li>
            </ul>
            <button class={style.btn} type="button" onClick={this.redirect}>start hiring
              <img src={arrowRight} alt="arrow-right" class={style.arrowRight} />
            </button>
            <p class={style.note}>only in delhi ncr</p>
          </div>
        </div>
      </div>
		);
	}
}
