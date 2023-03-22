import logo from './logo.svg';
import './App.css';

function App() {

const myName = 'Kanish'
const updateAt = new Date().getFullYear(); 
const monthAt = new Date().getMonth();
const dateAt = new Date().getDate();
const dayAt = new Date().getDay();
const timeAt = new Date().getHours();
const MinAt = new Date().getMinutes();
const SecoAt = new Date().getSeconds();
return( <div>
 <span>Welcome {myName} ! </span><br />
 The current YEAR-MONTH-DATE-DAY-TIME is <br />
 <span>Year: {updateAt}</span> <br />
 <span>Month: {monthAt}</span> <br />
 <span>Date: {dateAt}</span> <br />
 <span>Day: {dayAt}</span> <br />
 <span>Time: {timeAt}:{MinAt}:{SecoAt}</span> <br />
 </div>
)
}
export default App;
