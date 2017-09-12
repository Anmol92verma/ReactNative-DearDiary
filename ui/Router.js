import {StackNavigator} from 'react-navigation';

import Dashboard from '../ui/Dashboard';
import CreateNote from '../ui/CreateNote';

const Router = StackNavigator({
    dashboard: {
        screen: Dashboard
    },
    createNote: {
        screen: CreateNote
    }
}, {
    initialRouteName: 'dashboard',
    headerMode: 'none'
});

export default Router;