import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <main className="container">
       <h1>Метод</h1>
      <div className="tabs-wrapper">
        <div className="tab-headers">
          <button
            className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab1')}
          >
            Вкладка 1
          </button>
          <button
            className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Вкладка 2
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'tab1' && (
            <div className="tab-pane">
              <p>Первая вкладка</p>
              <button onClick={() => alert('Кнопка 1')}>Кнопка 1</button>
            </div>
          )}
          {activeTab === 'tab2' && (
            <div className="tab-pane">
              <p>Вторая вкладка</p>
              <button onClick={() => alert('Кнопка 2')}>Кнопка 2</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
