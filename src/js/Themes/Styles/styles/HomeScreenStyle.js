import { Layout, Colors } from '../../../constants';

export default {
  container: {
    flex: 1,
    padding: Layout.baseMargin
  },
  spotItemContainer: {
    display: 'inline-block',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginRight: 4
  },
  spotItemImage: {
    minHeight: '100%',
    width: 'fit-content',
  },
  spotItemImageContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }
}
