import { useState } from "react";
import cakeImage from "../assets/cake.gif";
import { useDispatch, useSelector } from "react-redux";
import { buycake } from "../redux/cake/actionCreators";

export default function Cake() {
	const [quantity, setQuantity] = useState(0);
	const cakeQuantity = useSelector((state) => state.cake.cakeQuantity);
	const dispatch = useDispatch();

	return (
		<div className='cake'>
			<div className='card mb-3' style={{ maxWidth: "540px" }}>
				<div className='row g-0'>
					<div className='col-md-4 d-flex align-items-center justify-content-center p-2'>
						{" "}
						<img
							src={cakeImage}
							className='img-fluid rounded-start mh-100'
							alt='cake-gif'
							style={{
								maxHeight: "200px",
								objectFit: "contain",
							}}
						/>
					</div>
					<div className='col-md-8'>
						{cakeQuantity > 0 ? (
							<div className='card-body'>
								<h5 className='card-title'>Wanna try ?</h5>
								<p className='card-text'>
									We still have: {cakeQuantity} left in the fridge. <br />
									<strong>Hurry up!</strong>
								</p>
								<div className='d-flex gap-2 align-items-center'>
									<input
										type='number'
										className='form-control form-control-sm w-25'
										onChange={(e) => setQuantity(e.target.value)}
										value={quantity}
										min='0'
									/>
									<button
										onClick={() => {
											dispatch(buycake(quantity));
											setQuantity(0);
										}}
										type='button'
										className='btn btn-primary py-1'
										style={{ backgroundColor: "#fcbe19", border: "none" }}>
										Buy
									</button>
								</div>
							</div>
						) : (
							<div className='card-body'>
								<h5 className='card-title'>Sorry, we are out of stock!</h5>
								<p className='card-text'>
									We are currently out of cake. <br />
									<strong>Check back later!</strong>
								</p>
								<button
									type='button'
									className='btn btn-primary py-1'
									disabled
									style={{ backgroundColor: "#fcbe19", border: "none" }}>
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
