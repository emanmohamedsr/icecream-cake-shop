import Cake from "./components/Cake";
import Icecream from "./components/Icecream";

function App() {
	return (
		<div className='container py-4'>
			<header className='text-center mb-5'>
				<h1 className='display-4 fw-bold text-danger mb-3'>
					🍨 Icecream & Cake Shop 🍰
				</h1>
				<p className='lead text-muted'>Sweet treats for everyone!</p>
			</header>

			<div className='row g-4'>
				<div className='col-md-6'>
					<div
						className='h-100 p-3 rounded-3 shadow-sm'
						style={{ backgroundColor: "#fff5f5" }}>
						<Icecream />
					</div>
				</div>
				<div className='col-md-6'>
					<div
						className='h-100 p-3 rounded-3 shadow-sm'
						style={{ backgroundColor: "#fff9e6" }}>
						<Cake />
					</div>
				</div>
			</div>

			<footer className='text-center mt-5 text-muted'>
				<small>© {new Date().getFullYear()} Sweet Treats Shop</small>
			</footer>
		</div>
	);
}

export default App;
