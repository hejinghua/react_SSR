
import React, {Component} from 'react';
import Header from '../../components/header'
import { connect } from 'react-redux';
import { getHomeList } from "./store/actions";

class Home extends Component {
  render(){
    return (
      <div>
        <Header />
        <div>This is {this.props.name} home</div>
        {
          this.props.list.map((item) => {
            return <div key={item.id}>{item.title}</div>
          })
        }
      </div>
    )
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }
}
Home.loadData = (store) => {
  return store.dispatch(getHomeList(true));
}
const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList,
});
const mapDispatchToProps = dispatch => ({
  getHomeList(){
    dispatch(getHomeList());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
