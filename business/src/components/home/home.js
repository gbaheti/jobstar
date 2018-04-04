import { h, Component } from 'preact';
import cx from 'classnames';

import logo from '../../assets/logo.svg';
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
        <div class={style.logoWrapper}>
          <img src={logo} class={style.logo} alt="" />
          <p class={style.logoText}>
            <span class={style.flag}>🇮🇳 </span>Made in India
          </p>
        </div>
        <div class={style.main}>
          <div class={style.content}>
            <h1 class={style.head}>Hire part-time workers who get the job done.</h1>
            <ul class={style.featuresList}>
              <li>
                <p>👫</p>
                <div class={style.featuresDesc}>
                  <h4>Quality first.</h4>
                  <p>Pre-screened workers only</p>
                </div>
              </li>
              <li>
                <p>⏱️</p>
                <div class={style.featuresDesc}>
                  <h4>Fast service.</h4>
                  <p>Hire only for your urgent needs</p>
                </div>
              </li>
              <li>
                <p>💯</p>
                <div class={style.featuresDesc}>
                  <h4>Zero hassle.</h4>
                  <p>Get the jobs done</p>
                </div>
              </li>
            </ul> 
            <div class={style.cardWrapper}>
              <div class={style.cardListWrapper}>
                <ul class={cx(style.cardList, style.cardListLeft)}>
                  <li class={style.card} onClick={() => {this.props.openModal(options[0])}}>
                    <img src="http://via.placeholder.com/300x150" />
                    <p>Category</p>
                  </li>
                  <li class={style.card} onClick={() => {this.props.openModal(options[1])}}>
                    <img src="http://via.placeholder.com/300x150" />
                    <p>Category</p>
                  </li>
                </ul>
                <ul class={cx(style.cardList, style.cardListRight)}>
                <li class={style.card} onClick={() => {this.props.openModal(options[2])}}>
                    <img src="http://via.placeholder.com/300x150" />
                    <p>Category</p>
                  </li>
                  <li class={style.card}>
                    <img src="http://via.placeholder.com/300x150" />
                    <p>Category</p>
                  </li>
                </ul>
              </div>
            </div>
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
