import { renderModuleRoutes } from './configs/routes.config/renderModules';

import './App.css';

function App() {
  return (
    <div>
      {renderModuleRoutes?.map(({ component: Component }, index) => (
        <Component key={index} />
      ))}
    </div>
  );
}

export default App;
