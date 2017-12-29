import { connect } from 'react-redux'
import {HeaderComponent} from './Header'

const mapStateToProps = (state: any, ownProps: any) => {
    console.log(state, ownProps);
    return {
        activePlayer: state.activePlayer
    }
};

const HeaderContainer = connect(
    mapStateToProps
)(HeaderComponent as any);

export default HeaderContainer;