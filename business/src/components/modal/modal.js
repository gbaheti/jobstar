import { h, Component } from 'preact';
import cx from 'classnames';

import style from './style';
import crossIcon from '../../assets/cross.svg';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      module: null,
      moduleProps: null,
      moduleAnswer: null,
      isOver: false
    }
  }
  componentDidMount() {
    const response = this.getDataFromAPI(this.props.category);

    this.loadComponent(response);
  }
  loadComponent = (response) => {
    if(response === false) {  
      import('../greeting/greeting')
        .then(module => {
          this.setState({
            module: module.default,
            moduleProps: {
              title: 'Your response has been recorded'
            },
            isOver: true
          });
        });
    }

    if(response.answers.type === 'radioList') {
      import(`../${response.answers.type}/${response.answers.type}`)
        .then(module => {
          this.setState({
            module: module.default,
            moduleProps: {
              options: response.answers.options,
              title: response.question
            }
          });
        });
    } else if(response.answers.type === 'textField') {
      import(`../${response.answers.type}/${response.answers.type}`)
        .then(module => {
          this.setState({
            module: module.default,
            moduleProps: {
              options: response.answers.options,
              title: response.question
            }
          });
        });
    }
  }
  getDataFromAPI = (category) => {
    const response = {
      'audit': {
        category: 'audit',
        question: 'What is the age of Naruto?',
        answers: {
          type: 'radioList',
          options: ['12-15', '8-10', '14-17', '20-22']
        }
      },
      'paint': {
        category: 'paint',
        question: 'Sample text field question',
        answers: {
          type: 'textField',
          options: ['Age', 'Family members', 'Something else']
        }
      }
    };

    if(category === 'audit') {
      return response['audit'];
    } else if(category === '12-15') {
      return response['paint'];
    } else {
      return false;
    }
  }
  updateChange = (value) => {
    this.setState({
      moduleAnswer: value
    });
  }
  nextState = () => {
    if(this.state.isOver) {
      this.props.onClose();
    }

    if(this.state.moduleAnswer) {
      // Send data to api and fetch response
      const response = this.getDataFromAPI(this.state.moduleAnswer);

      this.loadComponent(response);

      this.setState({
        moduleAnswer: null
      });
    } else {
      alert('Cannot be left blank!!!!!')
    }
  }
	render() {
    const {module: DynamicComponent} = this.state;

		return (
      <div class={style.modal}>
        <div class={style.header}>
          <h1>{this.props.title}</h1>
          <button class={cx(style.btn, style.btnCircle)} onClick={this.props.onClose}>
            <img src={crossIcon} />
          </button>
        </div>
        {
          this.state.module ? <DynamicComponent {...this.state.moduleProps} updateChange={this.updateChange}/> : null
        }
        <div class={style.footer}> 
          <button class={cx(style.btn, style.btnRectangle)} onClick={this.nextState}>
            {
              this.state.isOver ? 'Finish' : 'Next'
            }
          </button>
        </div>
      </div>
		);
	}
}