import { Header } from './header.js';
import { SearchAndSort } from './searchAndSort.js';


const createApp = () => {
  const header = Header()
  document.body.append(header)

  const searchSort = SearchAndSort()
  document.body.append(header, searchSort)
}
createApp();