import './App.css';
import React from 'react';

function App() {
const storedItems = JSON.parse(localStorage.getItem)
const [items, setItems] = React.useState(storedItems);

// для першого завантаження проєкту

// для зміни даних у сприску справ
React.useEffect(()=>{
	const temp = JSON.stringify(items)
	localStorage.setItem("todos",temp)
},[items])


function addItem(){
	let input = document.getElementById("input")
	setItems([...items, input.value])
	console.log(items)
}
function delItem(element){
	const temp = [...items]
	temp.splice(element,1)
	setItems(temp)
	localStorage.setItem("todos", temp)
}




  return (
		<div className="todo">
		<h1>To-Do List</h1>
		<div className="form">
			<input type="text" id='input'/>
			<button onClick = {addItem}>Add</button>
		</div>
		<ul>
			{

				items.map((item, index) =>
					(
        <li><span>{item}</span>
				<span className="delete"><i className="fa fa-trash" onClick = {()=>delItem(index)}></i></span>
			</li>
					)
				)
			}
		</ul>
	</div>
  );
}

export default App;
