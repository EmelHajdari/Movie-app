import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

function Home() {
  const buttonStyle = {
    fontSize: "22px",
    padding: "4px 24px", 
    fontWeight: "lighter",
    borderRadius: "8px", 
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: "100vh" }}>
      <h1 style={{ marginBottom: "2rem", fontWeight: "lighter" }}>Movie App</h1>
      <div style={{ alignSelf: "center" }}>
        <Link to="/movie" style={{ textDecoration: "none", margin: "10px" }}>
          <Button 
            color="primary" 
            variant="contained"
            sx={{ 
              ...buttonStyle,
              backgroundColor: "#1976d2",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#115293",
              }
            }}
          >
            Movie
          </Button>
        </Link>
        <Link to="/tv" style={{ textDecoration: "none", margin: "10px" }}>
          <Button 
            color="success" 
            variant="contained"
            sx={{ 
              ...buttonStyle,
              backgroundColor: "#4caf50",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#66bb6a",
              }
            }}
          >
            Tv Show
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
