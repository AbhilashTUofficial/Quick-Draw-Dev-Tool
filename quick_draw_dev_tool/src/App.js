import "./App.css";
import { primary } from "./Assests/constants";
import GridContainer from "./Components/BookmarkCard/GridContainer";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResultCard from "./Components/SearchResultCard/SearchResultCard";
import { AppProvider, useAppState } from "./Context/AppContext";
import './Components/Common/CustomScrollbar.css';
import CodeSnippetCard from "./Components/CodeSnippetCard/CodeSnippetCard";
import CodeSnippetDropdown from "./Components/CodeSnippetCard/CodeSnippetDropdown";
import AddCodeSnippetDropdown from "./Components/CodeSnippetCard/AddCodeSnippetDropdown";
import CodeSnippetContainer from "./Components/CodeSnippetCard/CodeSnippetContainer";
function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: primary,
  };

  function FilteredCards() {
    const { state } = useAppState();
    const visibleCards = [1, 2, 3, 4].filter((number) => state[`checkbox${number}`]);
    return visibleCards.map((number) => <SearchResultCard key={number} />);
  }

  return (
    <AppProvider>
      <div className="App" style={containerStyle}>
        <GridContainer />
        <SearchBar />
        {/* <FilteredCards /> */}
        <CodeSnippetContainer/>
        <AddCodeSnippetDropdown/>

      </div>
    </AppProvider>
  );
}

export default App;