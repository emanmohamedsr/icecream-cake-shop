import { useState } from "react";
import icecreamImage from "../assets/ice-cream.gif";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/iceCream/actionCreators";

export default function Icecream() {
	const [quantity, setQuantity] = useState(0);
	const iceCreamQuantity = useSelector(
		(state) => state.iceCream.iceCreamQuantity,
	);
	const dispatch = useDispatch();

	return (
		<div className='icecream'>
			<div className='card mb-3' style={{ maxWidth: "540px" }}>
				<div className='row g-0'>
					<div className='col-md-4 d-flex align-items-center justify-content-center p-2 bg-light'>
						{" "}
						<img
							src={icecreamImage}
							className='img-fluid rounded-start mh-100 background-light'
							alt='icecream-gif'
							style={{
								maxHeight: "200px",
								objectFit: "contain",
							}}
						/>
					</div>
					<div className='col-md-8'>
						{iceCreamQuantity > 0 ? (
							<div className='card-body'>
								<h5 className='card-title'>Wanna try ?</h5>
								<p className='card-text'>
									We still have: {iceCreamQuantity} left in the fridge. <br />
									<strong>Hurry up!</strong>
								</p>
								<div className='d-flex gap-2 align-items-center'>
									{" "}
									<input
										type='number'
										className='form-control form-control-sm w-25'
										onChange={(e) => setQuantity(e.target.value)}
										value={quantity}
										min='0'
									/>
									<button
										onClick={() => {
											dispatch(buyIcecream(quantity));
											setQuantity(0);
										}}
										type='button'
										className='btn btn-primary py-1'
										style={{ backgroundColor: "#fc979a", border: "none" }}>
										Buy
									</button>
								</div>
							</div>
						) : (
							<div className='card-body'>
								<h5 className='card-title'>Sorry, we are out of stock!</h5>
								<p className='card-text'>
									We are currently out of ice cream. <br />
									<strong>Check back later!</strong>
								</p>
								<button
									type='button'
									className='btn btn-primary py-1'
									disabled
									style={{ backgroundColor: "#fc979a", border: "none" }}>
									👀
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
