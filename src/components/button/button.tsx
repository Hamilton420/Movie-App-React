import * as React from "react";
import "./button.css";

interface props {
 text :string;
 onclick : any;
 disabled? : boolean;
 color? : string ;
 text_size? : string;
 width? : string;
 height? : string;
}



class Button extends React.Component<props,{}>{
    render(){
        return ( 
            <button className={this.props.color === "primary" ? "main-btn" : "secondary-btn"} disabled={this.props.disabled} onClick={this.props.onclick}>{this.props.text}</button>
        )


    }

    
}

export default Button;

