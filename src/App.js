
import './App.css';
import DemoProps from './component/DemoProps';
import OnChange from './component/OnChange';
import ReactForm from './component/ReactForm';


function App() {
  const Comment = {
    date: new Date(),
    text: "This isthe demo task",
    avathar:{
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
        name:'The night sky'
    }
}

  return (
    <div className="App">
      <DemoProps
        date={Comment.date}
        text={Comment.text}
        avathar={Comment.avathar}
      />
      <OnChange/>
      <ReactForm/>
    </div>
  );
  
}

export default App;
