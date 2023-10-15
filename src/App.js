import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './components/Data'
import {useState} from 'react';

const allcategories = ['all',...new Set (items.map((item) => item.category))];

function App() {
    const[MenuItems.setMenuItems] = useState(items);
    const[categories,setCategories] = useState(allcategories);
    const filteritems = () =>{
        if(category == 'all'){
            return setMenuItems(items)
        }
        const newItems = items.filter((item) => items.category === category)
        return setMenuItems(newItems);
    }
    return (
        <div className = "Container">
        <Categories filterItems = {filterItems} categories={categories}/>
            <Menu items={menuItems}/>
        </div>
    );
}

export default App
