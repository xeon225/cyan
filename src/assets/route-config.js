import App from '../components/cyan/App.vue';
import Badge from '../components/badge/App.vue';
// import SelectAll from '../components/selection/select.vue';
// import Transition from '../components/selection/transition.vue';

// import Scales from '../components/scaleLinear/App.vue';

export default {
	'/': {
		component: App						//默认
	},
		'badge': {
			component: Badge			//核心
		}
}