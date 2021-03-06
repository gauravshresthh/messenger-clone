import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ChatArea from './components/ChatArea/ChatArea';
import RightBar from './components/RightBar/RightBar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main">
				<div className="row">
					<div className="col col-md-3 sidebar shadow-sm">
						<Sidebar />
					</div>
					<div className="col  col-md-7 chatArea shadow-sm">
						<ChatArea />
					</div>
					<div className="col col-md-2 shadow-sm">
						<RightBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
