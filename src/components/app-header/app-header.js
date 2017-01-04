import template from './app-header.html';
import styles from './app-header.scss';

export default {
    template,
    controller
};

controller.$inject = ['authService'];

function controller(authService) {
    this.styles = styles;
    this.action = 'signup';


    this.login = () => {
        this.credentials = {
            username: this.username,
            password: this.password
        };
        if (this.action === 'signup') {
            authService.signup(this.credentials)
                .then(res => {
                    console.log('signed up as', res);
                    this.currentUser = res;
                })
                .catch(err => {
                    console.log('signup catch', err);
                });
        } else if (this.action === 'signin') {
            authService.signin(this.credentials)
                .then(res => {
                    console.log('signed in as', res);
                    this.currentUser = res;
                })
                .catch(err => {
                    console.log('signup catch', err);
                });
        }
    };

}