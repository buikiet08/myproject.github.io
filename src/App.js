import { BrowserRouter as Router} from 'react-router-dom'
import Home from './screens/Home'
// import Main from './screens/Main'
import classNames from 'classnames/bind';
import styles from './component/GlobalStyle/GlobalStyle.module.scss'

const cx = classNames.bind(styles)
function App() {
  return (
    <Router>
      <div className={cx('container')}>
        <Home />
      </div>
    </Router>
  );
}

export default App;
