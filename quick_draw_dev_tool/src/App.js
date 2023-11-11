import "./App.css";
import { primaryAccent } from "./Assests/constants";
import { AppProvider, useAppState } from "./Context/AppContext";
import GridContainer from "./Components/BookmarkCard/GridContainer";
import AddCodeSnippetDropdown from "./Components/CodeSnippetCard/AddCodeSnippetDropdown";
import DataControlButtons from "./Components/DataControlButtons";
import SearchResultCard from "./Components/SearchResultCard/SearchResultCard";
import CodeSnippetContainer from "./Components/CodeSnippetCard/CodeSnippetContainer";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: primaryAccent,
  };

  const { state } = useAppState;

  function FilteredCards() {
    const visibleCards = [1, 2, 3, 4].filter(
      (number) => state[`checkbox${number}`]
    );
    return visibleCards.map((number) => <SearchResultCard key={number} />);
  }

  return (
    <AppProvider>
      <div className="App" style={containerStyle}>
        <DataControlButtons />
        <GridContainer />
        <CodeSnippetContainer />
        <AddCodeSnippetDropdown />
      </div>
    </AppProvider>
  );
}

export default App;
