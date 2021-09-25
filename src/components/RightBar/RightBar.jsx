import './RightBar.css';

const RightBar = () => {
	return (
		<div className="rightBar">
			<div className="my-5  d-flex align-items-center flex-column">
				<img
					src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop"
					className=""
					alt="avatar"
					style={{
						height: '80px',
						borderRadius: '50%',
						width: '80px',
						objectFit: 'contain',
					}}
				/>
				<h5>Gaurav Acharya</h5>
			</div>

			<p
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
				style={{ cursor: 'pointer' }}>
				<span>Customize Chat</span>
				<i className="fa-solid fa-chevron-down ms-4" />
			</p>
			<p
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
				style={{ cursor: 'pointer' }}>
				<span>Privacy &amp; Support</span>
				<i className="fa-solid fa-chevron-down ms-4" />
			</p>
			<p
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
				style={{ cursor: 'pointer' }}>
				<span>Shared Media</span>
				<i className="fa-solid fa-chevron-down ms-4" />
			</p>

			<div class="collapse" id="collapseExample">
				<div class="card card-body">
					Some placeholder content for the collapse component. This panel is
					hidden by default but revealed when the user activates the relevant
					trigger.
				</div>
			</div>
		</div>
	);
};

export default RightBar;
