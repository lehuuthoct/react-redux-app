import {
  bindActionCreators,
  combineReducers
} from '../../../../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { fetchCoins } from '../../actions/coinActions';
import Coins from './Coins';

const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCoins
    },
    dispatch
  );

export default combineReducers(mapStateToProps, mapDispatchToProps)(Coins);
