import axios from "axios";

let getData = async (userId, postId) => {
	await axios(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
		(response) => console.log(response.data)
	);
	axios(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
		(response) => console.log(response.data)
	);
};

export default getData;
