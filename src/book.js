/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';


class Book extends React.Component{
    state={hide:false};
    
    render(){
        let Data;
        let bookInfo= <div>
            <li>{this.props.book.author}</li>
           <li>{this.props.book.published}</li>
           <li>{this.props.book.publisher}</li>
           <li>{this.props.book.pages}</li>
           <li>{this.props.book.description}</li>
           <li> <a href={this.props.book.website}> {this.props.book.website}</a></li>
           </div>;

        let bookData;
        if(this.state.hide===true){
            bookData=null;
        }
        else{
            bookData=bookInfo;
        }
       return( 
       <div>
           <p>{this.props.book.isbn}</p>
           <h2 onClick={this.hideShowInfo}>{this.props.book.title}</h2>
           <h4>{this.props.book.subtitle}</h4>
        <ul>
        {bookData}
           {/* <li>{this.props.book.author}</li>
           <li>{this.props.book.published}</li>
           <li>{this.props.book.publisher}</li>
           <li>{this.props.book.pages}</li>
           <li>{this.props.book.description}</li>
           <li> <a href={this.props.book.website}> {this.props.book.website}</a></li> */}
        </ul>
       
        </div>
         );
    }

    hideShowInfo =()=>{
        if(this.state.hide===true){
          this.setState({hide:false});
        }  
        else{
            this.setState({hide:true});
        }
     }
}

export default Book;