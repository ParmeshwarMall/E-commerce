import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Combine from './Components/Combine';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Combine/>}/>
				</Routes>
			</Router>
		</>
	);
}

export default App;