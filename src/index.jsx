/* eslint-disable spaced-comment */
//Root API antiga que não fornece novas funcionalidade
/*import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root')) */

//Nova Root API que forcene as novas funcionalidade
import { createRoot } from 'react-dom';
import { App } from './App';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
