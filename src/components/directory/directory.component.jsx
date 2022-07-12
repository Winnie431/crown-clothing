import React,{Component} from "react";
import MenuItem from "../menu-item/menu-item.component";
import '../directory/directory.style.scss'

class Directory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                    
                  },
                  {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                
                },
                {
                    title: 'Women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: "large"
                
                },
                {
                    title: 'Men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: "large"
                
                }
            ]
        }

        
    }
    
    render(){
        return(
            <div className="directory-menu">
               {this.state.sections.map(({title, imageUrl, id,size}) =>(
                 <MenuItem  key={id} title={title} image={imageUrl} size={size}/>
               )) 
               }
                
             </div>
        );
    }
}
export default Directory;