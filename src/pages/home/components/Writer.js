import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { 
  WriterWrapper,
  WriterItem
} from "../style";

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterItem>作者</WriterItem>
      </WriterWrapper>
    )
  }
}

const mapStateToProps= (state) => {
  return {

  }
}

const mapDispatchToProps= (state) => {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Writer)