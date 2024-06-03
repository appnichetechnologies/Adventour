const handelSubmit = async(event) => {
	event.preventDefault();
	const username = await event.target.username.value;
	const password = await event.target.password.value;
	const alert_msg = document.getElementById('notification');

	if (username === '' || password === '') {
		alert('Invalid Values Please fill the form then submit');
	}

	const res = await fetch('/api/user/login', {
		method: 'POST',
		body: JSON.stringify({username, password})
	});

	const response = await res.json();

	if (response.returncode === 200) {
		sessionStorage.setItem("user_id", response.output[0].id);
		alert_msg.innerHTML = `
					<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">Verification Successfull</span>
						</div>
					</div>
				`;

		window.location = "/";
	}
	else{
		alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">${response.message}</span>
						</div>
					</div>
				`;
	}

}


const Login = () => {
	return (
		<div className="h-[92dvh] flex justify-center items-center">
			<div className="w-full max-w-sm max-h-full">
				<form className="shadow-[--primary-color] shadow-md border border-[--primary] rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={handelSubmit}>
					<div className="w-full text-white mb-3 flex justify-between items-center">
						<div>
							<a href="/register" className="mx-1 text-[--primary-color] underline">Sign up </a>
							<span className="">/</span>
							<a href="/login" className="mx-1 underline text-[--text-dark]">Sign in</a>
						</div>
						<h4 className="text-xl font-semibold">Login</h4>
					</div>
					<div className="my-6">
						<label className="block text-sm text-[text-dark] font-bold mb-2">
							Username
						</label>
						<input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-[--text] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
					</div>
					<div className="mb-6">
						<label className="block text-sm text-[text-dark] font-bold mb-2">
							Password
						</label>
						<input className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-[--text] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
					</div>
					<div className="flex">
						<button className="bg-[--primary-color] hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
							Sign In
						</button>
					</div>
				</form>
				<div id="notification" className="relative z-10 flex justify-center items-center"></div>
			</div>
		</div>
	)
}

export default Login;
