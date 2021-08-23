import React from "react";
import "./Components.css"

class ItemCard extends React.Component{
    render(){
        return(
            <div className={`itemCard ${this.props.shape}`} onClick={()=>this.props.setActiveProject(this.props.projectInfo.nameSort)}>
                <div className="heading2">{this.props.projectInfo.nameDisplay}</div>
            </div>
        );
    }
}

class Popup extends React.Component{
    render(){
        return(
            <>
                <div id="popupFlex">
                    <div id="msg">
                        {this.props.projectInfo.msg}
                    </div>
                    { this.props.projectInfo.url !== " " &&
                        <a href={this.props.projectInfo.url} target="_blank" rel="noreferrer">
                            <div className="button">Visit</div>
                        </a>
                    }
                </div>
            </>
        );
    }
}

export {ItemCard, Popup}