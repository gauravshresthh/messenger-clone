import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ChatArea from './components/ChatArea';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main">
				<div className="row">
					<div className="col col-md-3 sidebar">
						<Sidebar />
					</div>
					<div className="col col-md-9 chatArea">
						<ChatArea />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
