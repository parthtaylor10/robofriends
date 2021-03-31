import React,{Component} from 'react';
import Cardslist from '../components/Cardslist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
class App extends Component{
    constructor(){
        super()
        this.state={
           robots: [],
           searchfield: ''
        }
    }
        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json()
            })
            .then(users=>{
                this.setState(
                    {robots: users}
            )
            })
                }  

        onsearchchange=(event)=>{
            this.setState({searchfield: event.target.value});
        
        }
    
   render(){
    const filteredrobot= this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   })
    return(
        <div className='tc'>
         <h1 style={{fontSize: 50}}>Robofriends</h1>
         <Searchbox searchchange={this.onsearchchange}/>
         <Scroll>
             <Cardslist robots={filteredrobot}/>
         </Scroll>    
        </div>
     );
   }
}
export default App;