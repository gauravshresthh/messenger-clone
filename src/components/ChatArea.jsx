import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMessages } from '../store/actions/messages.actions';
import Loader from './Loader/Loader';

const ChatArea = () => {
	const dispatch = useDispatch();
	const {
		messageListSuccess,
		messageListError,
		messageListLoading,
		messageList,
	} = useSelector(state => state?.messages);
	const [currentPage, setCurrentPage] = useState(1);
	const [isShown, setIsShown] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(listMessages(currentPage));
	}, [dispatch, currentPage]);

	return (
		<div
			className="mt-3"
			style={{
				overflowY: isShown ? 'scroll' : 'hidden',
				overflowX: 'hidden',
				height: '100vh',
			}}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			id="customScrollbar">
			<div className="d-flex shadow-sm justify-content-between">
				<div className="user-data-container d-flex">
					<div className="img-container">
						<img
							src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							className="chatInfoImage"
							alt="avatar"
							style={{
								height: '50px',
								borderRadius: '50%',
								width: '50px',
								objectFit: 'contain',
							}}
						/>
					</div>

					<div className="content mx-3">
						<h5 className="">Gaurav Acharya</h5>
						<p>Active 4d ago</p>
					</div>
				</div>
				<div className="user-actions-icons mx-5 mt-3">
					<i className="fa-solid fa-phone mx-2" />
					<i className="fa-solid fa-video mx-2" />
					<i className="fa-solid fa-circle-info mx-2" />
				</div>
			</div>

			<div className="chat">
				{messageListLoading ? (
					<div className="d-flex justify-content-center align-items-center">
						<Loader />
					</div>
				) : (
					''
				)}
				{!!messageList &&
					messageList?.data?.map(user => {
						if (user?.id % 2 === 0) {
							return (
								<div
									key={user?.id}
									className="my-3 d-flex justify-content-end mx-5 ">
									<div
										className="incoming-message px-3 py-2 rounded-pill"
										style={{ display: 'inline' }}>
										{user?.id}
									</div>
								</div>
							);
						} else {
							return (
								<div className="my-3 justify-content-start mx-5 ">
									<div
										key={user?.id}
										className="outgoing-message my-3 px-3 py-2 rounded-pill "
										style={{ display: 'inline' }}>
										{user?.id}
									</div>
								</div>
							);
						}
					})}
				<button
					className="btn btn-primary"
					onClick={() => setCurrentPage(currentPage + 1)}>
					Fetch more data
				</button>
			</div>
		</div>
	);
};

export default ChatArea;
