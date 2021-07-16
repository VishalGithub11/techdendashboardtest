export const creategroup = (data)=>{
	return fetch("http://localhost:8888/api/creategroup", {
		method: "POST",
		headers: {
			 Accept: "application/json",
      "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
	}).then((reponse)=>{
		return reponse.json();
	}).catch((err)=>{
		console.log(err)
	})
}