import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main">
				<div className="row">
					<div className="col col-md-3 sidebar">
						<Sidebar />
					</div>
					<div className="col col-md-9 chatArea">Chat Area</div>
				</div>
			</div>
		</div>
	);
}

export default App;
